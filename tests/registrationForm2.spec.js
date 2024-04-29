import { test, expect } from "@playwright/test";
import {USERS} from "../src/userData/users.js";

test.describe('Registration form', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("");

        const signUpBtn = page.locator('.btn-primary', {hasText: 'Sign Up'});
        await signUpBtn.click();
        });

    test.describe('Name field validation', () => {
        test('Positive test - valid name input', async ({page}) => {
            const nameInput = page.locator('#signupName');

            await nameInput.fill(USERS.Will_Smith.name);
            await nameInput.press("Enter");

            await expect(nameInput).not.toHaveClass("invalid");
        });

        test("Negative test - empty name input", async ({page}) => {
            const nameInput = page.locator('#signupName');
            const errorMessage = page.locator('.invalid-feedback');

            await nameInput.fill(USERS.Will_Smith.empty);
            await nameInput.press("Enter");
            await nameInput.blur()

            await expect(errorMessage).toContainText("Name required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong data input", async ({page}) => {
            const nameInput = page.locator('#signupName');
            const errorMessage = page.locator('.invalid-feedback');

            await nameInput.fill(USERS.Will_Smith.wrongData);
            await nameInput.press("Enter");
            await nameInput.blur()

            await expect(errorMessage).toContainText("Name is invalid");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong length input", async ({page}) => {
            const nameInput = page.locator('#signupName');
            const errorMessage = page.locator('.invalid-feedback');

            await nameInput.fill(USERS.Will_Smith.wrongLength);
            await nameInput.press("Enter");
            await nameInput.blur()

            await expect(errorMessage).toContainText("Name has to be from 2 to 20 characters long");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

    test.describe("Last name field validation", () => {
        test("Positive test - valid last name input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');

            await lastNameInput.fill(USERS.Will_Smith.lastName);
            await lastNameInput.press("Enter");

            await expect(lastNameInput).not.toHaveClass("invalid");// await expect(lastNameInput).toHaveValue(validName.trim());
        });

        test("Negative test - empty last name input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const errorMessage = page.locator('.invalid-feedback');

            await lastNameInput.fill(USERS.Will_Smith.empty);
            await lastNameInput.press("Enter");
            await lastNameInput.blur()

            await expect(errorMessage).toContainText("Last name required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong data input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const errorMessage = page.locator('.invalid-feedback');

            await lastNameInput.fill(USERS.Will_Smith.wrongData);
            await lastNameInput.press("Enter");
            await lastNameInput.blur()

            await expect(errorMessage).toContainText("Last name is invalidLast name has to be from 2 to 20 characters long");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong length input", async ({ page }) => {
            const lastNameInput = page.locator('#signupLastName');
            const errorMessage = page.locator('.invalid-feedback');

            await lastNameInput.fill(USERS.Will_Smith.wrongLength);
            await lastNameInput.press("Enter");
            await lastNameInput.blur()

            await expect(errorMessage).toContainText("Last name has to be from 2 to 20 characters long");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

    test.describe("Email field validation", () => {
        test("Positive test - valid email input", async ({ page }) => {
            const emailInput = page.locator('#signupEmail');

            await emailInput.fill(USERS.Will_Smith.email);
            await emailInput.press("Enter");

            await expect(emailInput).not.toHaveClass("invalid");
        });

        test("Negative test - empty email input", async ({ page }) => {
            const emailInput = page.locator('#signupEmail');
            const errorMessage = page.locator('.invalid-feedback');

            await emailInput.fill(USERS.Will_Smith.empty);
            await emailInput.press("Enter");
            await emailInput.blur()

            await expect(errorMessage).toContainText("Email required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong email format input", async ({ page }) => {
            const emailInput = page.locator('#signupEmail');
            const errorMessage = page.locator('.invalid-feedback');

            await emailInput.fill(USERS.Will_Smith.wrongDataEmail);
            await emailInput.press("Enter");
            await emailInput.blur()

            await expect(errorMessage).toContainText("Email is incorrect");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

    test.describe("Password field validation", () => {
        test("Positive test - valid password input", async ({ page }) => {
            const passwordInput = page.locator("#signupPassword");

            await passwordInput.fill(USERS.Will_Smith.password);
            await passwordInput.press("Enter");

            await expect(passwordInput).not.toHaveClass("invalid");
        });

        test("Negative test - empty password input", async ({ page }) => {
            const passwordInput = page.locator("#signupPassword");
            const errorMessage = page.locator('.invalid-feedback');

            await passwordInput.fill(USERS.Will_Smith.empty);
            await passwordInput.press("Enter");
            await passwordInput.blur()

            await expect(errorMessage).toContainText("Password required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - wrong password format input", async ({ page }) => {
            const passwordInput = page.locator("#signupPassword");
            const errorMessage = passwordInput.locator(' + .invalid-feedback');

            await passwordInput.fill(USERS.Will_Smith.wrongFormatPassword);
            await passwordInput.press("Enter");
            await passwordInput.blur()

            await expect(errorMessage).toContainText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

    test.describe("Re-enter password field validation", () => {
        test("Positive test - matching password input", async ({ page }) => {
            const passwordInput = page.locator("#signupPassword");
            const reEnterPasswordInput = page.locator("#signupRepeatPassword");

            await passwordInput.fill(USERS.Will_Smith.password);
            await reEnterPasswordInput.fill(USERS.Will_Smith.repeatPassword);
            await reEnterPasswordInput.press("Enter");

            await expect(reEnterPasswordInput).not.toHaveClass("invalid");
        });

        test("Negative test - empty re-enter password input", async ({ page }) => {
            const reEnterPasswordInput = page.locator("#signupRepeatPassword");
            const errorMessage = page.locator('.invalid-feedback');

            await reEnterPasswordInput.fill(USERS.Will_Smith.empty);
            await reEnterPasswordInput.press("Enter");
            await reEnterPasswordInput.blur();

            await expect(errorMessage).toContainText("Re-enter password required");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });

        test("Negative test - non-matching password input", async ({ page }) => {
            const passwordInput = page.locator("#signupPassword");
            const reEnterPasswordInput = page.locator("#signupRepeatPassword");
            const errorMessage = page.locator('.invalid-feedback');

            await passwordInput.fill(USERS.Will_Smith.repeatPassword);
            await reEnterPasswordInput.fill(USERS.Will_Smith.wrongRepeatPassword);
            await reEnterPasswordInput.press("Enter");
            await reEnterPasswordInput.blur();

            await expect(errorMessage).toContainText("Passwords do not match");
            await expect(errorMessage).toHaveCSS("color", "rgb(220, 53, 69)");
        });
    });

    test.describe('Register button validation', () => {
        test('Positive test - register button enabled and clicks', async ({page}) => {
            const nameInput = page.locator("#signupName");
            const lastNameInput = page.locator('#signupLastName');
            const emailInput = page.locator("#signupEmail");
            const passwordInput = page.locator("#signupPassword");
            const reEnterPasswordInput = page.locator("#signupRepeatPassword");
            const registerButton = page.locator('.modal-footer .btn-primary');

            await nameInput.fill(USERS.Will_Smith.name);
            await lastNameInput.fill(USERS.Will_Smith.lastName);
            await emailInput.fill(USERS.Will_Smith.email);
            await passwordInput.fill(USERS.Will_Smith.password);
            await reEnterPasswordInput.fill(USERS.Will_Smith.repeatPassword);

            await registerButton.click();
        });
    });
});
