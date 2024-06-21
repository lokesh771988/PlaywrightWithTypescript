import {test, expect} from '@playwright/test';

test("Check box", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    /*const checkbox = await page.locator('#sunday')
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await expect(checkbox.isChecked()).toBeTruthy()
     */
    const checkbox = [
        "#sunday",
        "#tuesday",
        "#saturday"
    ];

    for(const ch of checkbox){
        await page.locator(ch).check();
    }

    const checkbox1 = [
        "#sunday",
        "#tuesday"
    ];

    for(const ch1 of checkbox1){
        if(await page.locator(ch1).isChecked()){
            await page.locator(ch1).uncheck();
        }
    }
    
    await page.waitForTimeout(5000);
})