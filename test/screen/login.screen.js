class LoginScreen {
    constructor() {
        this.usernameInput = "//android.widget.EditText[@content-desc='Username input field']"
        this.passwordInput = "//android.widget.EditText[@content-desc='Password input field']"
        this.loginButton = "//android.view.ViewGroup[@content-desc='Login button']"
        this.errorMessage = "//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView"
        this.noDataUsername = "//android.widget.TextView[@text='Username is required']"
        this.noDataPassword= "//android.widget.TextView[@text='Password is required']"
        this.alertLogout = "//android.widget.TextView[@resource-id='android:id/alertTitle']"
        this.confirmLogoutButton = "//android.widget.Button[@resource-id='android:id/button1']"
        this.confirmAlertLogout = "/hierarchy/android.widget.FrameLayout"
        this.confirmAlertLogoutButton = '//android.widget.Button[@resource-id="android:id/button1"]'
    }

    async fillLoginForm(username, password) {
        await $(this.usernameInput).setValue(username);
        await $(this.passwordInput).setValue(password);
        await $(this.loginButton).click()
    }
    async loggingOut() {
        await $(this.alertLogout).getText("Log Out")
        await $(this.confirmLogoutButton).click()
        await $(this.confirmAlertLogout).isDisplayed()
        await $(this.confirmAlertLogoutButton).click()

    }

}

export default new LoginScreen()




