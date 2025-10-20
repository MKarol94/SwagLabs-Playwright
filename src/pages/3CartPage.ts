import { Page } from '@playwright/test'

export class CartPage {
    readonly page: Page
    readonly buttonAddCart = '#add-to-cart-sauce-labs-backpack'
    readonly buttonRemoveCart = '#remove-sauce-labs-backpack'
    readonly buttonCart = '.shopping_cart_link'

    constructor(page: Page) {
        this.page = page
    }

    async addProduct() {
        await this.page.click(this.buttonAddCart)
        await this.page.click(this.buttonCart)
    }

    async removeProduct() {
        await this.page.click(this.buttonRemoveCart)
    }
}
