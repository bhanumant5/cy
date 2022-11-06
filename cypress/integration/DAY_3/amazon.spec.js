/// <reference types="Cypress"/>

describe("amazon functionality", () => {
    Cypress.on("uncaught:exception ", (err, runnable) => {
      return false;
    });
  
    it("TC 01 verify the navbar elements", () => {
      cy.visit("https://www.amazon.in/");
      cy.get("#nav-xshop>a").each((el) => {
        cy.log(el.text());
        if (el.text() == "Best Sellers") {
          cy.wrap(el).click();
        }
      });
    });
    it("TC 02 verify the navbar elements", () => {
      cy.visit("https://www.amazon.in/");
      cy.get("#nav-xshop>a").each((el) => {
        cy.log(el.text());
       cy.contains('Best Sellers').click()
       return null
      });
    });
    it.only("TC 03 verify best selllar page first element ", () => {
      cy.visit("https://www.amazon.in/");
      cy.get("#nav-xshop>a").each((el) => {
          cy.log(el.text());
         cy.contains('Best Sellers').click()
      cy.get('#B088XH1BP7>a>span>div').click({force:true})
      cy.get('[class="a-lineitem a-align-top"]>tbody>tr>td>span>span').eq(3).should('have.text','₹199.00')
     
    });
  
  
  
  });
  });