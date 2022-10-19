///<reference types ="cypress"/>
import HomePage from "../../support/models/login.js"

describe('', ()=>{
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('of undefined')
          done()
          return false
        });
    it('', ()=>{
        cy.visit('https://brandless.com/account/login')
        cy.get('#customer_email').type('bhanumant5@gmail.com')
        cy.get('#customer_password').type('Hamu@1995')
        cy.get('input[value="Login"]').click({force:true})
        cy.get('.shopify-challenge__button', {timeout:5000})
        cy.url().should('include', 'account')
    
    })
    it('', ()=>{
        cy.Login()
    })
})