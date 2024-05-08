Feature: Ecommerce website

    Feature Description
    @Regression
    Scenario: ecommerce work flow
    Given I Open the test link
    When I add items to cart
    Then validate the total price
    And select the countery and verify the end message
    
    @Smoke
    Scenario: Filling the Form
    Given I Open the test link
    When I fill the form
     |Name | Email               |
     |bobz | cuccumber@gamil.com |
    Then submit the form and validate the message