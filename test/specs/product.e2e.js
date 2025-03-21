import userData from '../data/user.data.json'
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import loginScreen from '../screen/login.screen.js'
import navigationScreen from '../screen/navigation.screen.js'
import menuScreen from '../screen/menu.screen.js'
import productScreen from '../screen/product.screen.js'


describe('My Filter product application', () => { // Todos os comentados dessa seção rodam individualmente utilizando .only
    it('Detect elements product page', async () => {
        await menuScreen.accessLoginScreen()
        await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await productScreen.viewElementsCatalogPage()
    })

    it('You must access the Product Screen and use the filter Descending Price', async () => {
        //await menuScreen.accessLoginScreen()
        //await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await productScreen.filtreDescendingPrice()
    })

    it('You must access the Product Screen and use the filter Ascending Price', async () => {
        //await menuScreen.accessLoginScreen()
        //await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await productScreen.filtreAscendingPrice()
    })

    it('You must access the Product Screen and use the filter Descending Name', async () => {
        //await menuScreen.accessLoginScreen()
        //await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        //await navigationScreen.viewElementsPrimaryPage()
        await productScreen.filtreDescendingName()
    })

    it('You must access the Product Screen and use the filter Descending/Ascending Name', async () => {
        //await menuScreen.accessLoginScreen()
        //await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        //await navigationScreen.viewElementsPrimaryPage()
        await productScreen.filtreDescendingName()
        await productScreen.filtreAscendingName()
    })
})

describe('My product application', () => {
    it('You must access produtc page and details product', async () => {
        //await menuScreen.accessLoginScreen()
        //await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await navigationScreen.viewElementsPrimaryPage()
        await productScreen.viewElementsProductPage()
    })
    it('You must access produtc page and test buttons', async () => {
        //await menuScreen.accessLoginScreen()
        //await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        //await productScreen.viewElementsProductPage()
        await productScreen.testButtonsProductPage()
    })

})