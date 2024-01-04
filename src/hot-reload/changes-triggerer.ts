import { info } from '../utils/logger';
import HotReloaderServer from './HotReloaderServer';

export const changesTriggerer: TriggererFactory = (port: number, reloadPage: boolean) => {
  const server = new HotReloaderServer(port);

  info("[ Starting the Web Extension Hot Reload Server... ]");
  server.listen();

  return (bgChanged: boolean, contentChanged: boolean, pageChanged: boolean): Promise<any> => server.signChange(reloadPage, bgChanged, contentChanged, pageChanged);
};
