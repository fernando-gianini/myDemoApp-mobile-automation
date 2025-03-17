class NavigationScreen {
    constructor() {
        this.openMenuButton = "//android.view.ViewGroup[@content-desc='open menu']"
        this.frameworkLayout = "//android.widget.FrameLayout[@resource-id='android:id/content']/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]"
        this.cartButton = "//android.view.ViewGroup[@content-desc='cart badge']/android.widget.ImageView"
        this.productText = "//android.widget.TextView[@text='Products']"
        this.productScrollView = "//android.widget.ScrollView"
        this.webViewElement = "//android.widget.TextView[@text='Webview']"
        this.permissionQrcodeButton = "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_foreground_only_button']"
        this.qrcoreElement = "//android.widget.TextView[@text='QR Code Scanner']"
        this.permissionGeoLocationButton = "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_foreground_only_button']"
        this.geoLocationElement = "//android.widget.TextView[@text='Geo Location']"
        this.drawingElement = "//android.widget.TextView[@text='Drawing']"
        this.aboutElement = "//android.widget.TextView[@text='About']"
        this.resetAppStatusElement = "//android.widget.TextView[@text='Reset App State']"
        this.resetAppConfirmButton = "//android.widget.Button[@resource-id='android:id/button1']"
        this.resetAppCancelButton = "//android.widget.Button[@resource-id='android:id/button2']"
        this.clickLogo = "//android.widget.FrameLayout[@resource-id='android:id/content']/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]"
        this.confirmResetAppStatusButton = "//android.widget.Button[@resource-id='android:id/button1']"
        this.fingerPrintElement = "//android.widget.TextView[@text='FingerPrint']"
        this.permissionFingerPrintButton = "//android.widget.Button[@resource-id='android:id/button1']"
        this.apiCallsElement = "//android.widget.TextView[@text='API calls']"
        this.sauceBotVideoElement = "//android.widget.TextView[@text='Sauce Bot Video']"
    }

    async viewElementsPrimaryPage() {
        await $(this.openMenuButton).isDisplayed()
        await $(this.frameworkLayout).isDisplayed()
        await $(this.cartButton).isDisplayed()
        await $(this.productText).isDisplayed()
        await $(this.productScrollView).isDisplayed()
    }
    async viewElementsWebViewPage() {
        await $(this.webViewElement).isDisplayed()
    }
    async viewElementsQrcodePage() {
        await $(this.permissionQrcodeButton).click()
        await $(this.qrcoreElement).isDisplayed()
    }
    async viewElementsGeoLocationPage() {
        await $(this.permissionGeoLocationButton).click()
        await $(this.geoLocationElement).isDisplayed()
    }
    async viewElementsDrawingPage() {
        await $(this.drawingElement).isDisplayed()
    }
    async viewElementsAboutPage() {
        await $(this.aboutElement).isDisplayed()
    }
    async viewElementResetAppStatus() {
        await $(this.resetAppCancelButton).click()
        await $(this.clickLogo).click()

    }
    async viewElementFingerPrintPage() {
        await $(this.permissionFingerPrintButton).click()
        await $(this.fingerPrintElement).isDisplayed()
    }
    async viewElementApiCallsPage() {
        await $(this.apiCallsElement).isDisplayed()
    }
    async viewElementsSauceBotVideoPage() {
        await $(this.sauceBotVideoElement).isDisplayed()
    }



}
export default new NavigationScreen()