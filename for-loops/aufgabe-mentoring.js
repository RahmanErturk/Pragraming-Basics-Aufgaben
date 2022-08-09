// Aufgabe-1: sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

console.log("---------- Frage-1 ----------");

const numbers = [107, 203, 45, 78];

let sum = 0;
for (let i = 0; i<numbers.length; i++){
    sum += numbers[i];
}

console.log(`The sum of ${numbers.length} numbers: ${sum}`);

// Hello Frien. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
// Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".

console.log("---------- Frage-2 ----------");

const myFamily = ["Murat", "Dönüs", "Resul", "Rümeysa Nur", "Ayse", "Anil Ege"];

let gruessMyFamily = "";

for (let i = 0; i < myFamily.length; i++){
    gruessMyFamily += "Hallo " + myFamily[i] + ", ";
    // console.log("Hello", myFamily[i]);
    // // console.log(`${myFamily[i]} is at index ${i} of my family array`);
}

console.log(gruessMyFamily);

// City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".

console.log("---------- Frage-3 ----------");

const cities = ["Berlin", "Paris", "Prague", "Rome"];

let citiesString = "";
for (let i = 0; i < cities.length; i++){
    citiesString += cities[i] + ", "
}

console.log(citiesString);

// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]






// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
// Note: Keep names in the same order and make sure that only the first letter of the name is capitalised (See "Maria" in the second above example).






// No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]