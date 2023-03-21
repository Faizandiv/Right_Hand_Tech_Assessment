describe('Sauce Demo Shopping Test', () => {
  it('should complete shopping flow', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Sort z - a
    cy.get('.product_sort_container').select('za')

    // Verify sorting
    cy.get('.inventory_item_name').then($items => {
      const names = $items.map((_, el) => el.innerText).get()
      expect(names).to.deep.equal(names.slice().sort().reverse())
    })

    //Add item 1 to cart and validate price
    cy.fixture('testData.json').then((data) => {
      const item = data.item1
      //cy.wait(1000)

      //cy.get('.pricebar')
      cy.contains('.inventory_item_name', item.title)
      console.log(item.title)//.siblings('.pricebar').should('contain', item.price)
      cy.contains('.pricebar', item.price)
      console.log(item.price)
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      //cy.contains('.inventory_item_name', item.title).siblings('.pricebar').siblings('.btn_primary').click()
      //cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      //cy.contains(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('contain',item.price)

      //console.log(item)
    })

    // Add item 2 to cart and validate price
    cy.fixture('testData.json').then((data) => {
      const item = data.item2
      cy.contains('.inventory_item_name', item.title)
      console.log(item.title)//.siblings('.pricebar').should('contain', item.price)
      cy.contains('.pricebar', item.price)
      console.log(item.price)
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

      //cy.contains('.inventory_item_name', item.title).siblings('.pricebar').should('contain', item.price)
      //cy.contains('.inventory_item_name', item.title).siblings('.pricebar').siblings('.btn_primary').click()
    })

    //   // Go to cart
    cy.get('.shopping_cart_link').click()

    //   // Checkout
    cy.contains('Checkout').click()
    cy.get('#first-name').type('Faizan')
    cy.get('#last-name').type('Taj')

    
      cy.get('#postal-code')
        .type('1234')
        .should('have.value', '1234')
        .type('abc')
        .invoke('text').then(((text) => {
          const val = parseInt(text)
          if (Number.isInteger(val)) {
            console.log('here ')
          }
          else {
            console.log('NON-INTEGERS CAN BE ADDED FOR POSTAL CODES!!')
            cy.get('.error-message-container').invoke('html','<p style="color:red"> Postal code input can accepts non-integers as well </p>')
          }
        }))
        cy.wait(2000)
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('54000')

    cy.contains('Continue').click()

    //   // Validate zipcode only accepts integers
    //   cy.get('#postal-code').type('abc')
    //   cy.get('.error-button').click()
    //   cy.contains('Postal Code is required').should('be.visible')
    //   cy.get('#postal-code').clear().type('12345')
    //   cy.contains('Continue').click()

    //   /Validate items price and total price
    // cy.fixture('testData.json').then((data) => {
    //   let tax = 0

    //   cy.get('.summary_tax_label').then((taxData) =>{
    //     tax = parseFloat(taxData[0].innerText.split(':')[1].trim().split('$')[1])
    //     const item1Price = parseFloat(data.item1.price.replace('$', ''))
    //     const item2Price = parseFloat(data.item2.price.replace('$', ''))
    //     const totalPrice = item1Price + item2Price + tax
    //     cy.get('.inventory_item_price').then(($prices) => {
    //       const prices = $prices.map((_, el) => parseFloat(el.innerText.replace('$', ''))).get()
    //       expect(prices.reduce((acc, curr) => acc + curr) + tax).to.equal(totalPrice)
    //     })
    //   })

    // })

    // Finish checkout
    //      cy.contains('Finish').click()

    //   //   // Verify checkout is complete
    //   cy.get('.title').should('be.visible')
    //     //cy.contains('CHECKOUT: COMPLETE!').should('be.visible')

    //   //   // Go back to home
    //     cy.contains('Back Home').click()
    //      cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')
    //   // })
    // })

  })
})