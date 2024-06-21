import {test, expect} from '@playwright/test';

test("Dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#country").selectOption({label: 'Australia'});
    //await page.locator("#country").selectOption('Australia');
    //await page.locator("#country").selectOption({value: 'uk'});
    //await page.locator("#country").selectOption({index: 3});

    //const counts = await page.locator('#country option');
    //await expect(counts).toHaveCount(10);
    //const counts = await page.$$('#country option');
    //await expect(counts.length).toBe(10)

    //const options = await page.locator('#country').textContent();
    //await expect(options?.includes('India')).toBeTruthy();
    const options = await page.$$('#country option');
    let status = false
    for(const op of options){
        console.log(await op.textContent());
         var value = await  op.textContent();
        if(value?.includes("India")){
            status = true
            break;
        }
    }
    await expect(status).toBeTruthy();
    await page.waitForTimeout(5000);
})