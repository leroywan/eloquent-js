// Write a function min that takes two arguments and returns their minimum.
function min(a, b) {
  return a < b ? a : b
}

function minMulti(...nums) {
  if (!nums.length) {
    throw Error()
  }

  let minNum = Infinity
  for (const num of nums) {
    if (num < minNum) {
      minNum = num
    }
  }
  return minNum
}

console.log(min(0, 10))
console.log(min(0, -10))
// console.log(minMulti())
console.log(minMulti(1,3,2,1,4,5,-10))


/*
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

function isEven(num) {
  const posNum = Math.abs(num)
  if (posNum === 0) {
    return true
  } else if (posNum === 1) {
    return false
  } else {
    return isEven(posNum-2)
  }
}

/*
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/

function countChar(s, target) {
  let count = 0
  for (const char of s) {
    if (char === target) {
      count++
    }
  }
  return count
}

function countBs(s) {
  return countChar(s, 'B')
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"))
