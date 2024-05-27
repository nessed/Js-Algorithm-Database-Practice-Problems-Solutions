const assert = require("node:assert");
const { validAnagram2 } = require("./anagramchecker2ndsolution-o(n)");
const { describe, it } = require("node:test");

describe("anagramchecker", () => {
  it("checks for valid anagrams", () => {
    const actual = validAnagram2("hello", "ehllo");
    assert.strictEqual(actual, true);
  });

  it("checks for invalid anagram", () => {
    const actual = validAnagram2("hello", "hell");
    assert.equal(actual, false);
  });

  it("checking for undefined in string 1", () => {
    const actual = validAnagram2(undefined, "hello");
    assert.equal(actual, false);
  });
  it("checking for undefined in string 2", () => {
    const actual = validAnagram2("hello", undefined);
    assert.equal(actual, false);
  });
  it("checking for undefined in both", () => {
    const actual = validAnagram2(undefined, undefined);
    assert.equal(actual, false);
  });
  it("checking for null in string 1", () => {
    const actual = validAnagram2(null, "hello");
    assert.equal(actual, false);
  });
  it("checking for null in string 2", () => {
    const actual = validAnagram2("hello", null);
    assert.equal(actual, false);
  });
  it("empty strings", () => {
    const actual = validAnagram2("", "");
    assert.equal(actual, true);
  });

  it("handles numbers", () => {
    const actual = validAnagram2(21, "12");
    assert.equal(actual, false);
  });

  it("handles array", () => {
    const actual = validAnagram2(["hello"], "hello");
    assert.equal(actual, false);
  });
});
