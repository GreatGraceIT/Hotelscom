$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotels.feature");
formatter.feature({
  "line": 2,
  "name": "Hotels feature",
  "description": "",
  "id": "hotels-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@hotels"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select property class \u003cstars\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify system displays only \u003cstars\u003e hotels on search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;",
  "rows": [
    {
      "cells": [
        "stars"
      ],
      "line": 11,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;1"
    },
    {
      "cells": [
        "5 stars"
      ],
      "line": 12,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2"
    },
    {
      "cells": [
        "4 stars"
      ],
      "line": 13,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3"
    },
    {
      "cells": [
        "3 stars"
      ],
      "line": 14,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9039825175,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.iAmOnHotelsHomePage()"
});
formatter.result({
  "duration": 1326598233,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@hotels"
    },
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 5,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select property class 5 stars",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify system displays only 5 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsSD.setCityTextField()"
});
formatter.result({
  "duration": 5849652524,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"cta cta-strong\"\u003e...\u003c/button\u003e is not clickable at point (436, 523). Other element would receive the click: \u003cdiv class\u003d\"autosuggest-category-result\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027GULSAH-Air.home\u0027, ip: \u0027fe80:0:0:0:18fb:af1b:c33e:24c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/b8/kmhgp5hn22s...}, goog:chromeOptions: {debuggerAddress: localhost:54306}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 733d9a583242b3916a89ed4e99b12ecf\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat runnerTest.webPages.ElementUtil.clickOn(ElementUtil.java:53)\n\tat runnerTest.webPages.HotelsPage.setCityTextField(HotelsPage.java:49)\n\tat stepdefinition.HotelsSD.setCityTextField(HotelsSD.java:22)\n\tat ✽.Given I am on default locations search result screen(Hotels.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 stars",
      "offset": 24
    }
  ],
  "location": "HotelsSD.selectStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5 stars",
      "offset": 30
    }
  ],
  "location": "HotelsSD.verifyDisplaysStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2952044837,
  "status": "passed"
});
formatter.before({
  "duration": 6343392597,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.iAmOnHotelsHomePage()"
});
formatter.result({
  "duration": 1780784102,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@hotels"
    },
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 5,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select property class 4 stars",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify system displays only 4 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsSD.setCityTextField()"
});
formatter.result({
  "duration": 8022873078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 stars",
      "offset": 24
    }
  ],
  "location": "HotelsSD.selectStars(String)"
});
formatter.result({
  "duration": 1261879029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 stars",
      "offset": 30
    }
  ],
  "location": "HotelsSD.verifyDisplaysStars(String)"
});
formatter.result({
  "duration": 974035684,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cSystem displays incorrectly 4 stars\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepdefinition.HotelsSD.verifyDisplaysStars(HotelsSD.java:46)\n\tat ✽.Then I verify system displays only 4 stars hotels on search result(Hotels.feature:9)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 3431815449,
  "status": "passed"
});
formatter.before({
  "duration": 4083991469,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.iAmOnHotelsHomePage()"
});
formatter.result({
  "duration": 25709561,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@hotels"
    },
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 5,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select property class 3 stars",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify system displays only 3 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsSD.setCityTextField()"
});
formatter.result({
  "duration": 5576851093,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"cta cta-strong\"\u003e...\u003c/button\u003e is not clickable at point (436, 523). Other element would receive the click: \u003cdiv class\u003d\"autosuggest-category-result\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027GULSAH-Air.home\u0027, ip: \u0027fe80:0:0:0:18fb:af1b:c33e:24c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/b8/kmhgp5hn22s...}, goog:chromeOptions: {debuggerAddress: localhost:54643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 258ce74e2343b36485d9e54ee9a4649e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat runnerTest.webPages.ElementUtil.clickOn(ElementUtil.java:53)\n\tat runnerTest.webPages.HotelsPage.setCityTextField(HotelsPage.java:49)\n\tat stepdefinition.HotelsSD.setCityTextField(HotelsSD.java:22)\n\tat ✽.Given I am on default locations search result screen(Hotels.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 stars",
      "offset": 24
    }
  ],
  "location": "HotelsSD.selectStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 stars",
      "offset": 30
    }
  ],
  "location": "HotelsSD.verifyDisplaysStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2479654925,
  "status": "passed"
});
formatter.before({
  "duration": 4553921751,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.iAmOnHotelsHomePage()"
});
formatter.result({
  "duration": 113489293,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "List of all of hotel within 10 miles radius of airport or downtown",
  "description": "",
  "id": "hotels-feature;list-of-all-of-hotel-within-10-miles-radius-of-airport-or-downtown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@hotels-2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I verify system displays all hotels within 10 miles radius of airport",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify Hilton Hotel is within 10 miles radius of downtown",
  "keyword": "And "
});
formatter.match({
  "location": "HotelsSD.setCityTextField()"
});
formatter.result({
  "duration": 7557926374,
  "status": "passed"
});
formatter.match({
  "location": "HotelsSD.verifyDisplaysRadiusAirport()"
});
formatter.result({
  "duration": 14281720268,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cSystem not displays all hotels within 10 miles radius of airport\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepdefinition.HotelsSD.verifyDisplaysRadiusAirport(HotelsSD.java:56)\n\tat ✽.Then I verify system displays all hotels within 10 miles radius of airport(Hotels.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hilton Hotel",
      "offset": 9
    }
  ],
  "location": "HotelsSD.verifyDisplaysRadiusDowntown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 2580340535,
  "status": "passed"
});
});