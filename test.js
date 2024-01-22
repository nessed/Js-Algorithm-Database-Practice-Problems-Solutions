const assert = require('node:assert')
const { sum } = require('./sum')
const test = require('node:test')
 
test('adding numbers', () => {
const actual = sum(1,2)
const expected = 3
assert.strictEqual(actual,expected)

}) 
//first assert is defined to compare two values
//sum is then required to bring in function
//how to run tests? import assert, function and node test
//make a test name it then make a a promise. place an 
//actual output whose value is determined by imported 
//function then compare it to expected value using assert
//if true then good test passed
