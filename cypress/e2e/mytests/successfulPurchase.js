import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {homepage} from '../homePage'


Given("I am on the home page", async () => {
    await cy.visit("https://www.demoblaze.com/");
    await cy.url().should("eq","https://www.demoblaze.com/");
});

When("click log in link", async () => {
    await homepage.clickLogInLink();
})

Then("should see log in modal", async () => {
    await homepage.elements.logInModal().should("be.visible");
})

When("introduce email and password and click on log in button", async () => {
    await homepage.typeUsername("miqueltest@gmail.comqa");
    await homepage.typePassword("MiquelTest");
    await homepage.clickLogInButton();
})

Then("should see logged successfully", async () =>{
    await homepage.elements.welcome().invoke('text').should("eq", "Welcome miqueltest@gmail.comqa");
})

When("click on Samsung Galaxy s6", async () => {
    await homepage.clickS6();
})

Then("should see button add to cart", async() => {
    await homepage.elements.addCartButton().should("be.visible");
})

When("click add to cart button", async () => {
    await homepage.clickAddToCart();
})

Then("should see product added to the cart", async() => {
    await cy.reload();
    await homepage.clickCart();
    await cy.wait(2000);
    await homepage.assureProductDesired("360");
    await homepage.assureProductDesired("s6");
    await homepage.elements.totalPrice().should('contain', '360')
})

When("click place order", async() => {
    await homepage.clickPlaceOrder();
})


Then("should see order modal", async() => {
    await homepage.elements.orderModal().should("be.visible");
})

When("introduce data and click purchase", async() => {
    await homepage.elements.nameField().type("test");
    await homepage.elements.countryField().type("test");
    await homepage.elements.cityField().type("test");
    await homepage.elements.creditCardField().type("test");
    await homepage.elements.MonthField().type("test");
    await homepage.elements.yearField().type("test");
    await homepage.clickPurchaseButton();
})

Then("should see purchase completed successfully", async() => {
    await homepage.elements.messageSuccessfulPurchase().should("be.visible");
})




