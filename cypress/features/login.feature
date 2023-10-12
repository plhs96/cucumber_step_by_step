Feature: Login Functionality

  Background: 
    Given Go to the login page

  Scenario: Login in sub-domain successfull
    When Login with "organization01@yopmail.com" and "87654321"
    Then Verrify URL

  Scenario: Login in sub-domain fail
    When Login with data
      | email                            | password | message                                                                                                                      |
      |                                  |          | This information is required.                                                                                                |
      | organization01                   | 12345678 | Please enter a valid email address (e.g. someone@example.com).                                                               |
      | mail-not-exit@mailinator.com     | 12345678 | Sorry, your email address is not associated with any account. Please contact your school for assistance.                     |
      | user-lock-only@mailinator.com    | 12345678 | You are requested to reset your password. Please check your user-lock-only@mailinator.com inbox for the password reset link. |
      | user-pending-only@mailinator.com | 12345678 | Check your user-pending-only@mailinator.com inbox for an invitation link to join the domain.                                 |
      | organization01@yopmail.com       | 12345679 | The email address or password is incorrect. Please try again.                                                                |
