/* eslint-env detox/detox, mocha */

describe('Testing Login', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should not allow click when fields are empty', async () => {
    element(by.id('buttonLogin')).tap();
    await expect(element(by.id('loggedIn'))).not.toBeVisible();
  });

  it('should not allow click when login is empty', async () => {
    await element(by.id('inputPass')).typeText('123');
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.id('loggedIn'))).not.toBeVisible();
  });

  it('should not allow click when pass is empty', async () => {
    await element(by.id('inputLogin')).typeText('123');
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.id('loggedIn'))).not.toBeVisible();
  });

  it('should allow click when fields are filled', async () => {
    await element(by.id('inputLogin')).typeText('123');
    await element(by.id('inputPass')).typeText('123');

    await element(by.id('buttonLogin')).tap();
    await expect(element(by.id('loggedIn'))).not.toBeVisible();
  });
});
