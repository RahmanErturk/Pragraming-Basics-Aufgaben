function colorPatternTimes(array) {
  let sekunden = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] !== array[i]) {
      sekunden++;
    }
  }
  return sekunden + array.length * 2;
}

console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
console.log(colorPatternTimes(["Blue"]));
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));
