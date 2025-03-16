class MenuScreen {
    constructor() {
        this.leftMenuButton = "~open menu"
        this.loginButton = "//*[@text='Log In']"
        this.logoutButton = "//*[@text='Log Out']"
        this.returnCatalogButton = "//*[@text='Catalog']"
        
    }

async accessLoginScreen() {
        await $(this.leftMenuButton).click()
        await $(this.loginButton).click()
    }

async loggingOut() {
        await $(this.leftMenuButton).click()
        await $(this.logoutButton).click()
    }
async returnCatalog() {
        await $(this.leftMenuButton).click()
        await $(this.returnCatalogButton).click()
    }
}

export default new MenuScreen()