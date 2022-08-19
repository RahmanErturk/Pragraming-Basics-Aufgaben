// Aufgabe: Map, Filter, Reduce

// 1. Gesamtbestellungen abfragen

// Berechne die Gesamtzahl der Bestellungen.
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const summe = orders.reduce((prev, curr) => {
  return prev + curr.amount
}, 0)

console.log(summe);

// 2. Inkrementieren um 1
// Erstellen Sie eine Funktion, die jedes Element in arrayOfNumbers um 1 erhöht. Geben Sie das neue Array von modifizierten Elementen zurück.​

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const um1Inkrementieren = (param) => param.map((element) => element + 1);

console.log(um1Inkrementieren(arrayOfNumbers));

// 3. Gerade Zahlen filtern
// Erstellen Sie eine Funktion namens filterEvens, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array von Zahlen als Argument nehmen und keine Schleife verwenden.​

const myZahlen = [1, 2, 3, 11, 12, 13];
const myZahlen2 = [22, 2, 31, 110, 6, 13];

const filterEvens = (array) => array.filter((element) => element % 2 === 0)

console.log(filterEvens(myZahlen));
console.log(filterEvens(myZahlen2));

// 4. Freunde filtern
// Erstelle eine Funktion, die ein übergebenes Array nach einem "Suchbefehl" filtert.​

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterFriends = (array, str) => array.filter((array) => array.includes(str));

console.log(filterFriends(friends, "ka"));
console.log(filterFriends(friends, "e"));

// 5. Summe
// Schreiben Sie eine Funktion namens sum, die die Methode reduce verwendet, um ein Array von Zahlen zu summieren.​

const sum = (array) => array.reduce((prev, curr) => (prev + curr), 0)

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

// 6. Quadratwurzel 
// Schreibe eine Funktion die ein Array aus Numbers als Parameter erhält. Finde für jede Zahl die Quadratwurzel und gebe das neue Array zurück.

const numbers = [4, 16, 9, 25, 49, 625];

const quadratwurzel = (array) => array.map((element) => Math.sqrt(element));

console.log(quadratwurzel(numbers));