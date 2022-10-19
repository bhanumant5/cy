///<reference types="cypress"/>

describe("", ()=>{
    it("", ()=>{
        cy.visit('https://brandless.com/')
        cy.get('[class="container"]>div>div>nav>div>a').then(function(el){
            const text=el.text()
            cy.log(text)
        })
        cy.get('[class="container"]>div>div>nav>div>a').eq(1).invoke('show')
        cy.contains('Skincare').click({force:true})
        cy.url().should('include', 'https://brandless.com/collections/skincare')
        cy.get('#sort-by >option').find('option').eq(2).select('Featured')
    })
})