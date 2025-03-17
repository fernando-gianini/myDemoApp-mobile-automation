import userData from '../data/user.data.json'
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import menuScreen from '../screen/menu.screen.js'
import loginScreen from '../screen/login.screen.js'
import navigationScreen from '../screen/navigation.screen.js'

describe('My Navigation application', () => {
    it('must log in and check the home screen elements PrimaryPage', async () => {
        await menuScreen.accessLoginScreen()
        await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await navigationScreen.viewElementsPrimaryPage()
        await menuScreen.loggingOut()
        await loginScreen.loggingOut()
    })

})
describe('Navigation menu application', () => {
    it('must log in and check menu webView Page Elemets', async () => {
        await menuScreen.accessLoginScreen()
        await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await menuScreen.viewElementsMenu()
        await menuScreen.viewWebViewPage()
        await navigationScreen.viewElementsWebViewPage()
    })

    it('test the button and check the Qrcode menu', async () => {
        await menuScreen.viewQrcodePage()
        await navigationScreen.viewElementsQrcodePage()
    })

    it('test the button and check the Geo Location menu', async () => {
        await menuScreen.viewGeoLocationPage()
        await navigationScreen.viewElementsGeoLocationPage()
    })

    it('test the button and check the Drawing menu', async () => {
        await menuScreen.viewDrawingPage()
        await navigationScreen.viewElementsDrawingPage()
    })

    it('test the button and check the About menu', async () => {
        await menuScreen.viewAboutPage()
        await navigationScreen.viewElementsAboutPage()
    })

    it('test the button and check the Finger Print menu', async () => {
        await menuScreen.viewFingerPrintPage()
        await navigationScreen.viewElementFingerPrintPage()
    })

    it('test the button and check the Api Call menu', async () => {
        await menuScreen.viewApiCallsPage()
        await navigationScreen.viewElementApiCallsPage()
    })

    it('test the button and check the Sauce Bot Video menu', async () => {
        await menuScreen.viewSauceBotVideoPage()
        await navigationScreen.viewElementsSauceBotVideoPage()
    })

    it('test the button and check the Reset App Status menu', async () => {
        await menuScreen.viewResetAppStatusPage()
        await navigationScreen.viewElementResetAppStatus()
    })

})