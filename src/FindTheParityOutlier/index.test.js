const assert = require("assert")
const findOutlier = require("./index.js")

describe("Find The Parity Outlier", () => {
  it("should equal", () => {
    assert.strictEqual(findOutlier([0, 1, 2]), 1)
    assert.strictEqual(findOutlier([1, 2, 3]), 2)
    assert.strictEqual(findOutlier([2, 6, 8, 10, 3]), 3)
    assert.strictEqual(findOutlier([0, 0, 3, 0, 0]), 3)
    assert.strictEqual(findOutlier([1, 1, 0, 1, 1]), 0)
    assert.strictEqual(
      findOutlier([
        11349581, -84543491, -117957156, 37750621, 146614957, -144870573,
        42607461, 186669757, -51503657, -145369217, 110961963, -47556269,
        -99981755, -21286015, -8020363, -33487673,
      ]),
      -117957156
    )
  })
})
