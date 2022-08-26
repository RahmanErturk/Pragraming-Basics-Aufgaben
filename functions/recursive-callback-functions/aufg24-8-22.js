// Callback

// Aufgabe 1


function greetMessage(name) {
    return `Guten Morgen, ${name}`;
}

function greetUsers(arr, fn) {
    return arr.forEach(element => {
        console.log(fn(element));
    });
}
greetUsers(["John", "Peter", "Mark"], greetMessage);


// Aufgabe 2

const array = [1, 2, 3, 4];

const getSquaredNumber = (zahl) => console.log(zahl * zahl);

const getSquaredNumberFromArray = (arr, fn) => {
    return arr.forEach((element) => fn(element))
}

getSquaredNumberFromArray(array, getSquaredNumber);

// Recursion

// Aufgabe 1

const array = [1, 2, 3, 4, 5, 6]
const length = array.length

function getSumOfArray(arr, length) {
    if(length <= 0) return 0;
    return (getSumOfArray(arr, length - 1) + arr[length - 1]); 
}

// console.log(getSumOfArray(array, length));

// alternative Lösung

function getSumOfArray(arr) {
    if(arr.length === 0) return 0;
    return arr[0] + getSumOfArray(arr.slice(1))
}

console.log(getSumOfArray(array));

// Aufgabe 2


const hello = "hello world";
function reverse (str) {
    if (str === "") {
        return "";
    } else {
    return reverse(str.substr(1)) + str.charAt(0);
    }
}


console.log(reverse(hello)) // dlrow olleh 