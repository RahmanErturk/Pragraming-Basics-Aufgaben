// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.

let euroCountries = ["Germany", "France", "Spain", "Italy", "Netherlands"];
let asianCountries = ["China", "Japan", "Korea", "Mongolia", "Indonesia"]

euroCountries.push(...asianCountries);
console.log(euroCountries);

let worldCountries = [...asianCountries, ...euroCountries];
console.log(worldCountries);


// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

const wildAnimals = ["lion", "tiger", "leopard", "elephant", "giraffe"];
const copyWildAnimals = [...wildAnimals]
console.log(copyWildAnimals);


// 3. Find the Largest...
// Create a function to find the largest number in an array.
const myNumbers = [1, 5, 24, 456, 23452, 445, 32, 462, 245];

function largestNumber(number){
    return Math.max(...number);
}

console.log(largestNumber(myNumbers));


// 4. Find the Smallest
// Create a function to find the smallest number in an array.

function smallestNumber(number){
    return Math.min(...number);
}

console.log(smallestNumber(myNumbers));


// 5. Clone and Merge
// Given two objects:

const person = {name: "John"}
const job = {role: "Teacher"}

// 5.1 Clone the person object.
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// 5.3 Then change the values of the properties in the employee object.

const copyPerson = {...person}

const employee = {
    ...person,
    ...job
};

employee.name = "Rahman"
employee.role = "web developer"
console.log("Person", person, "Job", job, "Employee", employee)

// Aufgabe 2

// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.

console.log("------1. Array Destructuring-----------");
const fruit = ["banana"];
const vegetable = ["cucumber"];
const food = ["bread", "cake ", "pizza"];
console.log(...fruit, ...vegetable, ...food);

// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.
console.log("----2---");
const halloween = {
  fran: "witch",
  vaso: "thom",
  panos: "Zmp",
};
const { fran, vaso, panos } = halloween;
console.log(fran, vaso, panos);

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.

const band = {
    name: "Regina Spektor",
    "Greatest Hit": "Us",
    nationality: "American-Russian",
    genre: "indie-pop",
    job: "singer/songwriter and pianist"
}

function musicianData(musician){
    return `${musician.name} is a ${musician.nationality} ${musician.job}. The musician sings ${musician.genre} and their greatest hit is ${musician["Greatest Hit"]}.`
}

console.log(musicianData(band))



