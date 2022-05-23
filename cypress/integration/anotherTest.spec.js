describe("top-level suite in suite file", { tags: ['#tag', '@team'] }, () => {
  it("captures @teams from #config", () => {
    // expected teams: @team,@teams
    // tags: #tag,#config
    expect(true).to.equal(false);
  });
});
