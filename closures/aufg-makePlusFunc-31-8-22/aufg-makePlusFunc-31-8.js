function makePlusFunction(num1) {
  const numberAdder = (num2) => num1 + num2;
  return numberAdder;
}

const plusFive = makePlusFunction(5);
// console.log(makePlusFunction(6)(4));
console.log(plusFive(2)); // returns 7
console.log(plusFive(-8)); // returns 3

const plusTen = makePlusFunction(10);
console.log(plusTen(0)); // returns 10
console.log(plusTen(188)); // returns 198
