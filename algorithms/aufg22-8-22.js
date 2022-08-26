// Es ist Montag. Du bist nach einem großartigen Wochenende zurück im Büro, aber dort erwartet dich eine schlechte Nachricht: Fantasia ist krank und die Deadline des Projekts rückt immer näher! Sie hat dir drei Funktionen überlassen, die Benennung ist aber nicht wirklich hilfreich und du musst nun herausfinden, ob und wie sie benutzt werden können.

// - Teste die Funktionen
// - Finde heraus, was sie tun und vor allem: wie sie es tun
// - Schreibe Kommentare in den Code
// - Finde passende Namen für Variablen
// - Bonus: Bestimme die Komplexität der Funktionen
// - Bonus: Gibt es Unterschiede, wenn bestimmte Argumente übergeben werden?

function functionA(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            const itemA = array[j];
            const itemB = array[j + 1];
            if (itemA > itemB) {
                array[j] = itemB;
                array[j + 1] = itemA;
            }
        }
    }
    return array;
}

console.log(functionA([15, 20, 12, 0, 35]));

function functionB(array) {
    let x;
    for (let i = 0; i < array.length - 1; i++) {
        x = i;
        for (let j = i; j < array.length; j++) {
            if (array[x] > array[j]) {
                x = j;
            }
        }
        if (i !== x) {
            const a = array[i];
            const b = array[x];
            array[i] = b;
            array[x] = a;
        }
    }
    return array;
}

console.log(functionB([15, 20, 12, 0, 35]));

function functionC(array) {
    let x;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        while (j > 0 && array[j - 1] < x) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = x;
    }
    return array;
}

console.log(functionC([15, 20, 12, 0, 35]));


function logger(logLevel) {
    return (message) => {
        console.log(Date.now(), `[${logLevel}]`, message);
    }
}

const logInfo = logger("Info")
console.log(logInfo);

logInfo("setup successful")