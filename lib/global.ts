//To provide test data and object/ method related to whole application
import{Page} from '@playwright/test';

export class Global {
    constructor(public page : Page){
        
    }
    //***************************** Test Data ******************************************* */
    public url :      string = "https://sureshitacademy.in/hrms/login.php";
    public username : string = "sureshit";
    public password : string = "sureshit";
    public f_name    : string = 'man';
    public l_name    : string = 'max';

    //***************************** Object/ Elements ******************************************* */
    public textbox_loginname : string = '//input[@name="txtUserName"]';
    public textbox_password  : string = "//input[@name='txtPassword']";
    public click_login       : string = "//input[@name='Submit']";
    public logout_link       : string = "//a[text()='Logout']";
    public iframe             : string = "//iframe[@id='rightMenu']";
    public clickAddbtn       : string = "//input[@value='Add']";
    public empfname          : string = "//input[@name='txtEmpFirstName']";
    public emplname          : string = "//input[@name='txtEmpLastName']";
    public BtnSave           : string = "//input[@value='Save']";
}