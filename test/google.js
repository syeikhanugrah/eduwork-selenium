const { assert } = require("chai");
const { By, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

describe("Berhasil buka halaman google", () => {
  let driver;

  before(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeService(new chrome.ServiceBuilder("./chromedriver"))
      .build();
  });

  after(async () => {
    await driver.quit();
  });

  it("Berhasil buka halaman google di browser google chrome", async () => {
    // Buka halaman google
    await driver.get("https://google.com");

    const searchBox = await driver.findElement(By.name("q"));

    await searchBox.sendKeys("Selenium");

    const searchBoxValue = await searchBox.getAttribute("value");

    assert.equal(searchBoxValue, "Selenium");
  });
});
