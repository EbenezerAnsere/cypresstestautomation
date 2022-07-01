class gnadass {
      open(){
        cy.visit('https://gnadgh.org/')
        cy.url().should('include', 'gnadgh.org')
      }

      clickmenulink(){
        cy.get('.elementor-nav-menu').children().eq(0).find('a')
      }
}

export default new gnadass