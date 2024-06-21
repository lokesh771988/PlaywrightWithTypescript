import {test, Page, Browser, BrowserContext, chromium, expect} from '@playwright/test'

test('BrowserContext', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'})
    const browserContext: BrowserContext = await browser.newContext()
    const page:Page = await browserContext.newPage();
    
    const browser1:Browser = await chromium.launch({headless: false, channel: 'chrome'})
    const browserContext1:BrowserContext = await browser1.newContext()
    const page1: Page = await browserContext1.newPage()

    await page.goto('https://www.google.com/')

    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://www.google.com/')

    await page1.goto('https://www.google.com/')
    await page1.waitForTimeout(2000)
    await expect(page1).toHaveURL('https://www.google.com/')
})