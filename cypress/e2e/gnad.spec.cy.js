/// <reference types="Cypress" />

import gnadass from "./gnad/gnadass"

describe('visit GNAD webiste', ()=>{
  
    it('should verify all name of the features on the homepage', ()=>{
      gnadass.open()
      gnadass.clickmenulink()
    })

})