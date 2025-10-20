import { test, expect } from '@playwright/test'
import { loginValidUser } from '../src/utils/helpers'
import { CartPage } from '../src/pages/3CartPage'

let cartPage: CartPage
test.beforeEach(async ({ page }) => {
  cartPage = new CartPage(page)
  await loginValidUser(page)
})

test('Deve adicionar produto no carrinho', async ({ page }) => {

  await cartPage.addProduct()

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(1)
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack')
})

test('Deve remover produto do carrinho', async ({ page }) => {
 
  await cartPage.addProduct()
  await cartPage.removeProduct()

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0)
  await expect (page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' })).not.toBeVisible()
})
