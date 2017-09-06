var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost/homework/homework.html');
for(let i = 0;i<12;i++){
driver.sleep(1000);
 driver.findElement(By.className('thumb')).click();
}
// driver.quit();
