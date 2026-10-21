import{test} from '@playwright/test'
import { general } from '../lib/general';

test("TC001 - Login into Application", async({page}) => {
    const obj = new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});