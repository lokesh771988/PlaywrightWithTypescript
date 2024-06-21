import {test, expect} from '@playwright/test';

test("Auto Suggest", async({page})=>{
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(5000)
    await page.locator('#src').fill("ban")
    await page.waitForTimeout(2000)
    const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text")

    for(let opt of options){
        let value = await opt.textContent()
        console.log(value)
        if(value?.includes("Silk Board")){
            opt.click();
            break;
        }
    }
    await page.waitForTimeout(5000)
})