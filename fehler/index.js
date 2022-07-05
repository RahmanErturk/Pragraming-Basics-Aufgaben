/**
* Author: Fantasia
* Projekt: Bankanbindung Sparkasse
* Subprojekt: Senden einer Überweisung
* Company: tranzfer
*/

// Anführungszeichen sollte verändert werden
//Falsch
// const API_URL = "api.sparkasse.de/v3/accounts";
//Richtig
const API_URL = "api.sparkasse.de/v3/accounts";

// key sollte groß geschrieben werden 
// Falsch
// const API_key = “lwqdjOI987HHUIaihjaskdh”;
// Richtig
const API_KEY = "lwqdjOI987HHUIaihjaskdh";

// Beide Anführungszeichen sollten gleich sein
// Falsch 
// const TRANZFER_CUSTOMER_ID = “tranzfer-009';
// Richtig 
const TRANZFER_CUSTOMER_ID = "tranzfer-009";

// Beim Variablennamen sollte zweites Word groß geschrieben werden
// Falsch
// const bankname = "Sparkasse";
// Richtig
let bankName = "Sparkasse";

// Die klammern sollten geschlossen sein
// Falsch
// console.log"Initialisiere Verbindung...");
// Richtig 
console.log("Initialisiere Verbindung...");

// Zwischen console und log sollte ein Punkt gestellt werden und danach sollte ein Pluszeichen vor dem Banknamen gestellt werden. Zuletzt sollte N beim Banknamen groß sein.
// Falsch
// consolelog("Verbindung mit "bankname + " hergestellt");
// Richtig 
console.log("Verbindung mit " + bankName + " hergestellt");

// Variablennamen darf nicht mit Nummer anfangen. Man sollte die Nummer entweder mit den Buchstaben oder am Ende schreiben.
// Falsch
// let 1kunde = "Jan Müller";
// Richtig
let kunde1 = "Jan Müller"

// Variablennamen darf nicht mit Nummer anfangen. Man sollte die Nummer entweder mit den Buchstaben oder am Ende schreiben.
// Falsch
// let 2kunde = "Martina Stein";
// Richtig
let kunde2 = "Martina Stein";

// Es darf nur eine Variable mit dem selben Namen deklariert werden. Schreibt man let, const oder var, wird ja eine neue Box aufgebaut. Es können keine zwei Boxen mit dem selben Namen aufgebaut werden.
// Falsch
// let iban1 = "1234 0000 9908 9999";
// let iban1 = "1222 0000 9908 9999";

// Richtig
let iban1 = "1234 0000 9908 9999";
let iban2 = "1222 0000 9908 9999";

// Zwischen let, const und var UND dem Namen der Variable muss ein Leerzeichen sein. Und zweiter Punkt sollte gelöscht werden.
// Falsch
// letbetrag = 23..3;
// Richtig
let betrag = 23.3;

// Diese Code ist richtig geschrieben.
console.log("Starte Überweisung");


// Die Art von Anführungszeichen sollte glich sein. Hier muss man am Ende (`) stellen.
// Falsch
// console.log(`Von "${kunde1}" IBAN: "${iban1}");
// Richtig 
console.log(`Von "${kunde1}" IBAN: "${iban1}"`);

// Hier gibt es keinen Fehler
console.log(`Nach "${kunde2}" IBAN: "${iban2}"`);


// Hier sollte man den Variablennamen zwischen den Anführungszeichen schreiben.
// Falsch
// console.log(`Sende Betrag ${betrag}€`);
// Richtig
console.log(`Sende Betrag "${betrag}" €`);

// Hier gibt es keinen Fehler.
console.log("Überweisung erfolgreich");

// Um etwas zu kommentieren, sollten 2 Slash am Anfang gestellt werden
// Falsch 
// / Transaktionsdauer erfassen
// Richtig 
// Transaktionsdauer erfassen


// Konstanten kann man keinen neuen Wert zuweisen. Um neuen Wert zuzuweisen muss man die Art von Variable verändern. Hier sollte man oben const bankName mit let bankName ändern. Deswegen habe ich oben const bankName mit let bankName geändert. 

bankName = "Sparkasse Berlin";


// Konstanten muss man sofort einen Wert zuweisen
// Falsch
// const transaktionsDauer;
// transaktionsDauer = 100;
// Richtig
const transaktionsDauer = 100; 


// Hier gibt es keinen Fehler.
console.log("Beende Verbindung...");

// Weil wir oben bankname mit N geschrieben haben, hier sollte N beim Banknamen groß geschrieben weerden.
// Falsch
// console.log('Verbindung mit ' + bankname + " beendet");
// Richtig 
console.log('Verbindung mit ' + bankName + " beendet");


// Hier gibt es keinen Fehler
console.log("Dauer der Transaktion " + transaktionsDauer + "s");



const password = "abcdefgh";
const min_Pass_Length = 8;
const istPassSicher = password.length >= min_Pass_Length;

console.log({istPassSicher})
