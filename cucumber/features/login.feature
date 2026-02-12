Feature: Adactin Hotel Website

  Scenario: Validate with valid user
    Given the user launches the application
    When user enter valid username and password and click login button
    Then user should navigates to the search hotel page
