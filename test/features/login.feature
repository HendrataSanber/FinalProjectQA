@regression
Feature: Saucedemo Login Tests

    @all @positive @smoke
    Scenario: Login successfully with valid credentials
        Given I open Saucedemo website
        When I login with valid credentials
        Then I should be on the inventory page
    
    @all @negative
    Scenario: Verify Login failed with invalid username
        Given I open Saucedemo website
        When I login with invalid username
        Then I should see an error message

    @all @negative
    Scenario: Verify Login failed with invalid password
        Given I open Saucedemo website
        When I login with invalid password
        Then I should see an error message
