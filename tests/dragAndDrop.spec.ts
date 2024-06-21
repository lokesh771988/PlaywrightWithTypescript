import {test, expect} from '@playwright/test';

test("drag and drop", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const source = await page.locator('#draggable')
    const target = await page.locator('#droppable')

    //source.dragTo(target)
    await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()

    await expect(target).toHaveText('Dropped!')
    await page.waitForTimeout(5000)
})