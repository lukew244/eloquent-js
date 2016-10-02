var chai = require('chai');
var expect = require('chai').expect;
var beancounter = require(__dirname + '/../beancounter.js');

describe('beancounter', function() {
  it('counts the number of Bs in a string', function() {
    expect(beancounter('aBBBa')).to.equal(3);
  });
});
