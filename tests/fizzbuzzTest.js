var chai = require('chai');
var expect = require('chai').expect;
var fizzbuzz = require(__dirname + '/../fizzbuzz.js');

describe('fizzbuzz', function() {
  it('fizz when number is divisible by 3', function() {
    expect(fizzbuzz(3)).to.equal('fizz');
  });

  it('buzz when number is divisible by 5', function() {
    expect(fizzbuzz(5)).to.equal('buzz');
  });

  it('fizzbuzz when number is divisible by 3 and 5', function() {
    expect(fizzbuzz(15)).to.equal('fizzbuzz');
  });

  it('returns any other number', function() {
    expect(fizzbuzz(2)).to.equal(2);
  });

  it('returns a message if not a number', function() {
    expect(fizzbuzz('string')).to.equal('string is not a number');
  });

});
