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

  it('When accessing a tab, a road map list must be applied', async () => {
    const roadMapList = await element(by.id('roadMapList'));
    await expect(roadMapList).toBeVisible();
  });

  it('should be possible to view the entire list using the scroll', async () => {
    await element(by.id('roadMapList')).scrollTo('bottom');
    await element(by.id('roadMapList')).scrollTo('top');
  });

  it('should be possible to edit the visit', async () => {
    const buttonEdit = await element(by.text('Editar'));
    await waitFor(buttonEdit).toBeVisible();
    await buttonEdit.tap()
  });

  it('should be possible to completed the visit', async () => {
    const buttonEdit = await element(by.text('Concluir'));
    await waitFor(buttonEdit).toBeVisible();
    await buttonEdit.tap()
  });

  it('should be possible to delete the visit', async () => {
    const buttonEdit = await element(by.text('Excluir'));
    await waitFor(buttonEdit).toBeVisible();
    await buttonEdit.tap()
  });
});
