$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/katea/Katalon Studio/My First BDD Project/Include/features/operations/Login.feature");
formatter.feature({
  "name": "User Login on Bigshop.md",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User logs in to Bigshop.md with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user opens the browser and navigates to \"https://bigshop.md/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks on the user icon",
  "keyword": "When "
});
formatter.step({
  "name": "the user navigates to the login page at \"https://bigshop.md/ro/auth/login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enters their \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the user icon present on the page",
  "keyword": "Then "
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "the user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "375447522509@mail.ru",
        "RigbBhfdqODKcAsiUrg+1Q\u003d\u003d"
      ]
    },
    {
      "cells": [
        "3759@mail.ru",
        "RigbBhfdqOBDK95asqKeHw\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logs in to Bigshop.md with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user opens the browser and navigates to \"https://bigshop.md/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.openBrowserAndNavigateTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the user icon",
  "keyword": "When "
});
formatter.match({
  "location": "Login.clickUserIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to the login page at \"https://bigshop.md/ro/auth/login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.navigateToLoginPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters their 375447522509@mail.ru and RigbBhfdqODKcAsiUrg+1Q\u003d\u003d",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enterCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the user icon present on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verifyUserIconPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User logs in to Bigshop.md with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user opens the browser and navigates to \"https://bigshop.md/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.openBrowserAndNavigateTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the user icon",
  "keyword": "When "
});
formatter.match({
  "location": "Login.clickUserIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to the login page at \"https://bigshop.md/ro/auth/login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.navigateToLoginPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters their 3759@mail.ru and RigbBhfdqOBDK95asqKeHw\u003d\u003d",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enterCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the user icon present on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verifyUserIconPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
});