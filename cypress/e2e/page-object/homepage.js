class homepage{

    open(){
        cy.visit('https://persian-weeb.000webhostapp.com/login.php');
        cy.url().should('include', 'login.php')
    }

    get getStartedBtn(){
        return cy.get('.nav').children().eq(0).contains('Home Page').should('be.visible')
    }

    get getGalleryBtn(){
        return cy.get('.nav').children().eq(1).contains('Gallery').should('be.visible')
    }
    
    get getSignInBtn(){
        return cy.get('.nav').children().eq(2).contains('Sign In').should('be.visible')
    }

    get getLogInBtn(){
        return cy.get('.nav').children().eq(3).contains('Log In').should('be.visible')
    }
}

export default new homepage