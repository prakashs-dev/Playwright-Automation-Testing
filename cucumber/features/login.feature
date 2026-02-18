Feature: Adactin Hotel Website

  Background:
    Given the user launches the application

  Scenario: Validate with valid user
    When user enter valid username and password and click login button
    Then user should navigates to the search hotel page

  Scenario Outline: Validate with Invalid user
    When user enter "<username>" and "<password>" and click login button
    Then user should get an error message

    Examples:
      | username    | password   |
      | Advija      | Advi@123   |
      | Alpha       | Alpha@123  |
      | vinilakumar | vinila@123 |
