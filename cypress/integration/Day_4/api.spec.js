/// <reference types="Cypress"/>

describe('', ()=>{
    it('', ()=>{
        cy.request({
            method:'GET',
            url:'https://aa.google.com/u/0/_/gog/get?rt=j&sourceid=538'
        }).then(function(res){
            cy.log(res)
        })
    })
})