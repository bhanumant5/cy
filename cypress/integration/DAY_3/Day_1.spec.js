

///<reference types="cypress"/>

describe("", ()=>{
    it.skip("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]').children().eq(1).click()
        cy.url().should('include', 'https://www.lonavalacab.com/')
    })
    it(' last method', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]').children().last().click().should('have.text', 'Mumbai')
    })
    it("first method", ()=>{
        cy.visit('https://www.lonavalacab.com/',{timeout:4000})
        cy.get('[class="navbar-nav ml-auto"]').children().first().click().should('have.text', 'Packages')
    })
    it('children', ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]').children().last().then((el)=>{
            const a=el.text()
            cy.log(a)
        })
    })
    it("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.wait(6000)
        cy.get('[class="navbar-nav ml-auto"]').children().eq(1).next().click().should('have.text', 'Contact')
    })
    it.only("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]').children().eq(1).prev().click().should('have.text', 'Package')
    })
    it("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]').children().eq(2).siblings().then(function(el){
            const a=el.text()
            cy.log(a)
        })
    })
    it("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]',{timeout:6000}).parent().should('have.class', 'collapse navbar-collapse tm-bg-white')
    })
    it("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="navbar-nav ml-auto"]', {timeout:6000}).children().eq(1).parent().should('have.class', 'navbar-nav ml-auto')
    })
    it("teavese method by Index ", ()=>{
        cy.visit('https://www.lonavalacab.com/')
        cy.visit('/')
        cy.visit(Cypress.env(url))
        cy.get('[class="navbar-nav ml-auto"]').find('li').then(function(el){
            const b=el.text()
            cy.log(b)
        })
    })
    
})