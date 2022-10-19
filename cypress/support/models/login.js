
let LOGINELEMENTS ={
firstName:'[name="first_name"]',
lastName:'[name="last_name"]',
email:'[name="email"]',
comment:'[name="message"]',
submit:'[type="submit"]',
reset:'[type="reset"]'

}

function Login (firstName, lastName, email, comment){
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get(LOGINELEMENTS.firstName).type(firstName)
    cy.get(LOGINELEMENTS.lastName).type(lastName)
    cy.get(LOGINELEMENTS).type(email)
    cy.get(LOGINELEMENTS.comment).type(comment)
    cy.get(LOGINELEMENTS.submit).click()
}