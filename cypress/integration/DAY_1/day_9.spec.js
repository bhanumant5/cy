///<reference types="Cypress"/>

describe("", () => {
    // cy.on('uncaught:exception', (err, runnable) => {
    //     expect(err.message).to.include('of undefined')
    //       done()
    //       return false
    //     });
  it("", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#speed >option").each(function (el) {
      const text = el.text();
      cy.log(text);
      cy.get(el).select("Faster").should("be.visible");
    });
  });
  it("", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // cy.contains('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)').click()
    cy.get("#dropdown-checkboxes-radiobuttons").then(function (el) {
      const url = el.prop("href");
      cy.visit(url);
    });
  });
  it("", () => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("#radio-buttons>input").first().check().should("be.visible");
    cy.get('input[type="checkbox"]').each(function (el) {
      cy.wrap(el).check().should("be.checked");
      cy.wrap(el).uncheck().should("not.be.checked");
    });
    cy.get('input[type="checkbox"]')
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
    cy.get('input[type="checkbox"]', { timeout: 2000 })
      .uncheck(["option-1", "option-2", "option-3", "option-4"])
      .should("not.be.checked");
  });
  it("", () => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('input[type="radio"]').eq(0).check();
    cy.get('input[type="radio"]', { includeShadowDom: true })
      .eq(1)
      .check({ force: true })
      .should("not.be.checked");
  });
  it("", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#draggable > p").trigger(
      "mousedown",
      { which: 1 },
      { force: true }
    );
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true })
      .should("be.visible");
    cy.get("#gallery > :nth-child(1) > img").trigger(
      "mousedown",
      { which: 1 },
      { force: true }
    );
    // cy.get('#gallery > :nth-child(2) > img').trigger('mousedown', {which:1}, {force:true})
    cy.get("#trash")
      .trigger("mousedown", { which: 1 }, { force: true })
      .should("be.visible");
  });
  it("", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#frame-one1434677811").then(function (iframe) {
      const body = iframe.contents().find("body");
      cy.wrap(body).find("#q15 >table>tbody>tr>td").click()
    });
  });
  it('', ()=>{
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get('[name="number"] >option').each(function(el){
        const text=el.text()
        //cy.log(text)
        if(text==='2'){
            cy.wrap(el).select('2').should('be.visible')
        }
    })
  })
  it.only('Test Case2', function (){    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    cy.visit("https://www.tutorialspoint.com/selenium /selenium_automation_practice.htm",{failOnStatusCode: false});
    // checking by values
    cy.get('input[type="checkbox"]')
    .check(['Manual Tester','Automation Tester']);
    // selecting a value from static dropdown
    cy.get('select[name="continents"]').select('Europe')
    // asserting the option selected
    .should('have.text', 'Europe')
 });
});
