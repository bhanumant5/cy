

///<reference types ="cypress"/>


describe('Test', ()=>{
    it('Test'), ()=>{
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