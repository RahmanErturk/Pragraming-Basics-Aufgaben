function hasCertainValue (array, key, value) {
  return array.every((elem) => elem[key] === value);
}

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];

console.log(hasCertainValue(arr, "title", "Instructor")); // true
console.log(hasCertainValue(arr, "first", "Elie")); // false