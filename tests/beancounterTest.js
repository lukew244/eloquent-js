var chai = require('chai');
var expect = require('chai').expect;
var beancounter = require(__dirname + '/../beancounter.js');

describe('beancounter', function() {
  it('counts the number of a given letter in a string', function() {
    expect(beancounter('aBBBa', 'B')).to.equal(3);
    expect(beancounter('bee', 'e')).to.equal(2);
  });
});
