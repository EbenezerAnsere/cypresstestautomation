/// <reference types="Cypress" />

import homepage from '../e2e/page-object/homepage'

describe('Visit Homepage Website', ()=>{

    it('Should verify homepage website', ()=>{
        homepage.open();
        homepage.getStartedBtn.click();
        homepage.getGalleryBtn.click();
        homepage.getSignInBtn.click();
        homepage.getLogInBtn.click();
    })
})