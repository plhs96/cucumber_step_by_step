Feature: Login Functionality

  Scenario: Login in sub-domain
    Given Go to the login page
    When Login with valid account
    Then Verrify URL