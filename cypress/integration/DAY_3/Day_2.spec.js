///<reference types="cypress"/>

describe('', ()=>{
    it('', ()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('[class="gLFyf gsfi"]').type('javascript')
        cy.get('[class="G43f7e"]>li').each((el)=>{
           const txt=el.text()
           if(txt.includes('javascript w3schools')){
            cy.wrap(txt).click()
           }
        })
       
    })
    it('', ()=>{

        //i frame by Jquery Method

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            const body=$iframe.contents().find('body')
            cy.wrap(body).find('[class="nav navbar-nav"]>li').first().next().as('bdy')
        })
        cy.get('@bdy').click().should('be.visible')
    })
    it.only('', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t01>tbody>tr').each(function(el){
        //     const txt=el.text()
        //     cy.log(txt)
            
        // })
        cy.get('#t01>tbody>tr').should('have.length', 4)    // rowa
        cy.get('#t01>tbody>tr:eq(0)>th').should('have.length', 3)  // coloumn
        cy.get('#t01>tbody>tr').each(function($row, index, row){
            cy.wrap($row).within(function(){
                cy.get('th').each(function($cell, index, row){
                    cy.log($cell.text())
                })
            })
        })

    })
  
})