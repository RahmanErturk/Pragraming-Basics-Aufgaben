// Aufgabe for loops

// 1
let ergebnis1 = 0;
for (let i = 1; i < 21; i++){
  ergebnis1 += i
  console.log(ergebnis1);
}

// 2
for (let i = 1; i < 6; i++){
  if(i === 1){
    console.log("There is 1 bottle of beer on the wall.")
    continue;
  } 
  console.log(`There are ${i} bottles of beer on the wall.`)
}

// 3
for (let i = 0; i < 21; i++){
  if(i % 2 === 0){
    console.log(`${i} is even.`);
  } else {
    console.log(`${i} is odd.`);
  }
}

// 4
let result4 = 1;
for (let i = 0; i < 11; i++){
  result4 = i * 9;
  console.log(`${i} * 9 = ${result4}`);
}

// 4: Bonus
for (let i = 1; i < 11; i++) {
  for(zahl = 1; zahl < 11; zahl++){
    console.log(`${i} * ${zahl} = ${i * zahl}`);
  }
}

// 5
for (let i = 1; i < 101; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if (i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 6 
let result6 = 0;
for (let i = 1; i < 1001; i++){
  if(i % 3 === 0 && i % 5 === 0) {
    result6 += i
  }
}
console.log(result6)

// 7
// 7_1
let result7_1 = "";
for (let i = 100; i <= 1000; i+=100){
  result7_1 += i + " ";
}
console.log(result7_1);


// 7_2
let result7_2 = " ";
for (let i = 0; i <= 10; i+=2){
  result7_2 += i + " ";
}
console.log(result7_2);

// 7_3
let result7_3 = " ";
for (let i = 3; i <= 15; i+=3){
  result7_3 += i + " ";
}
console.log(result7_3);

// 7_4
let result7_4 = " ";
for (let i = 9; i >= 0; i--){
  result7_4 += i + " ";
}
console.log(result7_4);

// 7_5
let result7_5 = " ";
for (let i = 111; i <= 444; i+=111){
  result7_5 += i + " ";
}
console.log(result7_5);

// 7_6
let result7_6 = " ";
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 5; j++) {
    result7_6 += j + " ";
  }
}
console.log(result7_6);

// 8
let wordToCheck = "abcdedcba";
let reversedWord = "";
for (let i = wordToCheck.length - 1; i >= 0; i--) {
  reversedWord += wordToCheck[i];
}

if (wordToCheck === reversedWord) {
  console.log(wordToCheck, "ist ein Palindrom");
} else {
  console.log(wordToCheck, "ist kein Polindrom");
}