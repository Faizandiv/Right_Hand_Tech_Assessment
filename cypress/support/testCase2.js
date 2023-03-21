/// <reference types = "cypress" />
class TestCase2 {

    loginUser() {
        cy.visit(Cypress.env('secondUrl'))
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    }
    sort() {
        cy.get('.product_sort_container').select('za')
    }
    verifySorting() {
        cy.get('.inventory_item_name').then($items => {
            const names = $items.map((_, el) => el.innerText).get()
            expect(names).to.deep.equal(names.slice().sort().reverse())
        })
    }
    addFirstItem() {

        cy.fixture('testData.json').then((data) => {
            const item = data.item1

            cy.contains('.inventory_item_name', item.title)
            console.log(item.title)
            cy.contains('.pricebar', item.price)
            console.log(item.price)
            cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        })
    }
    addSecondItem() {
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
    }
    cart() {
        cy.get('.shopping_cart_link').click()
    }
    checkOut() {

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
                    cy.get('.error-message-container').invoke('html', '<p style="color:red"> Postal code input can accepts non-integers as well </p>')
                }
            }))
        cy.wait(2000)
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('54000')

        cy.contains('Continue').click()
    }
    verifyitemPriceandTotalPrice() {
        cy.fixture('testData.json').then((data) => {
            let tax = 0

            cy.get('.summary_tax_label').then((taxData) => {
                tax = parseFloat(taxData[0].innerText.split(':')[1].trim().split('$')[1])
                const item1Price = parseFloat(data.item1.price.replace('$', ''))
                const item2Price = parseFloat(data.item2.price.replace('$', ''))
                const totalPrice = item1Price + item2Price + tax
                cy.get('.inventory_item_price').then(($prices) => {
                    const prices = $prices.map((_, el) => parseFloat(el.innerText.replace('$', ''))).get()
                    expect(prices.reduce((acc, curr) => acc + curr) + tax).to.equal(totalPrice)
                })
            })

        })

    }
    verifyCheckout() {
        cy.contains('Finish').click()
        cy.get('.title').should('be.visible')
    }
    backToHome() {
        cy.contains('Back Home').click()
        cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')
    }
}

export default TestCase2