import { Page } from '@playwright/test'
import { LoginPage } from '../pages/1LoginPage'
import users from '../../fixtures/users.json'

export async function loginValidUser(page: Page) {
    await page.goto('/')
    const loginPage = new LoginPage(page)

    await loginPage.login(users.validUser.username, users.validUser.password)
}