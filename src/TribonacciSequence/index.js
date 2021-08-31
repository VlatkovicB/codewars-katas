function tribonacci(signature = [], n) {
  if (n < 3) {
    signature.length = n
    return signature
  }

  if (n === 3) {
    return signature
  }

  let nextNumber =
    signature[signature.length - 1] +
    signature[signature.length - 2] +
    signature[signature.length - 3]

  signature.push(nextNumber)

  return tribonacci(signature, n - 1)
}

module.exports = tribonacci
