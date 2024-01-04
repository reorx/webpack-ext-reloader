import {
  createServer,
  Server as HTTPServer,
} from 'http';
import { Server } from 'ws';

import { parse } from '@kingyue/useragent';

import {
  HTTP_SUCCESS_RESPONSE,
} from '../constants/middleware-config.constants';
import { info } from '../utils/logger';
import SignEmitter from './SignEmitter';

export default class HotReloaderServer {
  private _server: Server;

  private _httpServer: HTTPServer;

  port: number;

  private _signEmitter: SignEmitter;

  constructor(port: number) {
    this._httpServer = createServer();
    this._server = new Server({
      // use http server to construct websocket server so that they both serve the same port
      server: this._httpServer,
    });
    this.port = port;
  }

  public listen() {
    this._httpServer.on('request', (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(HTTP_SUCCESS_RESPONSE);
    })
    this._server.on("connection", (ws, msg) => {
      const userAgent = parse(msg.headers["user-agent"]);
      this._signEmitter = new SignEmitter(this._server, userAgent);

      ws.on("message", (data: string) => info(`Message from ${userAgent.family}: ${JSON.parse(data).payload}`));
      ws.on("error", () => {
        // NOOP - swallow socket errors due to http://git.io/vbhSN
      });
    });
    this._httpServer.listen(this.port, () => {
      info(`[ Web Extension Hot Reload Server (HTTP/WebSocket) listening on ${this.port} ]`);
    })
  }

  public signChange(reloadPage: boolean, bgChanged: boolean, contentChanged: boolean, pageChanged: boolean): Promise<any> {
    if (this._signEmitter) {
      return this._signEmitter.safeSignChange(reloadPage, bgChanged, contentChanged, pageChanged);
    }
    return Promise.resolve(null);
  }
}
