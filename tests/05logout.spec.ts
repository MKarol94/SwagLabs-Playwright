import { test, expect } from '@playwright/test'
import { loginValidUser } from '../src/utils/helpers'

test('Deve fazer logout com sucesso', async ({ page }) => {
    await loginValidUser(page)

    await page.click('#react-burger-menu-btn')
    await page.click('#logout_sidebar_link')

    await expect(page).toHaveURL('https://www.saucedemo.com')
})