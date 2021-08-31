function findOutlier(integers) {
  let odds = 0
  let evens = 0

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evens++
    } else {
      odds++
    }
  }
  let modulo = odds < evens ? 0 : 1

  return integers.filter((item) => Math.abs(item) % 2 !== modulo).pop()
}

module.exports = findOutlier
