//Testing...
//Refactor.

import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByRole('link', { name: 'Form Authentication' }).click();

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');


  await page.getByRole('button',{name: 'Login'}).click();

  await expect(page.locator('#flash'))
  .toContainText("You logged into a secure area!")
});

test('visible login text', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByRole('link', { name: 'Form Authentication' }).click();

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');


  await page.getByRole('button',{name: 'Login'}).click();

  await expect(page.getByText('You logged into a secure area!'))
  .toBeVisible()
});