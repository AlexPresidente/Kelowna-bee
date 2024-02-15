const { Console } = require("console");
const { By, Key, Builder } = require("selenium-webdriver");
require("selenium-webdriver/chrome");

async function test_case() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://production-replica-95934.web.app/");
    const firstname = await driver.findElement(By.id("firstname"));
    await driver.actions().sendKeys(firstname, "Chicha").perform();
    await driver.findElement(By.id("lastname")).click();
   
        console.log("Testing Success");
        driver.quit();


    
}

test_case();