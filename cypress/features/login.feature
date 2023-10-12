Feature: Login Functionality

  Scenario: Login in sub-domain
    Given Go to the login page
    When Login with "organization01@yopmail.com" and "87654321"
    Then Verrify URL