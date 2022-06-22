/* eslint-env detox/detox, mocha */

import { login, navigateTo } from '../testFunctions.e2e';

describe('Testing Visit schedule', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    // await device.reloadReactNative();
  });

  it('should login', async () => {
    await login();
  });

  it('should navigate to listaClientes', async () => {
    await navigateTo('listaClientes');
  });
});
