/// <reference types = "cypress" />
import TestCase2 from "../support/testCase2" 

describe('Sauce Demo Shopping Test', () => {
  it('Complete shopping flow', () => {
    const shoppingFlow = new TestCase2();
    shoppingFlow.loginUser()
    shoppingFlow.sort()
    shoppingFlow.verifySorting()
    shoppingFlow.addFirstItem()
    shoppingFlow.addSecondItem()
    shoppingFlow.cart()
    shoppingFlow.checkOut()
    shoppingFlow.verifyitemPriceandTotalPrice()
    shoppingFlow.verifyCheckout()
    shoppingFlow.backToHome()
    
          

  })
})
