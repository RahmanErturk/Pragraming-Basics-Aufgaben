// Aufgabe 1
//-----------------------
//Aufgabe 1.1.1

const car = {
    speed: 250,
    brand: "BMW",
    model: "M4",
    price: 79999,
    electric: false
}

const {speed, brand, model, price, electric} = car
console.log(speed, brand, model, price, electric);

//Aufgabe 1.1.2

const person = {
    name: "Tom",
    // lastName: "Thompson",
    email: "tom@gmx.de",
    age: 23,
}

const {name: firstName, lastName = "empty"} = person
console.log(firstName, lastName);

//Aufgabe 1.2

const names = [
    "Mark", "Lisa", "Dalia", "Curtis", "Tim", "Ben", "Olaf"
]

const [ersteElem, zweiteElem] = names
const [, , ...rest] = names
console.log(ersteElem, zweiteElem);
console.log(rest);