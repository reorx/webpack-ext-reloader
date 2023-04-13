/* eslint:disable */
/* -------------------------------------------------- */
/*      Start of Webpack Hot Extension Middleware     */
/* ================================================== */
/*  This will be converted into a lodash templ., any  */
/*  external argument must be provided using it       */
/* -------------------------------------------------- */
(function(_window) {
  let window: any
  if (_window.document !== undefined) {
    window = _window
  }

  const injectionContext = this || {chrome: null};

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

  const { runtime, tabs } = chrome;
  const manifest = runtime.getManifest();

  // =============================== Helper functions ======================================= //
  const formatter = (msg: string) => `[ WER: ${msg} ]`;
  const logger = (msg, level = "info") => console[level](formatter(msg));
  const timeFormatter = (date: Date) =>
    date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

  // ========================== Called only on content scripts ============================== //
  function contentScriptWorker() {
    // console.log('contentScriptWorker')
    runtime.sendMessage({ type: SIGN_CONNECT })

    if (runtime.lastError) {
      console.warn(`Whoops..chrome.runtime.lastError: ${  chrome.runtime.lastError.message}`);
    }

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }, sender, sendResponse) => {
      console.log('contentScriptWorker.onMessage', type, payload)
      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading...");
          sendResponse('ok, reload')
          setTimeout(() => {
            reloadPage && window?.location.reload();
          }, 100)
          break;
        case SIGN_LOG:
          console.info(payload);
          break;
        default:
          break;
      }
    });

    if (runtime.lastError) {
      console.warn(`Whoops..chrome.runtime.lastError: ${  chrome.runtime.lastError.message}`);
    }
  }

  // ======================== Called only on background scripts ============================= //
  function backgroundWorker() {
    // console.log('backgroundWorker')
    runtime.onMessage.addListener((action: { type: string; payload: any }, sender, sendResponse) => {
      if (action.type === SIGN_CONNECT) {
        console.log('on SIG_CONNECT')
        sendResponse(formatter("Connected to Web Extension Hot Reloader"));
      } 
    });

    const socket = new WebSocket(wsHost)
    socket.onerror = (event) => {
      logger(`webpack-ext-reloader: Could not create WebSocket in background worker: ${event}`, 'warn')
    }

    socket.addEventListener("message", ({ data }: MessageEvent) => {
      const { type, payload } = JSON.parse(data);

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({ status: "complete" }).then(loadedTabs => {
          loadedTabs.forEach(
            tab => tab.id && tabs.sendMessage(tab.id, { type: SIGN_RELOAD }),
          );
          socket.send(
            JSON.stringify({
              type: SIGN_RELOADED,
              payload: formatter(
                `${timeFormatter(new Date())} - ${
                  manifest.name
                } successfully reloaded`,
              ),
            }),
          );
          runtime.reload();
        });
      } else {
        runtime.sendMessage({ type, payload });
      }
    });

    socket.addEventListener("close", ({ code }: CloseEvent) => {
      logger(
        `Socket connection closed. Code ${code}. See more in ${
          SOCKET_ERR_CODE_REF
        }`,
        "warn",
      );

      let retryCount = 0;

      const intId = setInterval(() => {
        retryCount++
        if (retryCount > RECONNECT_MAX_RETRY) {
          clearInterval(intId);
          logger('Max retry count reached. Stopping reconnection attempts')
        }
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        const ws = new WebSocket(wsHost);
        ws.onerror = () => logger(`Error trying to re-connect. Reattempting in ${RECONNECT_INTERVAL / 1000}s`, "warn");
        ws.addEventListener("open", () => {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });

      }, RECONNECT_INTERVAL);
    });
  }

  // ======================== Called only on extension pages that are not the background ============================= //
  function extensionPageWorker() {
    // console.log('extensionPageWorker')
    runtime.sendMessage({ type: SIGN_CONNECT })

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }, sender, sendResponse) => {
      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading...");
          sendResponse('ok, reload')
          // Always reload extension pages in the foreground when they change.
          // This option doesn't make sense otherwise
          window?.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;

        default:
          break;
      }
    });
  }

  // ======================= Bootstraps the middleware =========================== //
  runtime.reload
    ? !window ? backgroundWorker() : extensionPageWorker()
    : contentScriptWorker();
})(this);

/* ----------------------------------------------- */
/* End of Webpack Hot Extension Middleware  */
/* ----------------------------------------------- */
