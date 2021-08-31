const assert = require("assert")
const longest = require(".")

describe("longest", function () {
  it("Basic tests", function () {
    assert.strictEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    assert.strictEqual(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    )
    assert.strictEqual(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    )
  })
})
