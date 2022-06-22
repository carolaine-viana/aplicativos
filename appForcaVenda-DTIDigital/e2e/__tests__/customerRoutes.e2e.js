/* eslint-env detox/detox, mocha */

describe('Testing CustomerRoutes', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    // await device.reloadReactNative();
  });

  it('When clicking on the Entrar button, should be possible to navigate throught the menu', async () => {
    await element(by.id('inputLogin')).typeText('123');
    await element(by.id('inputPass')).typeText('123');
    await device.pressBack();
    const buttonLoginEl = await element(by.id('buttonLogin'));
    await waitFor(buttonLoginEl).toBeVisible().withTimeout(5000);

    await buttonLoginEl.tap();
    await buttonLoginEl.tap();
    await waitFor(buttonLoginEl).not.toBeVisible().withTimeout(5000);
  });

  it('should render customer routes container screen', async () => {
    const constainer = await element(by.id('customerRoutescontainer'));
    await expect(constainer).toBeVisible();
  });

  it('should render clickemonBadge', async () => {
    const clickemonBadge = await element(by.id('clickemonBadge'));
    await expect(clickemonBadge).toBeVisible();
  });

  it('should render customer amount (number)', async () => {
    const clickemonAmount = await element(by.id('customerAmount'));
    await expect(clickemonAmount).toHaveText('11');
  });

  it('should render clickemon text: "Clickemons próximos"', async () => {
    const clickemonText = await element(by.text('Clickemons próximos'));
    await expect(clickemonText).toBeVisible();
  });

  it.skip('should render user marker upon the map', async () => {
    await waitFor(element(by.id('userMarker')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
