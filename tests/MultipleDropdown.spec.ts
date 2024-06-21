import {test, expect} from '@playwright/test';

test("Multiple Dropdown validation", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#colors').selectOption(['red','Green','blue'])

    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(5)

    const counts = await page.$$('#colors option');
    await expect(counts.length).toBe(5)
    await page.waitForTimeout(5000)
})