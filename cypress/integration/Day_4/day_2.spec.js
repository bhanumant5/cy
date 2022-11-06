/// <reference types="Cypress"/>

//radio button , checkbox , dropdown

describe("TC-1  verify the Radio Button", ()=>{
    it('', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('input[value="blue"]').check().should('be.checked')
         //cy.get('input[value="yellow"]').check().should('be.checked')
         cy.get('input[value="yellow"]').should('not.be.checked')
         cy.get('input[value="yellow"]').check().should('be.checked')
         cy.get('input[value="blue"]').should('not.be.checked')

    })
    it('', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="blue"]').click().should('be.checked')
    })
    it('', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[id="radio-buttons"]').find('input').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })
    it.only("",()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('mobiles')  
        cy.get('[class="autocomplete-results-container"]>div').each(function(el){
           cy.wrap(el).invoke('text').then(function(el){
            if(el.trim()=='mobile phone'){
                cy.wrap(el).click({force:true})
            }
           })
        })
    })
    

})

