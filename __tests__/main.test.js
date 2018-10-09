import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100 * 1000;

const capabilities = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: '/Users/michael/Documents/appium-test/my-appium-test-proj/AppiumTest/android/app/build/outputs/apk/release/app-release.apk'
};

const driver = wd.promiseChainRemote('localhost', 4723);

describe('App', () => {
  beforeAll(async () => {
    try {
      await driver.init(capabilities);
    }
    catch(error) {
      console.error(error);
    }
  });

  afterAll(async () => {
    try {
      await driver.quit();
    }
    catch(error) {
      console.error(error);
    }
  });

  it('app renders', async () => {
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  });
});
