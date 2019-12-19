Feature:Api Test
    Scenario: Making a simple GET request
        When I make a GET request to "/books/0287b559-524d-405e-bcfc-11c0455317ab"
        Then The response property "id" should be "0287b559-524d-405e-bcfc-11c0455317ab"
        Then  The response property "name" should be "testname"
        Then  The response property "auther" should be "testauther"
        Then  The response property "content" should be "testcontent"

    Scenario: Making a simple POST request
        When I make a POST request to "/books" with variables as "testname" "testauther" "testcontent"
        Then Should get a message "Added Successfully"

