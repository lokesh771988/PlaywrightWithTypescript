import {test, expect} from '@playwright/test';

test('assertion', async({page})=>{
    /*await page.goto("https://www.google.com/");
    //await expect.soft(page, 'url is not matching').toHaveURL("https://www.hellow.com/");
    await expect(page).toHaveTitle("Google");
    const text_box = await page.locator('#APjFqb');
    //await text_box.fill('lokesh');
    await expect(text_box, 'text box is having value').toBeEmpty();
    */

    await page.goto("https://demo.automationtesting.in/Register.html");
    const check_box = await page.locator('#checkbox1');
    //await expect(check_box).toBeDisabled();
    await expect(check_box).toBeEnabled();
    await check_box.click();
    await expect(check_box).toBeChecked();

    const count_month = await page.locator('[placeholder="Month"] option');
    await expect(count_month).toHaveCount(13);
    
})