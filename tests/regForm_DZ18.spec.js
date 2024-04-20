import { test, expect } from "@playwright/test";

test.describe("Registration form", () => {
    test.describe("Name field validation", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("");
            const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'} );
            await signUpBtn.click();
        });

        test("Positive test - valid name input", async ({ page }) => {
            const nameInput = page.locator('#signupName');
            const validName = "Will";

            await nameInput.fill(validName);
            await nameInput.press("Enter");

            await expect(nameInput).not.toHaveClass("invalid");
            await expect(nameInput).toHaveValue(validName.trim());
        });

        test("Negative test - empty name input", async ({ page }) => {
            const nameInput = page.locator('#signupName');
            const errorMessage = page.locator('.invalid-feedback');

            await nameInput.fill("");
            await nameInput.press("Enter");
            await nameInput.blur()

            await expect(errorMessage).toContainText("Name required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");

        });

        test("Negative test - wrong data input", async ({ page }) => {
            const nameInput = page.locator('#signupName');
            const invalidName = "123456789012345678901";
            const errorMessage = page.locator('.invalid-feedback');

            await nameInput.fill(invalidName);
            await nameInput.press("Enter");
            await nameInput.blur()

            await expect(errorMessage).toContainText("Name is invalid");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");

        });

        test("Negative test - wrong length input", async ({ page }) => {
            const nameInput = page.locator('#signupName');
            const invalidName = "A";
            const errorMessage = page.locator('.invalid-feedback');

            await nameInput.fill(invalidName);
            await nameInput.press("Enter");
            await nameInput.blur()

            await expect(errorMessage).toContainText("Name has to be from 2 to 20 characters long");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
         });
    });

    test.describe("Last name field validation", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://qauto.forstudy.space/");
            const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'} );
            await signUpBtn.click();
        });

        test("Positive test - valid last name input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const validName = "Smith";

            await lastNameInput.fill(validName);
            await lastNameInput.press("Enter");

            await expect(lastNameInput).not.toHaveClass("invalid");
            await expect(lastNameInput).toHaveValue(validName.trim());
        });

        test("Negative test - empty last name input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const errorMessage = page.locator('.invalid-feedback');

            await lastNameInput.fill("");
            await lastNameInput.press("Enter");
            await lastNameInput.blur()

            await expect(errorMessage).toContainText("Last name required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong data input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const invalidName = "123456789012345678901";
            const errorMessage = page.locator('.invalid-feedback');

            await lastNameInput.fill(invalidName);
            await lastNameInput.press("Enter");
            await lastNameInput.blur()

            await expect(errorMessage).toContainText("Last name is invalidLast name has to be from 2 to 20 characters long");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong length input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const invalidName = "A";
            const errorMessage = page.locator('.invalid-feedback');

            await lastNameInput.fill(invalidName);
            await lastNameInput.press("Enter");
            await lastNameInput.blur()

            await expect(errorMessage).toContainText("Last name has to be from 2 to 20 characters long");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

    test.describe("Email field validation", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://qauto.forstudy.space/");
            const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'} );
            await signUpBtn.click();
        });

        test("Positive test - valid email input", async ({ page }) => {
            const emailInput = page.locator('#signupEmail');
            const validEmail = "Men-InBlack@example.com";

            await emailInput.fill(validEmail);
            await emailInput.press("Enter");

            await expect(emailInput).not.toHaveClass("invalid");
            await expect(emailInput).toHaveValue(validEmail.trim());
        });

        test("Negative test - empty email input", async ({ page }) => {
            const emailInput = page.locator('#signupEmail');
            const errorMessage = page.locator('.invalid-feedback');

            await emailInput.fill("");
            await emailInput.press("Enter");
            await emailInput.blur()

            await expect(errorMessage).toContainText("Email required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong email format input", async ({ page }) => {
            const emailInput = page.locator('#signupEmail');
            const invalidEmail = "Men-InBlack-example.com";
            const errorMessage = page.locator('.invalid-feedback');

            await emailInput.fill(invalidEmail);
            await emailInput.press("Enter");
            await emailInput.blur()

            await expect(errorMessage).toContainText("Email is incorrect");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

   test.describe("Password field validation", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://qauto.forstudy.space/");
            const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'} );
            await signUpBtn.click();
        });

        test("Positive test - valid password input", async ({ page }) => {
           const passwordInput = page.locator("#signupPassword");
           const validPassword = "SecurePassword1";

           await passwordInput.fill(validPassword);
           await passwordInput.press("Enter");

           await expect(passwordInput).not.toHaveClass("invalid");
           await expect(passwordInput).toHaveValue(validPassword.trim());
        });

        test("Negative test - empty password input", async ({ page }) => {
           const passwordInput = page.locator("#signupPassword");
           const errorMessage = page.locator('.invalid-feedback');

           await passwordInput.fill("");
           await passwordInput.press("Enter");
           await passwordInput.blur()

           await expect(errorMessage).toContainText("Password required");
           await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
       });

        test("Negative test - wrong password format input", async ({ page }) => {
           const passwordInput = page.locator("#signupPassword");
           const invalidPassword = "password";
           const errorMessage = passwordInput.locator(' + .invalid-feedback');

           await passwordInput.fill(invalidPassword);
           await passwordInput.press("Enter");
           await passwordInput.blur()

           await expect(errorMessage).toContainText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
           await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
   });

   test.describe("Re-enter password field validation", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://qauto.forstudy.space/");
            const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'} );
            await signUpBtn.click();
        });

       test("Positive test - matching password input", async ({ page }) => {
           const passwordInput = page.locator("#signupPassword");
           const reEnterPasswordInput = page.locator("#signupRepeatPassword");

           await passwordInput.fill("SecurePassword1");
           await reEnterPasswordInput.fill("SecurePassword1");
           await reEnterPasswordInput.press("Enter");

           await expect(reEnterPasswordInput).not.toHaveClass("invalid");
           await expect(reEnterPasswordInput).toHaveValue("SecurePassword1".trim());
       });

       test("Negative test - empty re-enter password input", async ({ page }) => {
           const reEnterPasswordInput = page.locator("#signupRepeatPassword");
           const errorMessage = page.locator('.invalid-feedback');

           await reEnterPasswordInput.fill("");
           await reEnterPasswordInput.press("Enter");
           await reEnterPasswordInput.blur();

           await expect(errorMessage).toContainText("Re-enter password required");
           await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
       });

       test("Negative test - non-matching password input", async ({ page }) => {
           const passwordInput = page.locator("#signupPassword");
           const reEnterPasswordInput = page.locator("#signupRepeatPassword");
           const errorMessage = page.locator('.invalid-feedback');

           await passwordInput.fill("SecurePassword1");
           await reEnterPasswordInput.fill("securePassword1");
           await reEnterPasswordInput.press("Enter");
           await reEnterPasswordInput.blur();

           await expect(errorMessage).toContainText("Passwords do not match");
           await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
       });
   });

    test.describe("Register button validation", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://qauto.forstudy.space/");
            const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'} );
            await signUpBtn.click();
        });

        test("Positive test - register button enabled and clicks", async ({ page }) => {
            const nameInput = page.locator("#signupName");
            const lastNameInput = page.locator('#signupLastName');
            const emailInput = page.locator("#signupEmail");
            const passwordInput = page.locator("#signupPassword");
            const reEnterPasswordInput = page.locator("#signupRepeatPassword");
            const registerButton = page.locator('.modal-footer .btn-primary')//".modal-footer .btn-primary");

            await nameInput.fill("Will");
            await lastNameInput.fill("Smith");
            await emailInput.fill("men-in-Black@example.com");
            await passwordInput.fill("SecurePassword1");
            await reEnterPasswordInput.fill("SecurePassword1");

            await registerButton.click();
        });
    });

});
