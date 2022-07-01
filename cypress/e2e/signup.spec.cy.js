/// <reference types="Cypress" />

// const { default: signup } = require("./pageobjectsignin/signup")
import signup from '../e2e/pageobjectsignin/signup'


describe('Sign up page', ()=>{
    
    it('should fill and verify sign up form', ()=>{

        signup.open();
        signup.fillfield()
        signup.clickBtn()
    })

})