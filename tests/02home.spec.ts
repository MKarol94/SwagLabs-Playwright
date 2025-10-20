import { test, expect } from '@playwright/test'
import { loginValidUser } from '../src/utils/helpers'

test('Deve exibir produtos na Home', async ({ page }) => {
  await loginValidUser(page)

  const products = page.locator('.inventory_item')

  await expect(products.first()).toBeVisible()

  const count = await products.count()
  expect(count).toBeGreaterThan(0)
})
