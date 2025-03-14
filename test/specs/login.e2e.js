import userData from '../data/user.data.json'
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import menuScreen from '../screen/menu.screen.js'
import loginScreen from '../screen/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid password fail', async () => {
     await menuScreen.accessLoginScreen()
     await loginScreen.fillLoginForm(userData.passwordFail.username, userData.passwordFail.password)
     await expect($(loginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.")
    })
    it('should login with invalid username fail', async () => {
        await menuScreen.accessLoginScreen()
        await loginScreen.fillLoginForm(userData.usernameFail.username, userData.usernameFail.password)
        await expect($(loginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.")
       })
    it('should login with login success', async () => {
        await menuScreen.accessLoginScreen()
        await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await expect($(loginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.")
       })
   
})
