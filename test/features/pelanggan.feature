@regression
Feature: Kasir Aja Pelanggan Tests
    @all @positive @smoke
    Scenario: Add pelanggan with valid input
        Given I on pelanggan page with login
        When I input with valid input
        Then I see success message
    @all @negative
    Scenario: Add pelanggan with invalid phone
        Given I on kasir aja pelanggan
        When I input with invalid phone
        Then I see an error phone must be a number
    @all @negative
    Scenario: Add pelanggan with empty name
        Given I on kasir aja pelanggan
        When I input with empty name
        Then I see an error name not allowed empty
