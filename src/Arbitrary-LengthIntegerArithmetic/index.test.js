const assert = require("assert")
const { add, subtract, multiply, divide } = require("./index.js")

describe("Tests", () => {
  describe("Small numbers:", () => {
    it("Small numbers", () => {
      assert.strictEqual(add("0", "1"), "1")
      assert.strictEqual(add("1", "0"), "1")
      assert.strictEqual(add("1", "1"), "2")
      assert.strictEqual(add("123", "321"), "444")

      // assert.strictEqual(subtract("10", "9"), "1")
      // assert.strictEqual(subtract("45", "45"), "0")
    })

    it("Large Numbers", () => {
      assert.strictEqual(
        add("12345678901234567890", "12345678901234567890"),
        "24691357802469135780"
      )

      // assert.strictEqual(
      //   subtract("24691357802469135780", "12345678901234567890"),
      //   "12345678901234567890"
      // )
    })

    // assert.strictEqual(multiply("0", "0"), "0")
    // assert.strictEqual(multiply("1", "0"), "0")
    // assert.strictEqual(multiply("0", "1"), "0")
    // assert.strictEqual(multiply("1", "1"), "1")
    // assert.strictEqual(multiply("123", "123"), "15129")
    // assert.strictEqual(
    //   multiply("12345678901234567890", "12345678901234567890"),
    //   "152415787532388367501905199875019052100"
    // )

    // assert.strictEqual(divide("1", "1"), "1")
    // assert.strictEqual(divide("2", "1"), "2")
    // assert.strictEqual(divide("3", "2"), "1")
    // assert.strictEqual(divide("4", "5"), "0")
    // assert.strictEqual(divide("100", "11"), "9")
    // assert.strictEqual(
    //   divide("24691357802469135780", "12345678901234567890"),
    //   "2"
    // )
  })
})
