/* eslint:disable */
/* -------------------------------------------------- */
/*      Start of Webpack Hot Extension Middleware     */
/* ================================================== */
/*  This will be converted into a lodash templ., any  */
/*  external argument must be provided using it       */
/* -------------------------------------------------- */
(function() {
  const injectionContext = this || window || {chrome: null};

  const { chrome }: any = injectionContext || {};
  const signals: any = JSON.parse('<%= signals %>');
  const config: any = JSON.parse('<%= config %>');

  const reloadPage: boolean = ("<%= reloadPage %>" as "true" | "false") === "true";
  const wsHost = "<%= WSHost %>";
  const httpHost = "<%= HTTPHost %>";
  const {
    SIGN_CHANGE,
    SIGN_RELOAD,
    SIGN_RELOADED,
    SIGN_LOG,
    SIGN_CONNECT,
  } = signals;
  const { RECONNECT_INTERVAL, RECONNECT_MAX_RETRY, SOCKET_ERR_CODE_REF, HTTP_SUCCESS_RESPONSE } = config;

  const { extension, runtime, tabs } = chrome;
  const manifest = runtime.getManifest();

  // =============================== Helper functions ======================================= //
  const formatter = (msg: string) => `[ WER: ${msg} ]`;
  const logger = (msg, level = "info") => console[level](formatter(msg));
  const timeFormatter = (date: Date) =>
    date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

  const ignoreSendError = (sendFrom: string, sendTo: string) => (e: any) => {
    console.warn(`ignore error of sendMessage from ${sendFrom} to ${sendTo}`)
  }

  // ========================== Called only on content scripts ============================== //
  function contentScriptWorker() {
    logger('contentScriptWorker')
    runtime.sendMessage({ type: SIGN_CONNECT })

    if (runtime.lastError) {
      logger(`Whoops..chrome.runtime.lastError: ${  chrome.runtime.lastError.message}`, 'warn');
    }

    // to keep background alive
    setInterval(() => {
      if (runtime?.id) {
        runtime.sendMessage({ type: SIGN_LOG, payload: 'ping' }).catch(ignoreSendError('content_script', 'background'))
      }
    }, 20 * 1000)

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }, sender, sendResponse) => {
      logger(`contentScriptWorker.onMessage, type=${type} payload=${payload}`)
      switch (type) {
        case SIGN_RELOAD:
          logger(`contentScriptWorker received SIGN_RELOAD: ${JSON.stringify(payload)}`)
          setTimeout(() => {
            reloadPage && window?.location.reload();
          }, 100)
          break;
        default:
          break;
      }
    });

    if (runtime.lastError) {
      logger(`Whoops..chrome.runtime.lastError: ${  chrome.runtime.lastError.message}`, 'warn');
    }
  }

  // ======================== Called only on background scripts ============================= //
  function backgroundWorker() {
    logger('backgroundWorker')
    runtime.onMessage.addListener((action: { type: string; payload: any }, sender, sendResponse) => {
      if (action.type === SIGN_CONNECT) {
        logger('on SIG_CONNECT')
        sendResponse(formatter("Connected to Web Extension Hot Reloader"));
      } else if (action.type === SIGN_LOG) {
        logger(`on ${action.type}`)
        sendResponse('pong')
      }
    });

    const socket = new WebSocket(wsHost)
    socket.onerror = (event) => {
      logger(`Could not create WebSocket in background worker: ${event}`, 'warn')
    }

    const reloadTabs = (allTabs = false) => {
      let tabsQuery: chrome.tabs.QueryInfo = { active: true, currentWindow: true }
      if (allTabs) {
        tabsQuery = { status: "complete"  }
      }

      return tabs.query(tabsQuery).then(loadedTabs => {
        loadedTabs.forEach(
          tab => {
            if (!tab.id) return
            tabs.sendMessage(tab.id, { type: SIGN_RELOAD }).catch(ignoreSendError('background', 'tabs'))
          }
        );
      });
    }

    const reloadExt = (tellServer = true) => {
      if (tellServer) {
        // only send message when socket is open
        socket.readyState === 1 && socket.send(
          JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter(
              `${timeFormatter(new Date())} - ${
                manifest.name
              } successfully reloaded`,
            ),
          }),
        );
      }
      setTimeout(() => {
        runtime.reload();
      }, 200)
    }

    socket.addEventListener("message", ({ data }: MessageEvent) => {
      const { type, payload } = JSON.parse(data);
      console.log('on ws message', type, payload)

      // if (type === SIGN_CHANGE && (!payload || payload.onlyPageChanged)) {
      // SIGN_CHANGE should be the only type of message background get from server
      if (type === SIGN_CHANGE) {
        const shouldReloadExt = !payload || payload.bgChanged;
        // to avoid "Extension context invalidated" error, if extension is reloaded, content scripts should also be reloaded, see https://stackoverflow.com/a/55336841/596206
        const shouldReloadTabs = shouldReloadExt || payload.contentChanged;
        // reload extension will close all the extension pages, so reload pages is only necessary when extension reload is not needed
        const shouldReloadPages = payload.pageChanged && !shouldReloadExt;
        logger(`reload vars: shouldReloadExt=${shouldReloadExt} shouldReloadTabs=${shouldReloadTabs} shouldReloadPages=${shouldReloadPages}`);

        (async () => {
          if (shouldReloadTabs) {
            await reloadTabs()
          }
          if (shouldReloadPages) {
            // proxy message to extension page to reload, which may not be opened at the time
            runtime.sendMessage({ type, payload }).catch(ignoreSendError('background', 'others'))
          }
          if (shouldReloadExt) {
            reloadExt()
          }
        })();

      } else {
        logger(`get other type of message from the server: ${type}, ${JSON.stringify(payload)}`)
        // runtime.sendMessage({ type, payload }).catch(ignoreSendError('background', 'others'));
      }
    });

    socket.addEventListener("close", ({ code }: CloseEvent) => {
      // https://datatracker.ietf.org/doc/html/rfc6455#section-7.4.1
      if (code === 1006) {
        // this is the code when webpack is not running, other code should be omitted
      } else {
        logger(`Socket connection closed. Code ${code}. See more in ${SOCKET_ERR_CODE_REF}`, "warn");
        return
      }

      let retryCount = 0;

      const retryConnectToServer = () => {
        retryCount++
        if (retryCount > RECONNECT_MAX_RETRY) {
          logger('Max retry count reached. Stopping reconnection attempts')
          return
        }
        logger("Attempting to reconnect (tip: Check if Webpack is running)");

        fetch(httpHost).then((res) => {
          // read body
          res.text().then((text) => {
            if (text === HTTP_SUCCESS_RESPONSE) {
              logger("Reconnected. Reloading plugin");

              // do not tell server about the reload, because the server is possibly not ready
              reloadTabs().then(() => reloadExt(false))
            } else {
              logger('Connected to a wrong server, stop retrying, please make sure webpack-ext-reloader is listening an exclusive port.', 'warn')
            }
          })
        }).catch(e => {
          logger(`Error trying to re-connect. Reattempting in ${RECONNECT_INTERVAL / 1000}s`, "warn");
          setTimeout(retryConnectToServer, RECONNECT_INTERVAL)
        })
      }

      setTimeout(retryConnectToServer, RECONNECT_INTERVAL)
    });
  }

  // ======================== Called only on extension pages that are not the background ============================= //
  function extensionPageWorker() {
    logger('extensionPageWorker')
    if (runtime.id) {
      logger(`extensionPageWorker sendMessage: ${SIGN_CONNECT}`)
      runtime.sendMessage({ type: SIGN_CONNECT })
    }

    // to keep background alive
    setInterval(() => {
      if (runtime.id) {
        runtime.sendMessage({ type: SIGN_LOG, payload: 'ping' }).catch(ignoreSendError('extension_page', 'background'))
      }
    }, 20 * 1000)

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }, sender, sendResponse) => {
      switch (type) {
        case SIGN_CHANGE:
          logger(`extensionPageWorker received SIGN_CHANGE: ${JSON.stringify(payload)}`)
          // Always reload extension pages in the foreground when they change.
          window?.location.reload();
          break;

        default:
          break;
      }
    });
  }

  // ======================= Bootstraps the middleware =========================== //
  runtime.reload
    // in MV3 background service workers don't have access to the DOM
    ? (typeof window === 'undefined' || extension.getBackgroundPage() === window)
      ? backgroundWorker() : extensionPageWorker()
    : contentScriptWorker();
})();

/* ----------------------------------------------- */
/* End of Webpack Hot Extension Middleware  */
/* ----------------------------------------------- */
