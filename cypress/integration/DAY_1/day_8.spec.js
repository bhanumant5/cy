
///<reference types ="Cypress"/>


describe('',()=>{
    beforeEach(function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('', ()=>{
        cy.get('#Text1> .widget-content >div').each(function(el){
            const text=el.text()
            cy.log(text)
        })
    })
    it.only('', ()=>{
           cy.get('#frame-one1434677811').then(function($iframe){
            const body = $iframe.contents().find('body')
            cy.wrap(body).find('label').eq(1).click()
        })
    })
    
})