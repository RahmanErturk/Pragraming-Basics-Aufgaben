// Objects: Teil 1
// Bitte drucke jede deiner Antworten auf der Konsole aus.
// 1. Objekt Person. Erstelle ein Objekt namens person. Führe eine Schleife durch das Objekt und drucke sowohl die Eigenschaft als auch den Wert der Propery aus.
// 2. Get Values. Erstelle eine Funktion, die ein Array mit allen Werten der Eigenschaften eines Objekts zurückgibt.

const person = {
    forname: "Rahman",
    surname: "Ertürk",
    age: 25,
    city: "Essen",
    education: "Law",
    job: "web developer",
}
console.log("----------");
for (const property in person){
    console.log(property, person[property]);
}
console.log("----------");
function getObjectValues(object){
    const objectValues = Object.values(object);
    return objectValues
}
console.log("----------");
console.log(getObjectValues(person))
console.log("----------");

// 3. Füge eine Methode hinzu. Erstelle ein Objekt und füge eine Methode zu diesem Objekt hinzu, die die Werte der Objekte in einer Zeichenkette ausgibt.

const person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    info: function(){
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}.`)
    }
}
console.log("----------");
person2.info()
console.log("----------");

// Bonusfragen
// 1. Konvertiere Schlüssel und Werte in ein Array. Erstelle eine Funktion, die ein Objekt in ein Array aus Schlüsseln und Werten umwandelt.

const objectToArray = {
    A: 1,
    B: 2,
    C: 3,
} 
function objectProperties(object){
    const propertiesInArr = Object.entries(object);
    return propertiesInArr;
}
console.log("----------");
console.log(objectProperties(objectToArray));
console.log("----------");
// 2. Eigenschaften auflisten. Erstelle eine Funktion, die ein Array von Eigenschaften eines Javascript-Objekts zurückgibt.

const student = {
    name: "Mike", 
    class: "4A", 
    course: "English",
}
function objectKeys(object){
    const studentKeysArr = Object.keys(object);
    return studentKeysArr;
}
console.log("----------");
console.log(objectKeys(student))
console.log("----------");

// 3. Verschmelzen. Erstelle eine Funktion, die zwei Objekte als Parameter nimmt und sie zu einem neuen Objekt zusammenführt.

let first = {firstName: "John"}
let last = {lastName: "Smith"}

//Lösung 1

function getNewObject(obj1, obj2){
    const newObject = {
        ...obj1,
        ...obj2
    }
    return newObject;
}
console.log("----------");
console.log(getNewObject(first, last));
console.log("----------");
//Lösung 2

function zusammenführt (obj1, obj2){
    var result = Object.assign(obj1, obj2);
    return result;
}
console.log("----------");
console.log(zusammenführt(first, first)) 
console.log("----------");
// Wenn die zwei Objekte gleiche Propertes haben mit gleichen oder verschiedenen Werten, nimmt JavaScript nur den Property von letzten Objekt.



// 4. Tausche Schlüssel und Werte. Erstelle eine Funktion, um eine Kopie eines Objekts zu erhalten. Die Kopie muss die Schlüssel und Werte vertauschen.

let person3 = {
    name: "John", 
    job: "teacher"
}

function swapKeysValues(object){
    const newProperty = {};
    for(const key in object){
        newProperty[object[key]] = key;
    }
    return newProperty
}
console.log("----------");
console.log(swapKeysValues(person3));
console.log("----------");


// 5. Rückgabe von Schlüsseln und Werten. Schreibe ein Programm, das ein Objekt annimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.

const myObj = { a: 1, b: 2, c: 3 };

function keysAndValuesArr(object){
    const keys = Object.keys(object);
    const value = Object.values(object);

    return [keys, value];
}
console.log("----------");
console.log(keysAndValuesArr(myObj))
console.log("----------");


// Objects: Teil 2
// 1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt. Erstelle eine Funktion isWithinRange, die überprüft, ob eine Zahl innerhalb des Bereichs der Eigenschaften min und max eines Objekts liegt. Nimm an, dass min <= max immer wahr ist.

function isWithinRange (num, object){
    if(num >= object.min && num <= object.maks){
        return true
    }
    return false
}
    
    
console.log("----------");    
console.log(isWithinRange(4, { min: 0, maks: 5 }))
console.log(isWithinRange(4, { min: 4, maks: 5 }))
console.log(isWithinRange(4, { min: 6, maks: 10 }))
console.log(isWithinRange(5, { min: 5, maks: 5 }))
console.log("----------");

// 2. Scrabble. Erstelle eine Funktion calcMaxScrabbleScore, die bei einem Array von Scrabble-Steinen die maximale Punktzahl zählt, die ein Spieler mit den Steinen in seiner Hand erreichen kann. Beispiel:

const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 9 },
    { tile: "D", score: 2 },
    { tile: "A", score: 3 },
    { tile: "E", score: 5 }
]

function calcMaxScrabbleScore(array) {
    let result = 0
    for(let i = 0; i < array.length; i++){
        const obj = array[i]
        result += obj.score
    }
    return result
}

console.log("----------");
console.log(calcMaxScrabbleScore(scrabbleHand));
console.log("----------");


// 3. Ist es ein leeres Objekt? Erstelle eine Funktion isEmptyObject, die true zurückgibt, wenn ein Objekt leer ist, und false, wenn nicht.
// Beispiele:
// isEmptyObject({}) ➞ true
// isEmptyObject({a: 1}) ➞ false

const isEmptyObject = {};
const isEmptyObject2 = {a: 1};

function emptyObject(object){
    if(Object.entries(object).length <= 0){
        return true
    }

    return false
}

// function emptyObject(object){
//     return Object.entries(object).length === 0
// }

console.log("----------");
console.log(emptyObject(isEmptyObject));
console.log(emptyObject(isEmptyObject2));
console.log("----------");


// 4. Buchstaben zählen. Erstelle eine Funktion, die die Anzahl der Vorkommen jedes Buchstabens in einer Zeichenkette zählt. Gib ein Objekt mit Schlüssel-Wert-Paaren von Buchstaben und der Anzahl der Vorkommen für jeden Buchstaben zurück.

const str = "tree";

function countLetters(string) {
    let result = {};
    const arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 1;
        } else {
            result[arr[i]] += 1;
        }
    }
    return result;
}


console.log("----------");
console.log(countLetters(str)); // ➞ {t: 1, r: 1, e: 2} 
console.log("----------");

// let counter = str => {
// return str.split('').reduce((total, letter) => {
// total[letter] ? total[letter]++ : total[letter] = 1;
// return total;
// }, {});
// };

// console.log(counter("tree"));
// console.log(counter("computer.com")); 



// 5. Kostenloser Versand. Erstelle eine Funktion, die bestimmt, ob eine Online-Bestellung versandkostenfrei sein soll. Eine Bestellung ist versandkostenfrei, wenn der Gesamtpreis der Artikel 50 € übersteigt.

const freeShipping = { "Sponge": 3.50, "Soap": 5.99 };
const freeShipping2 = { "Surround Sound Equipment": 499.99 }
const freeShipping3 = { "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }

function freeShippingController (object) {
    const valuesArr = Object.values(object)
    let total = 0
    for(let i = 0; i < valuesArr.length; i++){
        total += valuesArr[i]
    }
    return total >= 50;
}

console.log("----------");
console.log(freeShippingController(freeShipping));
console.log(freeShippingController(freeShipping2));
console.log(freeShippingController(freeShipping3));
console.log("----------");


// 6. Programmierobjekt.

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes",    
};

// Schreibe einen Befehl, der die Sprache “Go” an das Ende des Arrays “languages” anfügt.
programming.languages.push("Go")

// Ändere die Schwierigkeit auf 7.
programming.difficulty = 7

// Schreibe eine Anweisung mit dem Schlüsselwort delete, um den Schlüssel jokes aus dem Programmierobjekt zu entfernen.
delete programming.jokes

// Schreibe eine Anweisung, um dem Programmierobjekt einen neuen Schlüssel namens “isFun” mit dem Wert “true” hinzuzufügen.
programming.isFun = true

console.log(programming)
console.log("-----");

// Durchlaufe in einer Schleife das Array languages und gib alle Sprachen in console.log aus.
for(let i = 0; i < programming.languages.length; i++){
    console.log(programming.languages[i])
}
console.log("-----");

// Gib in einer Schleife alle Schlüssel des Programmierobjekts in console.log ein.
for(const key in programming){
    console.log(key)
}
console.log("-----");

// Verwende eine Schleife, um alle Werte des Programmierobjekts zu protokollieren.
for(key in programming){
    console.log(programming[key])
}
console.log("----------");

// Füge die Methode worthwhile hinzu, die den Wert “Learning the programming languages: JavaScript, Python, Ruby, Go ist lohnend und herausfordernd”, wenn die Schlüssel “isChallenging” und “isRewarding” den Wert true haben.
programming.worthwhile = function(){
    if(this.isChallenging && this.isRewarding){
        console.log(`Learning the programming languages: ${this.languages} ist lohnend und herausfordernd.`);
    }
}
programming.worthwhile()
console.log("----------");
// Bonus: Erkläre in einem Kommentar, was gedruckt wird, wenn wir eine Objektmethode über die Konsole protokollieren, ohne sie aufzurufen, und warum.
console.log(programming)
console.log("----------");

// Bonus:
// Achte darauf, dass kein anderer Code die Eigenschaften des Objekts löschen oder ändern kann.
Object.freeze(programming); // Verhindert dass das Objekt verändert wird.
programming["banane"] = 6;
console.log(programming);
console.log("----------");