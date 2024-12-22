@regression
Feature: Kasir Aja Kategori Tests
    @all @positive @smoke
    Scenario: Add kategori with valid input
        Given I on kategori with login
        When I input with valid input
        Then I see success message
    @all @negative
    Scenario: Add kategori with empty name
        Given I on kasir aja kategori
        When I input with empty name
        Then I see an error name not allowed empty
