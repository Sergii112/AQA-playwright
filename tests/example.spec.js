// @ts-check
import {test, expect} from "@playwright/test";
/////////////////////////////////
//examples by Staran
test.describe("Auth", ()=>{
  test.describe("Login", ()=>{

    test.beforeAll(async ()=>{
      console.log("BEFORE ALL")
    })

    test.beforeEach(async ({page})=>{
      console.log("BEFORE EACH")
    })

    test.afterEach(async ({page})=>{
      console.log("AFTER EACH")
    })

    test.afterAll(async ()=>{
      console.log("AFTER ALL")
    })

    test("test1", async ({page})=>{
      console.log("test1")
    })

    test("test2", async ({page})=>{
      console.log("test2")
    })
  })
})
/////////////////////////

test.describe.only("TODO MVC", ()=>{
  test.describe("TODO Create", ()=>{

    test.beforeEach(async ({page})=>{
      await page.goto('https://demo.playwright.dev/todomvc')
    })

    test('should allow me to add todo items', async ({ page }) => {
      const todoText = "Learn Playwright"

      await test.step("enter todo text and submit", async ()=>{
        const newTodo = page.getByPlaceholder('What needs to be done?');
        await newTodo.fill(todoText);
        await newTodo.press('Enter');
      })

      await test.step("Check todo is created", async ()=>{
        await expect(page.getByTestId('todo-title')).toHaveText([
          todoText
        ]);
      })
    });
  })
})

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
