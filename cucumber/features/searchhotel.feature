Feature: Searching Hotels

  Scenario: Search hotel with valid details
    Given user is on the hotel booking page
    When user enter valid details for hotel search
    Then user should see the list of available hotels
