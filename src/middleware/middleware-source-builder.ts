import { template } from 'lodash';
import rawSource from 'raw-loader!./wer-middleware.raw';
import {
  RawSource,
  Source,
} from 'webpack-sources';

import {
  HTTP_SUCCESS_RESPONSE,
  RECONNECT_INTERVAL,
  RECONNECT_MAX_RETRY,
  SOCKET_ERR_CODE_REF,
} from '../constants/middleware-config.constants';
import * as signals from '../utils/signals';

export default function middleWareSourceBuilder({ port, reloadPage }: IMiddlewareTemplateParams): Source {
  const tmpl = template(rawSource);

  return new RawSource(
    tmpl({
      WSHost: `ws://localhost:${port}`,
      HTTPHost: `http://localhost:${port}`,
      config: JSON.stringify({ RECONNECT_INTERVAL, RECONNECT_MAX_RETRY, SOCKET_ERR_CODE_REF, HTTP_SUCCESS_RESPONSE }),
      reloadPage: `${reloadPage}`,
      signals: JSON.stringify(signals),
    }),
  );
}
