Feature:Api Test
    Scenario Outline: Making a simple GET request
        When I make a GET request to "/books/<id>"
        Then The response property "id" should be "<id>"
        Then  The response property "name" should be "<name>"
        Then  The response property "auther" should be "<auther>"
        Then  The response property "content" should be "<content>"
        Examples:
            | id                                   | name  | auther  | content |
            | c5649616-042c-4c74-8c0a-5714bb4716fa | reddf | qwqwqww | a       |

    Scenario Outline: Making a simple POST request
        When I make a POST request to "/books" with variables as <name> <auther> <content>
        Then Should get a message "Added Successfully"

