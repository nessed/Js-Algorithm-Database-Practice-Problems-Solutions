const assert = require('node:assert')
const  {validAnagram2 } = require('./anagramchecker2ndsolution-o(n)')
const test = require('node:test')

test('checking anagram', () => {
const actual = validAnagram2("hello","hello")
const expected = true
assert.strictEqual(actual,expected)
})