/* eslint-env detox/detox, mocha */

describe('Testing CustomerList', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    // await device.reloadReactNative();
  });

  it('When clicking on the Entrar button, should be possible to navigate', async () => {
    await element(by.id('inputLogin')).typeText('123');
    await element(by.id('inputPass')).typeText('123');
    await device.pressBack();
    const buttonLoginEl = await element(by.id('buttonLogin'));
    await waitFor(buttonLoginEl).toBeVisible().withTimeout(5000);

    await buttonLoginEl.tap();
    await buttonLoginEl.tap();
    await waitFor(buttonLoginEl).not.toBeVisible().withTimeout(5000);
  });

  it('When accessing a tab, a customer list must be applied', async () => {
    const customerList = await element(by.id('customerList'));
    await expect(customerList).toBeVisible();
  });

  it('should be possible to view the entire list using the scroll', async () => {
    await element(by.id('customerList')).scrollTo('bottom');
    await element(by.id('customerList')).scrollTo('top');
  });

  it('There must be the Adicionar Button', async () => {
    const buttonLoginEl = await element(by.text('Adicionar'));
    await waitFor(buttonLoginEl).toBeVisible();
  });
});
