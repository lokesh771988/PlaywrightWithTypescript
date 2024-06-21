import {test, expect} from '@playwright/test';

test("Calendar", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#datepicker').fill('05/23/2024')
    //await page.fill('#datepicker', '05/23/2024')

    await page.locator('#datepicker').click()
    const currentYear = '2024'
    const currentMethod = 'June'
    const currentDate = '23'

    while(true){
        const month = await page.locator('//*[@class="ui-datepicker-month"]').textContent()
        const year = await page.locator('//*[@class="ui-datepicker-year"]').textContent();

        if(currentMethod == month && currentYear == year){
            break;
        }
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
    }

    //await page.locator(`//a[text()='${currentDate}']`).click()
    const dates = await page.$$('.ui-state-default')

    for(const dt of dates){
        if(await dt.textContent() == currentDate){
            await dt.click();
            break;
        }
    }


    await page.waitForTimeout(5000)
})