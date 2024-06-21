import {test, expect} from '@playwright/test';

test('frames',  async({page})=>{
    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/")
    await page.waitForTimeout(2000)
    //const closes = await page.frameLocator('#pact1').locator('#close')
    //await closes.click()
    const countFrames = await page.frames()
    console.log("Count ", countFrames.length)

    const frm = await page.frame({url: 'https://selectorshub.com/input-box-copy/'})
    
    await frm?.locator('#close').click();
    await page.waitForTimeout(5000)
})