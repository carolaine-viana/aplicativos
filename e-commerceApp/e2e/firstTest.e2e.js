describe('Login Screen', () => {
    beforeAll(async() => {
        await device.launchApp();
    });

    beforeEach(async() => {
        await device.reloadReactNative();
    });

    it('should be able to access the app', async() => {
        const buttonAdd = await element(by.id('button-add'))
        await buttonAdd.tap()

        const typeEmail = await element(by.id('input-email'))
        await typeEmail.tap()

        const typePassword = await element(by.id('input-senha'))
        await typeEmail.typeText('carolsantos14@hotmail.com')

        await typePassword.tap()
        await typePassword.typeText('carolsantos14@hotmail.com')

        const clickLogin = await element(by.id('loginclick'))
        await clickLogin.tap()
    });

});