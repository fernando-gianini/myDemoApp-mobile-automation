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
        this.primaryDescendingName = "//android.widget.TextView[@content-desc='store item text' and @text='Sauce Labs Fleece Jacket']"
        this.secondaryDescendingName = "//android.widget.TextView[@content-desc='store item text' and @text='Sauce Labs Backpack']"
        this.frameworkLayout = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout"
        this.cartButton = "//android.view.ViewGroup[@content-desc='cart badge']/android.widget.ImageView"
        this.productText = "//android.widget.TextView[@text='Products']"
        this.picturePrimaryProduct = "(//android.view.ViewGroup[@content-desc='store item'])[1]/android.view.ViewGroup[1]/android.widget.ImageView"
        this.pictureSecundaryProduct = "(//android.view.ViewGroup[@content-desc='store item'])[2]/android.view.ViewGroup[1]/android.widget.ImageView"
        this.secundaryNameProduct = "//android.widget.TextView[@content-desc='store item text' and @text='Sauce Labs Bike Light']"
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
    await $(this.secundaryNameProduct).isDisplayed()
}

async filtreDescendingPrice() {
    await $(this.filterButton).click();
    await $(this.filterPriceDecentent).click();
    await browser.pause(2000);
    await $(this.primaryDescendingPrice).getText();
    await $(this.secondaryDescendingPrice).getText();   
    const primaryPrice = parseFloat((await $(this.primaryDescendingPrice).getText()).replace('$', ''));
    const secondaryPrice = parseFloat((await $(this.secondaryDescendingPrice).getText()).replace('$', '')); 
    expect(primaryPrice).toBeGreaterThan(secondaryPrice);
    }

async filtreAscendingPrice() {
    await $(this.filterButton).click();
    await $(this.filtrePriceAscending).click();
    await browser.pause(2000);
    await $(this.primaryAscendingPrice).getText();
    await $(this.secondaryAscendingPrice).getText();
    const primaryPrice = parseFloat((await $(this.primaryAscendingPrice).getText()).replace('$', ''));
    const secondaryPrice = parseFloat((await $(this.secondaryAscendingPrice).getText()).replace('$', ''));
    expect(primaryPrice).toBeLessThan(secondaryPrice);
    }

 async filtreDescendingName() {
    await $(this.filterButton).click();
    await $(this.filterDescendingName).click();
    await browser.pause(2000);
    await $(this.primaryDescendingName).getText();
    await $(this.secondaryDescendingName).getText();
    expect(primaryName).localeCompare(secondaryName);
    }

}

export default new Product()