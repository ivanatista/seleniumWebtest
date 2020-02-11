require('chromedriver');

const utils = require('./utils');
const fs = require('fs');

describe('contact form validation automationpractice.com', () => {
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
 
     it('should open automationpractice contact form', async () => {
        await driver.get('http://automationpractice.com/index.php?controller=contact');
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Contact us - My Store');
            });
    }); 

    it('should complete contact form successfuly', async () => {
        await driver.get('http://automationpractice.com/index.php?controller=contact');

        let subject = await driver.findElement(By.xpath('//*[@id="id_contact"]/option[2]'));
        subject.click();

        let email = await driver.findElement(By.id('email'));
        email.sendKeys("ies@jds.cc");

        let orderRef = await driver.findElement(By.id('id_order'));
        orderRef.sendKeys('23412134');

        let messageField = await driver.findElement(By.id('message'));
        messageField.sendKeys('Test message');

        let submitBtn = await driver.findElement(By.id('submitMessage'));
        submitBtn.click();
    });
 
});
