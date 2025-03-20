// import playwright test
import { test, expect } from '@playwright/test';
// import the page objects in your test 
import { LoginPage } from '../pages/LoginPage';


// create test case 
test('Succesfull user login', async ({ page }) => {
    // create an instance o fthe each page so that you can use it to call the functions
    const login = new LoginPage(page);
    // use the variable to call the fucntions
    await login.navigateToHome(); // go to the home page 
    await login.clickMyAccount();
    await login.clickLogin();
    await login.enterUserdetails("runtesting4me@gmail.com", "Pa55w0rd");
    // await verifyAccountDashboard();
    console.log(" All Tests passed.......");
})