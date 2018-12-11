import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const PORT = 4723;

const driver = wd.promiseChainRemote('0.0.0.0', PORT);

const config = {
  automationName: "XCUITest",
  platformName: 'iOS',
  platformVersion: '12.1',
  deviceName: 'iPhone X',
  app: '/Users/pandora/GIT/testApium/ios/build/Build/Products/Debug-iphonesimulator/testApium.app'
};

beforeAll(async () => {
  try {
    await driver.init(config);
    await driver.sleep(2000);
  } catch (err) {
    console.log(err);
  }
});

afterAll(async () => {
  try {
    await driver.quit();
  } catch (err) {
    console.error(err);
  }
});

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});

test('appium button click', async () => {
  expect(await driver.hasElementByAccessibilityId('button')).toBe(true);
  await driver.elementByAccessibilityId('button').click().click();

  const counter = await driver.elementByAccessibilityId('counter').text();
  expect(counter).toBe("2");
});

test('appium text input', async () => {
  await driver.elementByAccessibilityId('textinput').type("hello");

  const resultText = await driver.elementByAccessibilityId('text').text();
  expect(resultText).toBe("hello")
});