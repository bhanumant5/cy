///<reference types= 'cypress'/>

describe('', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('of undefined')
          done()
          return false
        });
  it("", () => {
        cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('of undefined')
      done()
      return false
    });
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.contains("Home").click({ force: true });
    cy.url().should("include", "https://www.rahulshettyacademy.com/");
  });
  it.only("", () => {
    // Cypress.config('pageLoadTimeout')
    if(Cypress.isBrowser('Chrome'))
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#product>tbody>tr>td").each(function ($el, index, $list) {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.log(text);
      }
    });
  });
  it("", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      expect(str).to.eq("Hello , Are you sure you want to confirm");
    });
  });
  it("", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.wait(6000)
    cy.url().should("include", "https://www.rahulshettyacademy.com/");
    cy.go('back')
    cy.go(1)
    cy.go(-1)
    cy.go('forward')
  });
  it('', ()=>{
    cy.visit(Cypress.env('url'))
  })
});
