describe("top-level suite in suite file", { tags: '#tag', teams: '@team'}, () => {
  it("captures @teams from #config", () => {
    // expected teams: @team,@teams
    // tags: #tag,#config
    expect(true).to.equal(false);
  });
});
