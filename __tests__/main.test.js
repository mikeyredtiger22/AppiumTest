import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100 * 1000;

const capabilities = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: '/Users/michael/Documents/appium-test/my-appium-test-proj/AppiumTest/android/app/build/outputs/apk/release/app-release.apk',
};

const driver = wd.promiseChainRemote('localhost', 4723);

describe('App', () => {
  beforeAll(async () => {
    await driver
      .init(capabilities)
      .setImplicitWaitTimeout(2000);
  });

  afterAll(async () => {
    try {
      await driver.quit();
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * 1. Navigate
   * 2. Wait for view to be visible
   * 3. Read Counter
   * 4. Press Counter and check value
   * 5. Pop view
   */

  // todo intellisense for wd driver
  it('Renders home screen', async () => {
    expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('TestPagePopNav')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('IntroPageNavToTestPage')).toBe(true);

  });

  it('Navigates to test screen', async () => {
    await driver.elementByAccessibilityId('IntroPageNavToTestPage').tap();
  });

  it('Renders test screen', async () => {
    await driver.waitForElementByAccessibilityId('counterInc', 2000);
    expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('TestPagePopNav')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('IntroPageNavToTestPage')).toBe(false);
  });

  it('Navigates back to home screen', async () => {
    await driver.elementByAccessibilityId('TestPagePopNav').tap();
  });

  it('Renders home screen again', async () => {
    await driver.waitForElementByAccessibilityId('IntroPageNavToTestPage')
    expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('TestPagePopNav')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('IntroPageNavToTestPage')).toBe(true);
  });
});
