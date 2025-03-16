class MenuScreen {
    constructor() {
        this.leftMenuButton = "~open menu"
        this.loginButton = "//*[@text='Log In']"
        this.logoutButton = "//*[@text='Log Out']"
        
    }

async accessLoginScreen() {
        await $(this.leftMenuButton).click()
        await $(this.loginButton).click()
    }

async loggingOut() {
        await $(this.leftMenuButton).click()
        await $(this.logoutButton).click()
    }
}

export default new MenuScreen()