///<reference types= "cypress"/>


describe('TC 1- Verify api ' , ()=>{
    it(' Verify the Api', ()=>{
        cy.request({
            method :'GET',
            url:'https://fast.a.klaviyo.com/custom-fonts/api/v1/company-fonts/onsite?company_id=SV2GiC'
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
    it('TC 2 - Verify the gorest Api', ()=>{
        cy.request({
            method :"GET",
            url :'https://gorest.co.in/public/v2/users',

        }).then(function(res){
            expect(res.status).to.eq(200)
            expect(res.body.length).to.eq(10)
            res.body.forEach(element => {
                expect(element).to.have.keys(["id", "gender", "name", "email", "status"])
            });
        })
    })
    // it('Tc 3 - Verify the gorest Api', ()=>{
    //     let payload = {
    //         name: "Tenali Ramakrishna",
    //         gender: "male",
    //         email: `tenali${Math.random()*6}.ramakrishna@15ce.com`,
    //         status: "active"
    //     }

    //     cy.request({
    //         method:'POST', 
    //         url :'https://gorest.co.in/public/v2/users',
    //        body:payload
    //     }).then(function(res){
    //         expect(res.status).to.eq(201)
    //         expect(res.body).to.have.keys(["id","name","email","gender","status"])
    //         expect(res.body.id).not.eq(null)
    //         expect(res.body.name).to.eq(payload.name)
    //         expect(res.body.gender).to.eq(payload.gender)
    //         expect(res.body.email).to.eq(payload.email)
    //         expect(res.body.status).to.eql(payload.status)
    //     })
    // })
    it('Test', ()=>{
        cy.visit('/')
        cy.get('#shopify-section-162809394085f52339 > .section > .container > .one-whole > .heading-section__content > .heading-section__heading').should('be.visible').and('have.text', 'Brand Less. Live More.')
    })
    it.only('Handling New Window ', ()=>{
        cy.visit('https://alapanme.github.io/testing-cypress.html')
        cy.get('.example>a').invoke('removeAttr', 'target')
        cy.get('.example>h3').should('have.text', 'New Window')
    })
})