Feature: Making a successful purchase logged
    Scenario: Log in into account
        Given I am on the home page
        When click log in link
        Then should see log in modal
        When introduce email and password and click on log in button
        Then should see logged successfully
        When click on Samsung Galaxy s6
        Then should see button add to cart 
        When click add to cart button
        Then should see product added to the cart
        When click place order
        Then should see order modal
        When introduce data and click purchase
        Then should see purchase completed successfully

        