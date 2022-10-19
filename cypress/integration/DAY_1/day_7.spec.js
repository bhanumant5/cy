///<reference types ="Cypress"/>

describe('', ()=>{
    it('', ()=>{
        cy.visit(Cypress.env('url'))
        cy.get('#nav-xshop-container>div>a').each(function(el){
            const text = el.text()
            cy.log(text)
           if(text.includes('Best Sellers')){
             
           }
        })
    })
    it('', ()=>{
        cy.visit('https://www.amazon.in/Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys')
        cy.get(':nth-child(1) > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click({force:true})
        cy.go('back')
        cy.go(1)
        cy.get('#nav-logo-sprites').should('be.visible')
    })
    it.only('Handling iframe ', ()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            const body =$iframe.contents().find('body')
            cy.wrap(body).find('[class="nav navbar-nav"]>li>a').first().click().should('have.text', 'Home')
        })
    })
    
      
})


