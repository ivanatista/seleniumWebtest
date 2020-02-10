require('chromedriver');
const fs = require('fs');
describe('test google.com', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;
 
    beforeEach(() => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();
    });
 
     it('should open google search', async () => {
        await driver.get('https://www.google.com/');
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Google');
            });
    });
 
    it('should open google search and view search results', async () => {
        await driver.get('https://www.google.com/');
        const element = await driver.findElement(By.name('q'));
        element.sendKeys("selenium", Key.RETURN);
        await driver.wait(until.titleContains("selenium"), 10000);
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('selenium - Buscar con Google');
            });
    });
 
    // it('should open google search and do image search', async () => {
    //     await driver.get('https://www.google.com/');
    //     var element = await driver.findElement(By.name('q'));
    //     await element.sendKeys("selenium", Key.RETURN);
    //     await driver.wait(until.titleContains("selenium"), 4000);
    //     var imageSearch = driver.findElement(By.xpath("//a[contains(text(), 'Images')]"));
    //     await imageSearch.click();
    //     let image = await driver.takeScreenshot();
    //     fs.writeFileSync('out.png', image, 'base64');
 
    // });
 
});
