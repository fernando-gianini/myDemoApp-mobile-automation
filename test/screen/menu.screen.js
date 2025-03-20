class MenuScreen {
    constructor() {
        this.leftMenuButton = "//android.view.ViewGroup[@content-desc='open menu']"
        this.loginButton = "//*[@text='Log In']"
        this.logoutButton = "//android.widget.TextView[@text='Log Out']"
        this.returnCatalogButton = "//*[@text='Catalog']"
        this.webViewButton = "//android.widget.TextView[@text='Webview']"
        this.qrCodeButton = "//android.widget.TextView[@text='QR Code Scanner']"
        this.geoLocationButton = "//*[@text='Geo Location']"
        this.drawingButton = "//android.widget.TextView[@text='Drawing']"
        this.aboutButton = "//android.widget.TextView[@text='About']"
        this.resetAppStatusButton = "~menu item reset app"
        this.fingerPrintButton = "//android.widget.TextView[@text='FingerPrint']"
        this.apiCalllsButton = "//android.widget.TextView[@text='Api Calls']"
        this.sauceBotVideoButton = "//android.widget.TextView[@text='Sauce Bot Video']"
        
        
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
async viewElementsMenu() {
        await $(this.leftMenuButton).click()
        await $(this.returnCatalogButton).isDisplayed()
        await $(this.webViewButton).isDisplayed()
        await $(this.qrCodeButton).isDisplayed()
        await $(this.geoLocationButton).isDisplayed()
        await $(this.drawingButton).isDisplayed()
        await $(this.aboutButton).isDisplayed()
        await $(this.resetAppStatusButton).isDisplayed()
        await $(this.fingerPrintButton).isDisplayed()
        await $(this.apiCalllsButton).isDisplayed()
        await $(this.sauceBotVideoButton).isDisplayed()       
    }
async viewWebViewPage() {
        await $(this.webViewButton).click()
    }
async viewQrcodePage() {
        await $(this.leftMenuButton).click()
        await $(this.qrCodeButton).click()
    }
async viewGeoLocationPage() {
        await $(this.leftMenuButton).click()
        await $(this.geoLocationButton).click()
    }
async viewDrawingPage() {
        await $(this.leftMenuButton).click()
        await $(this.drawingButton).click()
    }
async viewAboutPage() {
        await $(this.leftMenuButton).click()
        await $(this.aboutButton).click()
    }
async viewResetAppStatusPage() {
        await $(this.leftMenuButton).click()
        await $(this.resetAppStatusButton).click()
    }
async viewFingerPrintPage() {
        await $(this.leftMenuButton).click()
        await $(this.fingerPrintButton).click()
    }
async viewApiCallsPage() {
        await $(this.leftMenuButton).click()
        await $(this.apiCalllsButton).click()
    }
async viewSauceBotVideoPage() {
        await $(this.leftMenuButton).click()
        await $(this.sauceBotVideoButton).click()
    }
}

export default new MenuScreen()