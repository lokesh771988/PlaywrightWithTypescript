import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before all tests');
  });
  
  test.afterAll(async () => {
    console.log('After all tests');
  });

test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.guru99.com/test/newtours/")
    await page.locator('[name="userName"]').fill("mercury")
    await page.locator('[name="password"]').fill("mercury")
    await page.locator('[name="submit"]').click()
    console.log("login page")
  });

  test.afterEach(async ({ page }) => {
    console.log("logout page")
    await page.locator("//*[text()='SIGN-OFF']").click()
  });

test("verify login page", async({page})=>{
    
    console.log("Test Case1")
    await expect(page.locator("//*[text()='Login Successfully']")).toBeVisible();
})

test("verify logout page", async({page})=>{
    /*await page.goto("https://demo.guru99.com/test/newtours/")
    await page.locator('[name="userName"]').fill("mercury")
    await page.locator('[name="password"]').fill("mercury")
    await page.locator('[name="submit"]').click()
*/
    console.log("test case 2")
    await expect(page.locator("//*[text()='SIGN-OFF']")).toBeVisible();
})
