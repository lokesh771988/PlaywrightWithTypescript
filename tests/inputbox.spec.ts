import {test, expect} from '@playwright/test';

test("input box validation", async({page}) =>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    const element = await page.getByPlaceholder("First Name");
    await expect(element).toBeVisible();
    
    await expect(element).toBeEmpty();
    await expect(element).toBeEditable();
    await expect(element).toBeEnabled();
    await element.fill("lokesh")
    await page.waitForTimeout(5000);
})