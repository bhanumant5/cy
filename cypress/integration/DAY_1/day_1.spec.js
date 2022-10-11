import data from '../../fixtures/example.json'

///<reference types ="cypress"/>
describe('Test', ()=>{
    before('Before of Every Test Case', ()=>{
cy.log('Before')
    })
    beforeEach('BeforeEcah', ()=>{
        cy.log('BeforeEach')
    })
    afterEach('AfterEcah', function(){
        cy.log('AfterEcah')
    })
    after('After', ()=>{
        cy.log('After')
    })
    it('Test', ()=>{
       cy.log(' I am Here')
    })

    it('Test ', ()=>{
        cy.log('I am HEre')
    })
    it('Handling New Window ', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').invoke('removeAttr', 'target').click()
        cy.get('h3').should('have.text', 'New Window')
        cy.url().should('include', '/windows/new')
    })
    it('Test', ()=>{
        cy.visit('https://alapanme.github.io/testing-cypress.html')
        cy.window().then((win)=>{
            cy.stub(win, 'open', url=>{
                win.location.href='https://the-internet.herokuapp.com/'
            }).as('popup')
        })
        cy.get('button').click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h1')
            .should('have.text', 'Welcome to the-internet')
    })
    it.only('Test'), ()=>{
        Cypress.on('uncaught:exception', (err, runnable)=>{
           return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', function(str){
         expect(str).to.eql('I am a JS Alert')
        })
        cy.contains('I am a JS Alert').click()
        cy.on('window:alert', function(){
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    }

})