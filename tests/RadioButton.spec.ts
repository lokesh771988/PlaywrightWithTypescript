import {test, expect} from '@playwright/test';

test("RadioButton", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    /*const radio = await page.locator('#male')
    await radio.check();
    await expect(radio).toBeChecked();
    await expect(radio.isChecked()).toBeTruthy()
    const felmal = await page.locator('#female')
    */
    await expect(await page.locator('#female').isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);
})