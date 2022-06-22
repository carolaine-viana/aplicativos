export const login = async () => {
  const buttonLoginEl = await element(by.id('buttonLogin'));
  await waitFor(buttonLoginEl).toBeVisible().withTimeout(5000);

  await buttonLoginEl.tap();
  await waitFor(buttonLoginEl).not.toBeVisible().withTimeout(5000);
};

export const navigateTo = async (tabName) => {
  await expect(element(by.id('Menu'))).toBeVisible();
  await expect(element(by.id(tabName))).toBeVisible();
};
