Feature: End to End Validation

    Feature Description

    Scenario: End to End Testing
    Given I Open the test link
    When I add items to cart
    Then validate the total price
    And select the countery and verify the end message