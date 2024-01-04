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
  const {
    SIGN_CHANGE,
    SIGN_RELOAD,
    SIGN_RELOADED,
    SIGN_LOG,
    SIGN_CONNECT,
  } = signals;
  const { RECONNECT_INTERVAL, RECONNECT_MAX_RETRY, SOCKET_ERR_CODE_REF } = config;

  const { extension, runtime, tabs } = chrome;
  const manifest = runtime.getManifest();

  // =============================== Helper functions ======================================= //
  const formatter = (msg: string) => `[ WER: ${msg} ]`;
  const logger = (msg, level = "info") => console[level](formatter(msg));
  const timeFormatter = (date: Date) =>
    date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

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
        runtime.sendMessage({ type: SIGN_LOG, payload: 'ping' })
      }
    }, 20 * 1000)

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }, sender, sendResponse) => {
      logger(`contentScriptWorker.onMessage, type=${type} payload=${payload}`)
      switch (type) {
        case SIGN_RELOAD:
          logger(`contentScriptWorker received SIGN_RELOAD: ${JSON.stringify(payload)}`)
          if (payload.contentChanged) {
            setTimeout(() => {
              reloadPage && window?.location.reload();
            }, 100)
          }
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
      } else {
        logger(`on ${action.type}`)
        sendResponse('pong')
      }
    });

    const socket = new WebSocket(wsHost)
    socket.onerror = (event) => {
      logger(`Could not create WebSocket in background worker: ${event}`, 'warn')
    }

    const reloadTabsAndExt = () => {
      tabs.query({ status: "complete" }).then(loadedTabs => {
        loadedTabs.forEach(
          tab => {
            if (!tab.id) return
            try {
              tabs.sendMessage(tab.id, { type: SIGN_RELOAD }).catch(e => {
                console.log('ignore error when sendMessage to tabs')
              })
              if (runtime.lastError) {
                console.log('ignore error when sendMessage to tabs')
              }
            } catch (e) {
              console.log('ignore error when sendMessage to tabs')
            }
          }
        );
        try {
          // only send message when socket is open
          socket.OPEN && socket.send(
            JSON.stringify({
              type: SIGN_RELOADED,
              payload: formatter(
                `${timeFormatter(new Date())} - ${
                  manifest.name
                } successfully reloaded`,
              ),
            }),
          );
        } catch (e) {
          logger(`socket.send failed: ${e}`, 'warn')
        }
        setTimeout(() => {
          runtime.reload();
        }, 200)
      });
    }

    socket.addEventListener("message", ({ data }: MessageEvent) => {
      const { type, payload } = JSON.parse(data);
      console.log('on ws message', type, payload)

      // if (type === SIGN_CHANGE && (!payload || payload.onlyPageChanged)) {
      if (type === SIGN_CHANGE && (!payload || payload.bgChanged)) {
        // only reload when background is changed
        reloadTabsAndExt()
      } else {
        logger(`sendMessage -> ?: ${type}`)
        runtime.sendMessage({ type, payload });
      }
    });

    socket.addEventListener("close", ({ code }: CloseEvent) => {
      // https://datatracker.ietf.org/doc/html/rfc6455#section-7.4.1
      if (code === 1006) {
        // this is the code when webpack is not running, other code should be omitted
      } else {
        logger(
          `Socket connection closed. Code ${code}. See more in ${
            SOCKET_ERR_CODE_REF
          }`,
          "warn",
        );
        return
      }

      let retryCount = 0;

      const retryWebSocket = () => new Promise<void>((resolve, reject) => {
        retryCount++
        if (retryCount > RECONNECT_MAX_RETRY) {
          logger('Max retry count reached. Stopping reconnection attempts')
          return
        }
        logger("Attempting to reconnect (tip: Check if Webpack is running)");

        const ws = new WebSocket(wsHost);
        ws.onerror = (e) => {
          logger(`Error trying to re-connect. Reattempting in ${RECONNECT_INTERVAL / 1000}s`, "warn");
          reject(e)
        }
        ws.addEventListener("open", () => {
          logger("Reconnected. Reloading plugin");

          reloadTabsAndExt()
          resolve()
        });
      }).catch(e => {
        console.log(`call retryWebSocket again after catch: ${e}`)
        setTimeout(retryWebSocket, RECONNECT_INTERVAL)
      })
      setTimeout(retryWebSocket, RECONNECT_INTERVAL)
    });
  }

  // ======================== Called only on extension pages that are not the background ============================= //
  function extensionPageWorker() {
    logger('extensionPageWorker')
    if (runtime.id) {
      logger(`extensionPageWorker sendMessage: ${SIGN_CONNECT}`)
      runtime.sendMessage({ type: SIGN_CONNECT })
    }

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }, sender, sendResponse) => {
      switch (type) {
        case SIGN_CHANGE:
          logger(`extensionPageWorker received SIGN_CHANGE: ${JSON.stringify(payload)}`)
          if (payload.pageChanged) {
            logger("Detected Changes. Reloading...");
            // Always reload extension pages in the foreground when they change.
            // This option doesn't make sense otherwise
            window?.location.reload();
          }
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
