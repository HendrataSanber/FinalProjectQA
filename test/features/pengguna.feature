@regression
Feature: Kasir Aja Pengguna Tests
    @all @positive @smoke
    Scenario: Add pengguna with valid input
        Given I on pengguna with login
        When I input with valid input
        Then I see success message
    @all @negative
    Scenario: Add pengguna with invalid email
        Given I on kasir aja pengguna
        When I input with invalid email
        Then I see error invalid email
    @all @negative
    Scenario: Add pengguna with empty name
        Given I on kasir aja pengguna
        When I input with empty name
        Then I see an error name not allowed empty
