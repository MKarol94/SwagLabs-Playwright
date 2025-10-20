import { Page, expect } from '@playwright/test'

export class CheckoutPage {
    page: Page
    readonly buttonCheckout = '#checkout'
    readonly labelFirstName = '#first-name'
    readonly labelLastName = '#last-name'
    readonly labelPostalCode = '#postal-code'
    readonly buttonContinue = '#continue'
    readonly errorMessage = 'h3[data-test="error"]'

    constructor(page: Page) {
        this.page = page
    }

    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.click(this.buttonCheckout)
        await this.page.fill(this.labelFirstName, firstName)
        await this.page.fill(this.labelLastName, lastName)
        await this.page.fill(this.labelPostalCode, postalCode)
        await this.page.click(this.buttonContinue)
    }

    async validateErrorMessage(expectedMessage: string) {
        const error = this.page.locator(this.errorMessage)
        await error.waitFor({ state: 'visible' })
        await expect(error).toHaveText(expectedMessage)
    }
}