import { Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly inputUsername = '#user-name'
    readonly inputPassword = '#password'
    readonly buttonLogin = '#login-button'

    constructor(page: Page) {
        this.page = page
    }

    async login(username: string, password: string) {
        await this.page.fill(this.inputUsername, username)
        await this.page.fill(this.inputPassword, password)
        await this.page.click(this.buttonLogin)
    }
    async lockedLogin(username: string, password: string) {
        await this.page.fill(this.inputUsername, username)
        await this.page.fill(this.inputPassword, password)
        await this.page.click(this.buttonLogin)
    }
    async invalidLogin(username: string, password: string) {
        await this.page.fill(this.inputUsername, username)
        await this.page.fill(this.inputPassword, password)
        await this.page.click(this.buttonLogin)
    }

}
