Feature: Ecommerce website

    Feature Description

    Scenario: ecommerce work flow
    Given I Open the test link
    When I add items to cart
    Then validate the total price
    And select the countery and verify the end message

    Scenario: Filling the Form
    Given I Open the test link
    When I fill the form
    Then submit the form and validate the message