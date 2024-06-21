import {test, expect} from '@playwright/test';

test("webtable check", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const tables = await page.locator('#productTable')

    //count of rows and cloumns
    const cloumns = await tables.locator('thead tr th')
    console.log('Cloumns count ::: ',await cloumns.count())

    expect(await cloumns.count()).toBe(4)
    const rows = await tables.locator('tbody tr')
    console.log('Rows count::',await rows.count())
    expect(await rows.count()).toBe(5)

    //click  on any product checkbox in a row
    /*const expectRow = rows.filter({
        has: await page.locator('td'),
        hasText: 'Product 5'
    })

    expectRow.locator('input').click()


    await click_checkbox(rows, page, 'Product 1')
    await click_checkbox(rows, page, 'Product 5')
    await click_checkbox(rows, page, 'Product 3')
    
    // display all cell values
    for(let i = 0; i< await rows.count(); i++){
        const row = rows.nth(i);
        const tds = await row.locator('td');
        for(let j = 0; j < await tds.count(); j++){
            console.log("cell value :::", await tds.nth(j).textContent())
        }
    }
    */

    const pages = await page.locator('#pagination li a')

    for(let k = 0; k < await pages.count(); k++){
        if(k > 0){
            await pages.nth(k).click()
        }

        for(let i = 0; i< await rows.count(); i++){
            const row = rows.nth(i);
            const tds = await row.locator('td');
            for(let j = 0; j < await tds.count(); j++){
                console.log("cell value :::", await tds.nth(j).textContent())
            }
        }
    }


    await page.waitForTimeout(5000)
})

async function click_checkbox(rows, page, name){
    const expectRow = rows.filter({
        has: await page.locator('td'),
        hasText: name
    })

    expectRow.locator('input').click()
}