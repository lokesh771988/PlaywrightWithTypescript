import {test, expect} from '@playwright/test';

test('Screenshot', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    //await page.screenshot({path: './tests/Screenshot/'+Date.now()+'Homepage.png'})
    //await page.screenshot({path: './tests/Screenshot/'+Date.now()+'Fullpage.png', fullPage: true })
    await page.locator('[placeholder="First Name"]').screenshot({path: './tests/Screenshot/'+Date.now()+'Element.png'})
    await page.locator('[placeholder="First Name"]').fill('Lokesh')
})