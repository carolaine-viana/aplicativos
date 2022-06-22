/* eslint-env detox/detox, mocha */

import { login } from '../testFunctions.e2e';

describe('Testing CustomerDetails', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    // await device.reloadReactNative();
  });

  it('should login', async () => {
    await login();
  });

  describe('Tests maps visualization', () => {
    it('should load customer routes map', async () => {
      const map = await element(by.id('customerRoutesMaps'));
      await waitFor(map).toBeVisible().withTimeout(5000);
    });

    it('should render a button to center map on the screen ', async () => {
      const centerButton = await element(by.id('centerLocationButton'));

      await waitFor(centerButton).toBeVisible().withTimeout(5000);
    });
    it.skip('should render a user marker identifier on the map ', async () => {
      const map = await element(by.id('userMarker'));

      await waitFor(map).toBeVisible().withTimeout(10000);
    });
  });
});
