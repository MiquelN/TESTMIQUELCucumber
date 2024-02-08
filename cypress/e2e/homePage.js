class homePage {
    elements = {
        logInLink: () => cy.get("#login2"),
        logInModal: () => cy.get("#logInModal"),
        usernameInput: () => cy.get("#loginusername"),
        passwordInput: () => cy.get("#loginpassword"),
        logInButton: () => cy.get("#logInModal .btn.btn-primary"),
        welcome: () => cy.get("#nameofuser"),
        addCartButton: () => cy.get(".btn.btn-success.btn-lg"),
        cartLink: () => cy.get("#cartur"),
        placeOrder: () => cy.get(".btn.btn-success"),
        totalPrice: () => cy.get('#totalp'),
        orderModal: () => cy.get('#orderModal'),
        nameField: () => cy.get('#name'),
        countryField: () => cy.get('#country'),
        cityField: () => cy.get('#city'),
        creditCardField: () => cy.get('#card'),
        MonthField: () => cy.get('#month'),
        yearField:() => cy.get('#year'),
        purchaseButton: () => cy.get('#orderModal .btn.btn-primary'),
        messageSuccessfulPurchase:() => cy.get('.sweet-alert h2')
    };

    async clickLogInLink() {
        this.elements.logInLink().click();
    }

    async typeUsername(username) {
        for (let i = 0;i<username.length;i++) {
            this.elements.usernameInput().type(username.charAt(i));
        }
    }

    async typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    async clickLogInButton() {
        this.elements.logInButton().click();
    }

    async clickAddToCart() {
        this.elements.addCartButton().click();
    }

    async clickCart() {
        this.elements.cartLink().click();
    }

    async clickS6() {
        cy.get("#tbodyid .card-title")
          .contains('s6')
          .then(($element) => {
            cy.wrap($element).click();
          });
    }

    async assureProductDesired(info) {
        cy.get("#tbodyid td")
          .contains(info)
          .then(($element) => {
            cy.wrap($element).should("be.visible");
          });
    }

    async clickPlaceOrder() {
        this.elements.placeOrder().click();
    }

    async clickPurchaseButton() {
        this.elements.purchaseButton().click();
    }

}
export const homepage = new homePage();