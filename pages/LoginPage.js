// const { expect } = require("@playwright/test")
exports.LoginPage = class LoginPage{

    // Get all the page elements and represent it in the constructor
    constructor(page) {
        // get all your locators of the page 
        this.page = page; // initialz teh page 

        this.myAccountLink = page.getByRole('button', { name: ' My account' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
        this.emailTxtBox = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwdTxtBox = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.account = page.getByText('Account', { exact: true });
      
    }

   async navigateToHome() {
       // navigate us to the home page 
       await this.page.goto('/') 
   }
   
   async  clickMyAccount() {
       await this.myAccountLink.click();  
   }
    
  async clickLogin() {
      await this.loginLink.click();
  }
  
   async enterUserdetails(email, pass ) {
       await this.emailTxtBox.fill(email);
       await this.passwdTxtBox.fill(pass);
       await this.loginBtn.click();
   } 

//     async verifyAccountDashboard() {
//         await expect(this.account).toBeVisible();
//    }  
    

    // create you functions
    // export the page 

}
