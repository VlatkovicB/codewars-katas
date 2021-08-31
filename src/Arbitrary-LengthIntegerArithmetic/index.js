function numberOrZeroIfNaN(number) {
  return !isNaN(Number(number)) ? Number(number) : 0
}

function add(first, second) {
  const firstLegth = first.length
  const secondLength = second.length
  let length = firstLegth > secondLength ? firstLegth : secondLength
  let result = ""
  let leftOver = 0

  for (let i = 0; i < length; i++) {
    const firstNumber = numberOrZeroIfNaN(first[firstLegth - i - 1])
    const secondNumber = numberOrZeroIfNaN(second[secondLength - i - 1])

    let sum = Number(leftOver) + firstNumber + secondNumber

    if (String(sum).length > 1) {
      leftOver = Number(String(sum)[0])
      sum = Number(String(sum)[1])
    } else {
      leftOver = 0
    }

    result += sum
  }

  return result.split("").reverse().join("")
}

// console.log(add("1234", "1"))

function subtract(first, second) {
  const firstLegth = first.length
  const secondLength = second.length
  let length = firstLegth > secondLength ? firstLegth : secondLength
  let result = ""
  let leftOver = 0

  for (let i = 0; i < length; i++) {
    let firstNumber = numberOrZeroIfNaN(first[firstLegth - i - 1])
    let secondNumber = numberOrZeroIfNaN(second[secondLength - i - 1])

    let sum = 0

    if (firstNumber < secondNumber) {
      leftOver = 1
      sum = firstNumber + 10 - secondNumber
    } else {
      sum = firstNumber - secondNumber - leftOver
      leftOver = 0
    }

    console.log(sum)
    result += sum
  }

  return result.split("").reverse().join("")
}

console.log(subtract("24691357802469135780", "12345678901234567890"))

function multiply(multiplicand, multiplier) {
  // Rewrite this to support at least 100 digits
  var product = Number(multiplicand) * Number(multiplier)
  return String(product)
}

function divide(dividend, divisor) {
  // Rewrite this to support at least 100 digits
  var quotient = Number(dividend) / Number(divisor)
  return String(quotient)
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
}
