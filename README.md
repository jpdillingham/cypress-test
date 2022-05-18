# cypress-test

```js
describe("top-level suite in suite file", () => {
  it("captures teams from config", { tags: ["#smoke", "#tag"], teams: ["@team1", "@team2"] }, () => {
    // expected teams: @team1,@team2
    // tags: #smoke,#tag
    expect(true).to.equal(false);
  });

  describe("what", { teams: ["@suite_team"] }, () => {
    describe("about", () => {
      describe("nested suites?", () => {
        it("do teams added to the suite get copied to tests?", () => {
          // expected teams: @suite_team
          expect(true).to.equal(false);
        });

        it("can it detect @someteam mentions in descriptions? @anotherteam", () => {
          // expected teams: @someteam,@anotherteam,@suite_team
          expect(true).to.equal(false);
        });

        it("what happens to suite teams if a test config also has teams?", { teams: ["@team3", "@team4"] }, () => {
          // expected teams: @team3,@team4
          expect(true).to.equal(false);
        });

        it("and what about tests that define multiple teams in a string?", { tags: "#foo, #bar", teams: "@teamA, @teamB" }, () => {
          // expected teams: @teamA,@teamB
          expect(true).to.equal(false);
        });
      });
    });
  });
});
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="1.9920" tests="5" failures="5">
  <testsuite name="Root Suite" timestamp="2022-05-18T18:44:01" tests="0" file="cypress/integration/test.spec.js"
    time="0.0000" failures="0">
  </testsuite>
  <testsuite name="top-level suite in suite file" timestamp="2022-05-18T18:44:01" tests="1"
    file="cypress/integration/test.spec.js" time="0.0000" failures="1">
    <testcase name="top-level suite in suite file captures teams from config" time="0.0000"
      classname="captures teams from config" failed="true" tags="#smoke,#tag" teams="@team1,@team2">
      <failure message="expected true to equal false" type="AssertionError">
        <![CDATA[AssertionError: expected true to equal false
    at Context.eval (http://localhost:52417/__cypress/tests?p=cypress/integration/test.spec.js:106:21)]]>
      </failure>
    </testcase>
  </testsuite>
  <testsuite name="what" timestamp="2022-05-18T18:44:02" tests="0" file="cypress/integration/test.spec.js" time="0.0000"
    failures="0">
  </testsuite>
  <testsuite name="about" timestamp="2022-05-18T18:44:02" tests="0" file="cypress/integration/test.spec.js"
    time="0.0000" failures="0">
  </testsuite>
  <testsuite name="nested suites?" timestamp="2022-05-18T18:44:02" tests="4" time="1.3790"
    file="cypress/integration/test.spec.js" failures="4">
    <testcase
      name="top-level suite in suite file what about nested suites? do teams added to the suite get copied to tests?"
      time="0.0000" classname="do teams added to the suite get copied to tests?" failed="true" tags=""
      teams="@suite_team">
      <failure message="expected true to equal false" type="AssertionError">
        <![CDATA[AssertionError: expected true to equal false
    at Context.eval (http://localhost:52417/__cypress/tests?p=cypress/integration/test.spec.js:115:27)]]>
      </failure>
    </testcase>
    <testcase
      name="top-level suite in suite file what about nested suites? can it detect @someteam mentions in descriptions? @anotherteam"
      time="0.0000" classname="can it detect @someteam mentions in descriptions? @anotherteam" failed="true" tags=""
      teams="@someteam,@anotherteam,@suite_team">
      <failure message="expected true to equal false" type="AssertionError">
        <![CDATA[AssertionError: expected true to equal false
    at Context.eval (http://localhost:52417/__cypress/tests?p=cypress/integration/test.spec.js:119:27)]]>
      </failure>
    </testcase>
    <testcase
      name="top-level suite in suite file what about nested suites? what happens to suite teams if a test config also has teams?"
      time="0.0000" classname="what happens to suite teams if a test config also has teams?" failed="true" tags=""
      teams="@team3,@team4">
      <failure message="expected true to equal false" type="AssertionError">
        <![CDATA[AssertionError: expected true to equal false
    at Context.eval (http://localhost:52417/__cypress/tests?p=cypress/integration/test.spec.js:125:27)]]>
      </failure>
    </testcase>
    <testcase
      name="top-level suite in suite file what about nested suites? and what about tests that define multiple teams in a string?"
      time="0.0000" classname="and what about tests that define multiple teams in a string?" failed="true"
      tags="#foo,#bar" teams="@teamA,@teamB">
      <failure message="expected true to equal false" type="AssertionError">
        <![CDATA[AssertionError: expected true to equal false
    at Context.eval (http://localhost:52417/__cypress/tests?p=cypress/integration/test.spec.js:132:27)]]>
      </failure>
    </testcase>
  </testsuite>
</testsuites>
```