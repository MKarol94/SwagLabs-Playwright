import { test, expect } from '@playwright/test'
import { loginValidUser } from '../src/utils/helpers'
import { CheckoutPage } from '../src/pages/4CheckoutPage'
import { CartPage } from '../src/pages/3CartPage'
import dataCheckout from '../fixtures/dataCheckout.json'

let checkoutPage: CheckoutPage
let cartPage: CartPage

test.beforeEach(async ({ page }) => {
  checkoutPage = new CheckoutPage(page)
  cartPage = new CartPage(page)
  await loginValidUser(page)
})

test('Deve validar as informações de pagamento antes de finalizar', async ({ page }) => {
  await cartPage.addProduct()
  await checkoutPage.fillCheckoutForm(
    dataCheckout.firstName,
    dataCheckout.lastName,
    dataCheckout.postalCode
  )

  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack')
  await expect(page.locator('.inventory_item_price')).toHaveText('$29.99')

  await page.click('#finish')
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
})

test('Deve exibir mensagem de erro ao não preencher campos obrigatórios', async ({ page }) => {
  await cartPage.addProduct()
  await page.click('#checkout')
  await page.click('#continue')

  await checkoutPage.validateErrorMessage('Error: First Name is required')
  
  await page.fill('#first-name', dataCheckout.firstName)
  await page.click('#continue')
  await checkoutPage.validateErrorMessage('Error: Last Name is required')

  await page.fill('#last-name', dataCheckout.lastName)
  await page.click('#continue')
  await checkoutPage.validateErrorMessage('Error: Postal Code is required')
})
