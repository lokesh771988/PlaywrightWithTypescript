import {test, expect} from '@playwright/test';

test("Right click", async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    const button = await page.locator("//*[text()='right click me']")
    await button.click({button: 'right'})

    await page.on('dialog', async dialog =>{
        expect(dialog.message()).toContain('clicked: paste')
        await dialog.accept()
    })
    await page.locator("//*[text()='Paste']").click()
    await page.waitForTimeout(5000)
})