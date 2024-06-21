import {test, expect} from '@playwright/test';

test('nested frames', async({page})=>{
    
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.waitForTimeout(2000)
    const iframes = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    await iframes?.locator('[name="mytext3"]').fill("lokesh")

    const chile_frames = await iframes?.childFrames()

    //await chile_frames[0].locator('#i5 .AB7Lab').click()

    await page.waitForTimeout(5000)

})