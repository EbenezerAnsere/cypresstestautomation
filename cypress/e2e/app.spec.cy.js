/// <reference types="Cypress" />

import helper from '../e2e/pageobject/helper'

describe('Visit dashboard website', ()=>{
   
    it('should verify homepage', ()=>{
       const lp = new helper()
       lp.visit()
       lp.fillFirstName('Kwabena')
       lp.fillMiddleName('Opoku')
       lp.fillLastName('Osei')
       lp.fillPhoneNumber('0245094323')
       lp.fillBirthData('2022-2-2')
       lp.fillAddress('I am testing form')
       lp.submit()
    })
})