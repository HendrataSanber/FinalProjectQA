@regression @tdd
Feature: Kasir Aja Login Tests with TDD
    @all @negative
    Scenario Outline: Login with invalid credentials
        Given I on kasir aja login page
        When I login with <email> and <password>
        Then I should see an error <message>

            Examples:
            | email            | password      | message                            |
            | <invalidEmail>   | hendrakasir   | "email" must be a valid email      |
            |                  | hendrakasir   | "email" is not allowed to be empty |
            | hendra@kasir.com | passwordsalah | Kredensial yang Anda berikan salah |
    @all @positive @smoke
    Scenario: Login successfully with valid credentials
        Given I on kasir aja login page
        When I login with valid credentials
        Then I redirect to dashboard page
