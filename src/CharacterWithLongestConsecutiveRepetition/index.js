function longestRepetition(s) {
  if (!s.length) return ["", 0]
  return s
    .match(/([a-zA-Z0-9])\1*/g)
    .reduce(
      (prev, curr) =>
        prev[1] >= curr.length ? prev : [curr.charAt(0), curr.length],
      ["", 0]
    )
}

console.log(longestRepetition("aabb"))

module.exports = longestRepetition
