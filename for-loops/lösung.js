// Wir haben die folgende Funktion erhalten, die wir für zwei Aufträge verwenden wollen.
// Die Funktion selbst dürfen wir nicht verändern, aber beliebig oft ausführen.

// Wichtig:
// Unsere zwei Aufträge sollen mit beliebig vielen Zufallszahlen funktionieren.
// Wir müssen daher darauf achten, dass unser Algorithmus mit unterschiedlichen Mengen arbeiten kann.

function getRandomNumbers(amount) {
    const numbers = Array();

    for (let i = 0; i < amount; i++) {
        numbers.push(parseInt(Math.random() * 100));
    }

    return numbers;
}


// Beispiel: gib 10 Zufallszahlen aus und speichere sie in der Variable randomNumbers
const randomNumbers = getRandomNumbers(10);
console.log(randomNumbers);

// --------------------------------------------------------------------------
console.log("------------------------------------------------------")
// --------------------------------------------------------------------------

// 1. Gib die Anzahl der Zahlen unter 50 aus.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Es gibt 2 Zahlen unter 50.

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

let loesung_1 = Array();
for (i = 0; i < randomNumbers.length; i++){
    if(randomNumbers[i] < 50) {
        loesung_1.push(randomNumbers[i]);      
    }
}

console.log(`Es gibt ${loesung_1.length} Zahlen unter 50.`);

// Alternative Lösung:

// let loesung_1 = 0;
// for (i = 0; i < randomNumbers.length; i++){
//     if(randomNumbers[i] < 50) {
//         loesung_1++;     
//     }
// }

// console.log(`Es gibt ${loesung_1} Zahlen unter 50.`);

// --------------------------------------------------------------------------
console.log("------------------------------------------------------")
// --------------------------------------------------------------------------

// 2. Gib zwei Arrays aus: Eines mit den Zahlen unter 50, und eines mit den Zahlen größer oder gleich 50.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Zahlen unter 50: [1, 40]
// Zahlen größer oder gleich 50: [59, 50, 99]

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

const loesung_2 = [];
const loesung_3 = Array()
for (i = 0; i < randomNumbers.length; i++){
    if(randomNumbers[i] < 50) {
        loesung_2.push(randomNumbers[i]);      
    } else {
        loesung_3.push(randomNumbers[i]);
    }
}
console.log("Zahlen unter 50:", loesung_2);
console.log("Zahlen größer oder gleich 50:", loesung_3);

// --------------------------------------------------------------------------
console.log("------------------------------------------------------")
// --------------------------------------------------------------------------

// let loesung_3 = Array()
// for (i = 0; i < randomNumbers.length; i++){
//     if(randomNumbers[i] >= 50) {
//         loesung_3.push(randomNumbers[i]);      
//     }
// }
// console.log("Zahlen größer oder gleich 50:", loesung_3);

// // --------------------------------------------------------------------------
// console.log("------------------------------------------------------")
// // --------------------------------------------------------------------------

