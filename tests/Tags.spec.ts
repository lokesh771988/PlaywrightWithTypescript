import {test, expect} from '@playwright/test';

test("tags @fast", async()=>{
    console.log('tag A1')
})

test("@slow tags", async()=>{
    console.log('tag A2')
})