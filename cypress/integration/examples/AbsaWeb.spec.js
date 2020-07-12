/// <reference types="cypress" />
import {userWebTablePage} from "../Page/UsersPage"


describe('way2automation', () => {
    beforeEach(() => {
      cy.visit('/', {retryOnStatusCodeFailure:true});

      cy.fixture("TestData").as("data");
    })

    it('Register Admin Role', () => {

        userWebTablePage.clickAddUser();

        cy.get("@data").then((userDetails) => {

            userWebTablePage.addUser(userDetails.Users[0].firstname,userDetails.Users[0].lastname,userDetails.Users[0].username,userDetails.Users[0].password,userDetails.Users[0].customer,
                userDetails.Users[0].role,userDetails.Users[0].email,userDetails.Users[0].cellphone);

                userWebTablePage.clickSaveButton();

                userWebTablePage.verifyUserIsAdd(userDetails.Users[0].firstname);

        })

      })

      it('Register Customer Role', () => {

        userWebTablePage.clickAddUser();

        cy.get("@data").then((userDetails) => {

            userWebTablePage.addUser(userDetails.Users[1].firstname,userDetails.Users[1].lastname,userDetails.Users[1].username,userDetails.Users[1].password,userDetails.Users[1].customer,
                userDetails.Users[1].role,userDetails.Users[1].email,userDetails.Users[1].cellphone);

                
            userWebTablePage.clickSaveButton();

            userWebTablePage.verifyUserIsAdd(userDetails.Users[1].firstname);

        })

      })

})
