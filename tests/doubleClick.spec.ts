import {test, expect} from '@playwright/test';

test('Double CLick', async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.on('dialog', async dialog =>{
        expect(dialog.message()).toContain('You double clicked me.. Thank You..')
        await dialog.accept()
    })
    const doubl = await page.locator("//*[text()='Double-Click Me To See Alert']")
    await doubl.dblclick()

    await page.waitForTimeout(5000)
})