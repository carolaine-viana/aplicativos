/* eslint-env detox/detox, mocha */

describe('Navigation', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('renders login succesfully', async () => {
    const welcomeLogin = await element(by.text('Olá!'));
    await expect(welcomeLogin).toBeVisible();
  });

  it('When clicking on the Entrar button, should be possible to navigate throught the menu', async () => {
    await element(by.id('inputLogin')).typeText('123');
    await element(by.id('inputPass')).typeText('123');
    await device.pressBack();
    await element(by.id('buttonLogin')).tap();
    await element(by.id('buttonLogin')).tap();

    const menuName = await element(by.id('Menu'));
    expect(menuName).toBeVisible();
  });
});
