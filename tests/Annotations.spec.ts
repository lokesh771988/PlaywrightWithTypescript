const { test, expect } = require('@playwright/test');

test("fail tags A1", async({page})=>{
    test.slow()
    await page.goto('https://playwright.dev/docs/api/class-test#test-slow')
})
/*
test.fail("fail tags A1", async()=>{
    console.log('A1')
    expect(1).toBe(2)
})
test.fixme("fixme tags A1", async()=>{
    console.log('A1')
})

test("fixme tags A2", async()=>{
    console.log('A2')
})



test("skip tags A1", async()=>{
    console.log('A1')
})

test('skip tags A3', async()=>{
    let browser = 'chromium';
    if(browser === 'chromium'){
        test.skip()
        console.log('A3')
    }
})

test.skip("skip tags A2", async()=>{
    console.log('A2')
})



/*
only tag
test.only("only tags A1", async()=>{
    console.log('A1')
})

test.only("only tags A2", async()=>{
    console.log('A2')
})
*/