class Product {
    constructor() {
        this.filterButton = "//android.view.ViewGroup[@content-desc='sort button']/android.widget.ImageView"
        this.filterPriceDecentent = "//android.widget.TextView[@text='Price - Descending']"
        this.priceElements = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]"
        this.primaryDescendingPrice = "//android.widget.TextView[@content-desc='store item price' and @text='$49.99']"
        this.secondaryDescendingPrice = "//android.widget.TextView[@content-desc='store item price' and @text='$29.99']"
        this.filtrePriceAscending = "//android.widget.TextView[@text='Price - Ascending']" 
        this.primaryAscendingPrice = "//android.widget.TextView[@content-desc='store item price' and @text='$7.99']"
        this.secondaryAscendingPrice = "//android.widget.TextView[@content-desc='store item price' and @text='$9.99']"
        this.filterDescendingName = "//android.widget.TextView[@text='Name - Descending']"
        this.primaryDescendingName = "//android.widget.TextView[@content-desc='store item text' and @text='Test.allTheThings() T-Shirt']"
        this.secondaryDescendingName = "//android.widget.TextView[@content-desc='store item text' and @text='Sauce Labs Onesie']"
        this.frameworkLayout = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout"
        this.cartButton = "//android.view.ViewGroup[@content-desc='cart badge']/android.widget.ImageView"
        this.productText = "//android.widget.TextView[@text='Products']"
        this.picturePrimaryProduct = "(//android.view.ViewGroup[@content-desc='store item'])[1]/android.view.ViewGroup[1]/android.widget.ImageView"
        this.pictureSecundaryProduct = "(//android.view.ViewGroup[@content-desc='store item'])[2]/android.view.ViewGroup[1]/android.widget.ImageView"
        this.secondaryNameProduct = "//android.widget.TextView[@content-desc='store item text' and @text='Sauce Labs Bike Light']"
        this.primaryAscendingName = "//android.widget.TextView[@content-desc='store item text' and @text='Sauce Labs Backpack']"
        this.filterAscendingButton = "//android.widget.TextView[@text='Name - Ascending']"   
        this.primaryCountainerProduct = "(//android.view.ViewGroup[@content-desc='store item'])[1]"
        this.frameworkLayoutProduct = "//android.widget.ScrollView[@content-desc='product screen']/android.view.ViewGroup"
        this.priceCountainer = "//android.widget.TextView[@content-desc='product price']"
        this.addToCartButton = "//android.view.ViewGroup[@content-desc='Add To Cart button']"
        this.pictureProduct = "//android.widget.ScrollView[@content-desc='product screen']/android.view.ViewGroup/android.widget.ImageView"
        this.productName = "//android.view.ViewGroup[@content-desc='container header']"
        this.selectColorButton = "//android.view.ViewGroup[@content-desc='blue circle']"
        this.descritionProduct = "//android.widget.TextView[@content-desc='product description']"
        this.avaliationProductButton = "//android.view.ViewGroup[@content-desc='review star 3']"
        this.confirmModalButton = "//android.view.ViewGroup[@content-desc='Close Modal button']"
        this.plusProductButton = "//android.view.ViewGroup[@content-desc='counter plus button']/android.widget.ImageView"
        this.counterAmountProduct = "//android.view.ViewGroup[@content-desc='counter amount']"
        this.minusProductButton = "//android.view.ViewGroup[@content-desc='counter minus button']/android.widget.ImageView"
        this.productPlusInCart = "(//android.widget.TextView[@text='1'])[1]"
    }


async viewElementsProductPage() {
    await $(this.filterButton).isDisplayed()  
    await $(this.frameworkLayout).isDisplayed()
    await $(this.cartButton).isDisplayed()  
    await $(this.productText).isDisplayed() 
    await $(this.picturePrimaryProduct).isDisplayed()
    await $(this.pictureSecundaryProduct).isDisplayed()
    await $(this.secondaryDescendingPrice).isDisplayed()
    await $(this.secondaryAscendingPrice).isDisplayed()
    await $(this.secondaryDescendingName).isDisplayed()
    await $(this.secondaryNameProduct).isDisplayed()
}

async filtreDescendingPrice() {
    await $(this.filterButton).click()
    await $(this.filterPriceDecentent).click()
    await browser.pause(2000);
    await $(this.primaryDescendingPrice).getText()
    await $(this.secondaryDescendingPrice).getText() 
    const primaryPrice = parseFloat((await $(this.primaryDescendingPrice).getText()).replace('$', ''))
    const secondaryPrice = parseFloat((await $(this.secondaryDescendingPrice).getText()).replace('$', ''))
    expect(primaryPrice).toBeGreaterThan(secondaryPrice)
    }

async filtreAscendingPrice() {
    await $(this.filterButton).click()
    await $(this.filtrePriceAscending).click()
    await browser.pause(2000)
    await $(this.primaryAscendingPrice).getText()
    await $(this.secondaryAscendingPrice).getText()
    const primaryPrice = parseFloat((await $(this.primaryAscendingPrice).getText()).replace('$', ''))
    const secondaryPrice = parseFloat((await $(this.secondaryAscendingPrice).getText()).replace('$', ''))
    expect(primaryPrice).toBeLessThan(secondaryPrice)
    }

async filtreDescendingName() {
    await $(this.filterButton).click()
    await $(this.filterDescendingName).click()
    await browser.pause(2000)
    const primaryName = await $(this.primaryDescendingName).getText()
    const secondaryName = await $(this.secondaryDescendingName).getText()
    const comparison = primaryName.localeCompare(secondaryName)
    expect(comparison).toBeGreaterThan(0)
    }

async filtreAscendingName() {
    await $(this.filterButton).click()
    await $(this.filterAscendingButton).click()
    await browser.pause(2000)
    const primaryName = await $(this.primaryAscendingName).getText()
    const secondaryName = await $(this.secondaryNameProduct).getText()
    const comparison = primaryName.localeCompare(secondaryName)
    expect(comparison).toBeLessThan(0)
    }

async viewElementsProductPage() {
    await $(this.primaryCountainerProduct).click()
    await $(this.frameworkLayoutProduct).isDisplayed()
    await $(this.priceCountainer).isDisplayed()
    await $(this.addToCartButton).isDisplayed()
    await $(this.pictureProduct).isDisplayed()
    await $(this.productName).getText()
    await $(this.selectColorButton).isDisplayed()
    await $(this.descritionProduct).isDisplayed()
    await $(this.avaliationProductButton).isDisplayed()
    }
async testButtonsProductPage() {
    await $(this.selectColorButton).click()
    await $(this.avaliationProductButton).click()
    await $(this.confirmModalButton).click()
    await $(this.plusProductButton).click()
    await $(this.counterAmountProduct).getText('2')
    await $(this.minusProductButton).click()
    await $(this.counterAmountProduct).getText('1')
    await $(this.addToCartButton).click()   
    await $(this.productPlusInCart).getText('1')
    }
}

export default new Product()