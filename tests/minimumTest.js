var chai = require('chai');
var expect = require('chai').expect;
var findMinimum = require(__dirname + '/../minimum.js');

describe('findMinimum', function() {
  it('finds the minimum from a range of numbers', function() {
      expect(findMinimum(4, 6, 3, 34)).to.equal(3);
  });
  it('works for negative numbers', function() {
      expect(findMinimum(4, -6, 3, -34)).to.equal(-34);
  });
});
