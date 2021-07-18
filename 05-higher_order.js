import { SCRIPTS } from "./data/scripts.js";

// Flatten an array
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((arr, acc) => [...arr, ...acc]));

// Write a loop function
function loop(i, test, update, body) {
  let val = i;
  while (test(val)) {
    body(val);
    val = update(val);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

// Write an 'every' function
function every(arr, filter) {
  let out = true;
  for (let item of arr) {
    out = out && filter(item);
  }
  return out;
}

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));

// Dominant writing direction

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  const scripts = [];
  for (const char of text) {
    const charScript = characterScript(char.charCodeAt());
    if (!charScript) {
      continue;
    }
    scripts.push(charScript);
  }
  const count = countBy(scripts, (script) => script.direction);
  count.sort((x) => x.count);
  return count[count.length - 1].name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
