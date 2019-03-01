var {expect} = require('chai');
var {Contest} = require('../src/contest.js');
describe("contest", function() {

  it("shows a passed test", function() {
    const contest = new Contest();
    expect(contest.method()).to.equal(true);
  });

});
