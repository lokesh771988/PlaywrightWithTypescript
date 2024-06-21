import {test, expect} from '@playwright/test';

test("Hover",  async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    //await page.locator("//a[text()='SwitchTo']").hover()
    const over = await page.locator("//a[text()='SwitchTo']")
    await over.hover();

    await page.locator("//a[text()='Windows']").hover()
    await page.waitForTimeout(5000)
})