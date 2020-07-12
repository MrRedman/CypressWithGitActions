export class UserTablePage{


    clickAddUser(){

        cy.contains('Add User').click();
    }

    addUser(firstname, lastName, userName, password, customerType, role, email, cellphone){

        cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').type(firstname);

        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').type(lastName);

        cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').type(userName);

        cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine').type(password);

        //case =  | 
        switch(customerType){

            case "Company AAA":
                cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine').click();
                break;

            case "Company BBB":
                cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .ng-pristine').click();
                break;

        }


        cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(role);

        cy.wait(2000);

        cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').type(email);

        cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').type(cellphone);

    }

    clickSaveButton(){

        cy.get('.btn-success').click();
    }

    verifyUserIsAdd(firstname){

        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',firstname);
    }



    
}

export const userWebTablePage = new UserTablePage();