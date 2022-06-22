/* eslint-env detox/detox, mocha */

import { login } from '../testFunctions.e2e';

describe('Testing DashBoard', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should login', async () => {
    await login();
  });

  it('should render DashCustomerCard', async () => {
    const customerList = await element(by.id('dash'));
    console.log('customerList:', customerList);
    await expect(customerList).toBeVisible();
  });
});
