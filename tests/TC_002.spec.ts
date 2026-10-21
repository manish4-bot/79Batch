import { general } from '../lib/general';
import{test} from '@playwright/test';

test('Verify Add user', async({page}) => {

    const hrms = new general(page);
    await hrms.openApplication();
    await hrms.login();
    await hrms.addEmp();
    await hrms.wait();
    await hrms.logout();
});