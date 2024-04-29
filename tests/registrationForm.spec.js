import { test, expect } from "@playwright/test";
//const { test, expect } = require('@playwright/test');
const RegistrationPage = require('. pageObjects/registrationPage');

test.describe('Registration form', () => {
    let registrationPage;

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.goto();
    });

    test.describe('Name field validation', () => {
        test('Positive test - valid name input', async () => {
            const validName = 'Will';
            await registrationPage.fillName(validName);
            await registrationPage.nameInput.press('Enter');

            await expect(registrationPage.nameInput).not.toHaveClass('invalid');
            await expect(registrationPage.nameInput).toHaveValue(validName.trim());
        });

        // Add the rest of the test cases for name field validation
    });

    // Add the rest of the test suites for last name, email, password, and re-enter password field validation

    test.describe('Register button validation', () => {
        test('Positive test - register button enabled and clicks', async () => {
            await registrationPage.fillName('Will');
            await registrationPage.fillLastName('Smith');
            await registrationPage.fillEmail('men-in-Black@example.com');
            await registrationPage.fillPassword('SecurePassword1');
            await registrationPage.fillReEnterPassword('SecurePassword1');

            await registrationPage.clickRegisterButton();
        });
    });
});
