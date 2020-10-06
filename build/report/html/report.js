$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/loginParameterization.feature");
formatter.feature({
  "line": 1,
  "name": "To test the login feature of facebook",
  "description": "",
  "id": "to-test-the-login-feature-of-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User is entering correct credentials",
  "description": "",
  "id": "to-test-the-login-feature-of-facebook;user-is-entering-correct-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is now on the home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "to-test-the-login-feature-of-facebook;user-is-entering-correct-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "to-test-the-login-feature-of-facebook;user-is-entering-correct-credentials;;1"
    },
    {
      "cells": [
        "7205574865",
        "9304133712"
      ],
      "line": 9,
      "id": "to-test-the-login-feature-of-facebook;user-is-entering-correct-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "User is entering correct credentials",
  "description": "",
  "id": "to-test-the-login-feature-of-facebook;user-is-entering-correct-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters 7205574865 and 9304133712 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is now on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_is_on_the_landing_page()"
});
formatter.result({
  "duration": 9823930685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7205574865",
      "offset": 12
    },
    {
      "val": "9304133712",
      "offset": 27
    }
  ],
  "location": "StepDefinitionClass.user_enters_and_credentials(String,String)"
});
formatter.result({
  "duration": 999891298,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionClass.user_is_now_on_the_home_page()"
});
formatter.result({
  "duration": 7700223095,
  "status": "passed"
});
});