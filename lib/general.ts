//To provide all the resusable function/method realted to whole application.
import { Global } from "./global";

//user inheritance in here
export class general extends Global{

    //user define method

    async openApplication(){
        await this.page.goto(this.url)
        console.log("Application open");
    }

    async login(){
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.click_login).click();
        console.log("login sucessfully")
    }

    async logout(){
        await this.page.locator(this.logout_link).click();
        console.log('Logout sucessfully');
    }

    async addEmp(){
        const frame = this.page.frameLocator(this.iframe);
        await frame.locator(this.clickAddbtn).click();
        await frame.locator(this.empfname).fill(this.f_name);
        await frame.locator(this.emplname).fill(this.l_name);
        await frame.locator(this.BtnSave).click();
    }

    async wait(){
        await this.page.waitForTimeout(3000);
    }
}
