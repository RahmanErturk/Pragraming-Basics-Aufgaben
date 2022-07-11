/**
 * Arrays
 * 
 * Arrays sind Datentypen in denen man mehrere andere Datentypn speichern kann.
 * 
 * Vergleicbar ist ein Array mit einem Zug.
 * Man erstellt Arrays mit eckigen Klammern. Und die Elemente darin sind mit Kommas getrennt.
 * 
 * z.B: ["lok", "getreide", "autos", "benzin"]
 */

const zug = ["lok", "getreide", "autos", "benzin"];
console.log(zug);
// Wie kann man Elemente aus einem Array untersuchen?
// Die Elemente fängt mit 0 an.
console.log(zug[1]);
console.log(zug[3]);


/**
 * Wozu braucht man Arrays?
 * 
 * Man hat viele Daten. Z.B. hunderte Instagram Fallower die man effizient übertragen und verarbeiten will.
 * 
 * Man hat eine unbekannte Anzahl an Daten. Man kann einfach Elemente anhängen oder wieder wegnehmen.
 * 
 */

// Viele Daten
const alleSchuelerGeburtsjahre = [
    "1998",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
];

console.log(alleSchuelerGeburtsjahre);

// Unbekannte Anzahl
const telefonBuch = ["+49123456", "+49876543"];

console.log(telefonBuch);


//                         0      1      2
const gemischtesArray = [true, "hallo", 123];
console.log(gemischtesArray);
console.log(gemischtesArray[1]);
console.log(gemischtesArray[3]);
// Existiert der Waggon nicht wird undefined ausgelesen.
 
// Man kann die Elemente in Array austauschen.
const ice123 = ["lok", "waggon", "speisewaggon", "waggon"];
console.log(ice123);
ice123[2] = "waggon";
console.log(ice123);


// Die Veränderung der Läge des Arrays
const kundenListe = [];
console.log(kundenListe);

// Push fügt einen Element am Ende ein.
kundenListe.push("Vural");
console.log(kundenListe);
// Unshift fügt einen Element am Anfang ein.
kundenListe.unshift("Rahman");
console.log(kundenListe);

kundenListe.push("Hüseyin");
kundenListe.push("Marvin");
kundenListe.push("Dominik");
kundenListe.push("Edwin");
kundenListe.push("Ertuerk");
console.log(kundenListe);

// Pop löscht das letzte Element im Array.
kundenListe.pop();
console.log(kundenListe);

// Shift löscht das erste Element im Array.
kundenListe.shift();
console.log(kundenListe);



// Wie finet man die Position eines Elements im Array?
// Dafür benutzt man array.indexOf("muster"). indexOf ist eine Array Methode. Sie ist an das Array gekoppelt.

const obst = ["banane", "erdbeer", "apfel", "orange"];
const positionErdbeer = obst.indexOf("erdbeer");
console.log(positionErdbeer);

const positionZehn = [5, 10, 15].indexOf(5);
console.log(positionZehn);


// Wie kann man ein Array umdrehen?
// mit array.reverse()

obst.reverse();
console.log(obst);



// Wie kann man zwei Arrays zusammenfügen?
// mit array.concat(zweitesArray)

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const asianCities = ["Peking", "Tokio", "Seoul", "Shanghai", "Bangkok"];

const worldCities = euroCities.concat(asianCities);
console.log({worldCities});


// Wie kann man Arrays teilen?
// mit array.splice(startWert, anzahlZuLöschenderElemente)

euroCities.splice(2, 1)
console.log({euroCities});

// Wie kann man einige Elemente von einem Array wegziehen?
// mit array.slice(von wo, bis wo)

const someCitiesInAsia = asianCities.slice(1, 4);
console.log({someCitiesInAsia});

// array.join(", + *") => Adds all the elements of an array into a string, separated by the specified separator string.

console.log(asianCities.join(" , "));


// Dieses Codeblock zig uns, was jedes Element ist und die index von diesem Element und gesamtes Array ist 

euroCities.forEach(function(item, index, array) {
    console.log(item, index, array);
});