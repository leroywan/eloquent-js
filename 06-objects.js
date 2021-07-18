/*
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Build a Set without using a hashmap
class Group {
  constructor() {
    this._items = [];
  }

  static from(arr) {
    const group = new Group();
    for (const item of arr) {
      if (group.has(item)) {
        continue;
      }
      group.add(item);
    }

    return group;
  }

  add(item) {
    if (!this.has(item)) {
      this._items.push(item);
    }
  }

  has(item) {
    return this._items.indexOf(item) > -1;
  }

  delete(item) {
    const index = this._items.indexOf(item);
    if (index === -1) {
      return;
    }

    this._items.splice(index, 1);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Fix this weird code
let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
