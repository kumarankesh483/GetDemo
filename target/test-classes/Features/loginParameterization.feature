Feature: To test the login feature of facebook
Scenario Outline: User is entering correct credentials
Given User is on the landing page
When user enters <username> and <password> credentials
Then user is now on the home page

Examples:
|username|password|
|7205574865|9304133712|