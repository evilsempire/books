const defineSupportCode = require("cucumber").defineSupportCode;
const assert = require("assert");

defineSupportCode(function({ Given, When, Then }) {
  let answer = 0;

  Given("I start with {int}", function(input) {
    answer = input;
  });

  When("I multiply by {int}", function(input) {
    answer *= input;
  });

  Then("I end up with {int}", function(input) {
    assert.equal(input, answer);
  });
});
