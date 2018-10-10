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

  it('app renders', async () => {
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
    // expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
    // expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(true);
  });


  // it('appium button click', async () => {
  //   let counterIncButton = await driver.elementByAccessibilityId('counterInc');
  //   counterIncButton.tap();
  //   counterIncButton.tap();
  // });
  //
  // it('appium button click', async () => {
  //   // expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
  //   let counter = await driver.elementByAccessibilityId('counter');
  //   expect(await counter.text()).toBe('Counter: 2');
  // });

  // it('should render correctly', async () => {
  //   expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  //   expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  // });
  //
  // it('should see more', async () => {
  //   expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  //   expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  //   expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(true);
  //   expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
  // });
  //
  // it('click', async () => {
  //   let el1 = await driver.elementByAccessibilityId("counterInc");
  //   await el1.click();
  //   await el1.tap();
  //   let el2 = await driver.elementByXPath('//android.widget.Button[@content-desc="counterInc"]');
  //   await el2.tap();
  //   await el2.click();
  //   expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
  //   expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  //   expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(true);
  // });
});
