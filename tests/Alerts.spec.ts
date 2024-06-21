import {test, expect} from '@playwright/test';

test.skip('Alerts', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am a JS Alert')
        await dialog.accept()
    });
    await page.locator("//button[@onclick='jsAlert()']").click()
    //const text = await page.locator('#result').textContent();
    await expect(await page.locator('#result')).toHaveText("You successfully clicked an alert")
    await page.waitForTimeout(5000)
})

test.skip('confirm', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(2000)

    /*page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('I am a JS Confirm')
        await dialog.accept()
    });
    await page.locator("//button[@onclick='jsConfirm()']").click()
    //const text = await page.locator('#result').textContent();
    await expect(await page.locator('#result')).toHaveText("You clicked: Ok")
    */
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('I am a JS Confirm')
        await dialog.dismiss()
    });
    await page.locator("//button[@onclick='jsConfirm()']").click()
    //const text = await page.locator('#result').textContent();
    await expect(await page.locator('#result')).toHaveText("You clicked: Cancel")
    await page.waitForTimeout(5000)
})

test('Prompt', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('I am a JS prompt')
        await dialog.accept('lokesh')
    });
    await page.locator("//button[@onclick='jsPrompt()']").click()
    //const text = await page.locator('#result').textContent();
    await expect(await page.locator('#result')).toHaveText("You entered: lokesh")
    await page.waitForTimeout(5000)
})