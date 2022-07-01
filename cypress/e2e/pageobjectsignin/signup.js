import info from '../../fixtures/example.json'

class signup {
    
    open(){
        cy.visit('https://persian-weeb.000webhostapp.com/signup.php')
        cy.url().should('include', 'signup.php')
    }
    fillfield(){
        cy.get('input[name="name"]').type(info.firstName)
        cy.get('input[name="username"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.Email)
        cy.get('input[name="password"]').type(info.passWord)
        cy.get('input[name="repassword"]').type(info.passWord)
        cy.get('input[value="Submit"]').click()
    }
    clickBtn(){
        cy.contains('About Us').click({force:true});
    }

    // static getTitle(){
    //     cy.get('.page-title').invoke('text').then((text1)=>{
    //        expect(text1).to.eq("Automation Practice") 
    //     })
    // }

    // static getDropdownOption(){
    //     cy.get('#dropdown-class-options').select('Selenium').should('have.value', 'option1')
    // }

    // static searchcountry(){
    //     cy.get("#autocomplete").type("can")
    //     cy.get(".ul-menu-item").each((($el, index, $list) =>{
    //         if($el.text() === "canada"){
    //             cy.wrap($el).click()
    //         }
    //     }
        
    //     )
        
    //     )
    // }

}
export default new signup