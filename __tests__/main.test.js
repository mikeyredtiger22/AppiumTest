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
    try {
      await driver.init(capabilities);
    } catch (error) {
      console.error(error);
    }
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
    await driver.waitForElementByAccessibilityId('IntroPageNavToTestPage', 2000);
    expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('TestPagePopNav')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('IntroPageNavToTestPage')).toBe(true);
  });

  it('Navigates', async () => {
    await driver.elementByAccessibilityId('IntroPageNavToTestPage').tap()
      .waitForElementByAccessibilityId('TestPagePopNav', 200).tap();
  });


  it('Renders home screen again', async () => {
    await driver.waitForElementByAccessibilityId('IntroPageNavToTestPage', 2000);
    expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('TestPagePopNav')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('IntroPageNavToTestPage')).toBe(true);
  });
});
