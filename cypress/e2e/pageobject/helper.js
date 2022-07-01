/// <reference types="Cypress" />

class helper  {

    visit(){
        cy.visit('/')
        cy.url().should('include', 'http://localhost:3000/')
    }

    fillFirstName(value){
        const field=cy.get('[data-test-id="first-name"]')
        field.clear()
        field.type(value).should('be.visible')
        .and('be.enabled')
        return this
    }

    fillMiddleName(value){
        const field=cy.get('[data-test-id="middle-name"]')
        field.clear()
        field.type(value)
        return this
    }

    fillLastName(value){
        const field=cy.get('[data-test-id="last-name"]')
        field.clear()
        field.type(value)
        return this
    }

    fillPhoneNumber(value){
        const field=cy.get('[data-test-id="phone-number"]')
        field.clear()
        field.type(value)
        return this
    }
    
    
    fillBirthData(value){
        const field=cy.get('[data-test-id="dob"]')
        field.clear()
        field.type(value)
        return this
    }

    fillAddress(value){
        const field=cy.get('[ data-test-id="address"]')
        field.clear()
        field.type(value)
        return this
    }

    
    submit(){
        const button=cy.get('[data-test-id="submit-btn"]')
        button.click()
    }
    
}

export default helper