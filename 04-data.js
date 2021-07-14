// Q1: Write range(start, end, step?) and sum(arr)
function range(start, end, step=1) {
  if (step === 0) return []
  
  const arr = []
  let total = start
  for (let i=0; i<=Math.abs(end-start); i++) {
    arr.push(total)
    total += step
  }
  return arr
}

function sum(arr) {
  let total = 0
  for (const num of arr) {
    total += num
  }
  return total
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));


// Q2: Reversing an array in place
function reverseArray(arr){
  [left, right] = [0, arr.length-1]
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}

const a = [1, 2, 3, 4, 5]
reverseArray(a)
console.log(a)


// Q3: Question about building lists
function prepend(value, rest) {
  return {value, rest}
}

function arrayToList(arr) {
  function buildList(i=0) {
    if (i === arr.length-1) {
      return prepend(arr[i], null)
    } else {
      return prepend(arr[i], buildList(i+1))
    }
  }
  return buildList()
}

function listToArray(list) {
  if (list.rest === null) {
    return [list.value]
  } else {
    return [list.value, ...listToArray(list.rest)]
  }
}

function nth(list, n) {
  let index = 0
  const stack = [list]
  while (stack) {
    const currentList = stack.pop()
    if (index === n) {
      return currentList.value
    }
    stack.push(currentList.rest)
    index++
  }
}

console.log(listToArray(arrayToList([10,20,30])))
console.log(nth(arrayToList([10,20,30,40,50,60,70]), 5))


// Deep comparison
function deepEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  if (typeof obj1 !== 'object') {
    return obj1 === obj2
  }

  for (const key in obj1) {
    if (!(key in obj2)) {
      return false
    }
    if (!deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }
  return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
