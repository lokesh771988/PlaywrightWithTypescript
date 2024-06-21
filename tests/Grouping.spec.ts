import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
    console.log("before each")
  });

  test.afterEach(async ({ page }) => {
    console.log("after each")
  });

test.describe('Group 1', ()=>{

    test.beforeEach(async ({ page }) => {
        console.log("Group 1 before each")
      });

      test.afterEach(async ({ page }) => {
        console.log("Group 1 after each")
      });

    test('test1', async({page})=>{
        console.log("test 1")
    })
    
    test('test2', async({page})=>{
        console.log("test 2")
    })
})

test.describe('Group 2', ()=>{
    test('test3', async({page})=>{
        console.log("test 3")
    })
    
    test('test4', async({page})=>{
        console.log("test 4")
    })
    
    test.skip('test5', async({page})=>{
        console.log("test 4")
    })
})


