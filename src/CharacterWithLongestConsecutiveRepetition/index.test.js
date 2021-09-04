const assert = require("assert")
const longestRepetition = require(".")

describe("Longest repetition", () => {
  it("Example tests", function () {
    assert.deepStrictEqual(longestRepetition("aaaabb"), ["a", 4])
    assert.deepStrictEqual(longestRepetition("bbbaaabaaaa"), ["a", 4])
    assert.deepStrictEqual(longestRepetition("cbdeuuu900"), ["u", 3])
    assert.deepStrictEqual(longestRepetition("abbbbb"), ["b", 5])
    assert.deepStrictEqual(longestRepetition("aabb"), ["a", 2])
    assert.deepStrictEqual(longestRepetition(""), ["", 0])
    assert.deepStrictEqual(longestRepetition("ba"), ["b", 1])
  })
})
