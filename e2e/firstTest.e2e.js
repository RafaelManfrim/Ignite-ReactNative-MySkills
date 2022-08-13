describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register a new skill', async () => {
    const inputNewSkill = await element(by.id('inputNewSkill'))
    const buttonAddSkill = await element(by.id('button-add'))
    const skillsList = await element(by.id('skillsList'))

    await inputNewSkill.tap()
    await inputNewSkill.typeText('React Native')
    await buttonAddSkill.tap()

    await expect(skillsList).toBeVisible();
  });
});
