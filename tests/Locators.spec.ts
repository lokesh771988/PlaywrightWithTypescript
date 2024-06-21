import {test, expect} from '@playwright/test';

test('locators', async({ page })=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    //await page.getByLabel("Male", { exact: true }).click();
    await page.getByPlaceholder('First Name').fill("demo");
    await expect(page.locator('[placeholder="Month"] option')).toHaveCount(13);
    await page.getByRole("button", {name: 'Submit'}).click();
    //await page.locator("[placeholder='First Name']").fill("demo");
    //await page.fill("[placeholder='First Name']","demo");
    //await page.goto("https://www.google.com/");
    //await expect(page.getByAltText("Google")).toBeVisible();
    //await expect(page.getByText("Find out how to vote this election")).toBeVisible();
})