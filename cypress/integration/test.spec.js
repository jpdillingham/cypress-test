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
