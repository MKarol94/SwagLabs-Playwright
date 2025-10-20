import { test, expect } from '@playwright/test'
import { loginValidUser } from '../src/utils/helpers'
import { LoginPage } from '../src/pages/1LoginPage'
import users from '../fixtures/users.json'

let loginPage: LoginPage
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  await page.goto('/')
})

test('Deve fazer login com sucesso', async ({ page }) => {
  await loginValidUser(page)

  await expect(page).toHaveURL(/inventory/)
})

test('Deve exibir mensagem de usuário bloqueado', async () => {
  await loginPage.lockedLogin(users.lockedUser.username, users.lockedUser.password)

  const errorMessage = loginPage.page.locator("h3[data-test='error']")
  await expect(errorMessage).toBeVisible()
  await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')
})

test('Deve exibir mensagem de usuário/senha inválidos', async () => {
  await loginPage.invalidLogin(users.invalidUser.username, users.invalidUser.password)

  const errorMessage = loginPage.page.locator("h3[data-test='error']")
  await expect(errorMessage).toBeVisible()
  await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
})