// Aufgabe 1:
// Du bist Bootsbauer und entwirfst eine neue Art von Yacht.
// Erstelle eine Klasse Yacht die folgende Eigenschaften enthält:
// farbe (string), gewichtInKg (number), ps (number), name (string), schlafzimmer (number), badezimmer (number), hatEinBeiboot (boolean)
// Außerdem soll die Klasse drei Methoden erhalten:
// start() -> Soll auf der Konsole drucken: “Die Yacht <name> ist gestartet”
// anlegen() -> Soll auf der Konsole drucken: “Die Yacht <name> legt an”
// ablegen() -> Soll auf der Konsole drucken: “Die Yacht <name> legt ab”
// Erstelle drei Instanzen deiner Yacht mit verschiedenen Eigenschaften.

class Yacht {
  constructor(farbe, gewichtInKg, ps, name, schlafzimmer, badezimmer, hatEinBeiboot){
    this.farbe = farbe;
    this.gewichtInKg = gewichtInKg;
    this.ps = ps;
    this.name = name;
    this.schlafzimmer = schlafzimmer;
    this.badezimmer = badezimmer;
    this.hatEinBeiboot = hatEinBeiboot;
  } 
  start(){
    console.log(`Die Yacht ${this.name} ist gestartet.`);
  }
  anlegen(){
    console.log(`Die Yacht ${this.name} legt an.`);
  }
  ablegen(){
    console.log(`Die Yacht ${this.name} legt ab.`);
  }
}

const meinYachtInstanz = new Yacht("weiss", 1000, 60, "blueeye", 1, 1, false);
console.log(meinYachtInstanz);
console.log(meinYachtInstanz.name);
meinYachtInstanz.start();
meinYachtInstanz.anlegen();
meinYachtInstanz.ablegen();
console.log("---------------------");

// Aufgabe 2
// ## Aufgabenstellung
// Erstelle ein Objekt lege es in einer Variable namens `bankkonto` ab. Das Objekt soll folgende Eigenschaften haben:
// -   `kontostand`, eine `Number` die den aktuellen Kontostand enthält.
// -   `iban`, ein `String` mit der IBAN des Bankkontos.
// -   `bankname`, ein `String` mit dem Namen der Bank.
// -   `kontoinhaber`, ein `String` mit dem Vor- und Nachnamen des Kontoinhabers
// Außerdem soll das Bankkonto folgende Methoden besitzen:
// -   `abheben`, eine Methode die als Parameter einen Betrag x erhält und ihn vom Kontostand abzieht. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich abgehoben. Der neue Kontostand ist y€`
// -   `einzahlen`, eine Methode die als Parameter einen Betrag x erhält und ihn zum Kontostand addiert. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich eingezahlt. Der neue Kontostand ist y€`
// - `zeigInfo`, eine Methode ohne Parameter, welche auf der Konsole folgenden String ausgibt: `Dies ist eine Konto der x Bank. Die IBAN dieses Kontos lautet y.`
// ## Bonus
// Erweitere die Methode `abheben` sodass sie den Kontostand nicht verändert und ausgibt: `x€ konnte nicht abgehoben werden.`, falls der Kontostand nicht ausreicht. 
console.log("Aufgabe 2 -----------");
class Bankkonto{
  constructor(kontoStand, iban, bankname, kontoinhaber){
    this.kontoStand = kontoStand;
    this.iban = iban;
    this.bankname = bankname;
    this.kontoinhaber = kontoinhaber;
  }
  abheben(geldBetrag){
    if(geldBetrag > this.kontoStand) {
      console.log(`${geldBetrag}€ konnte nicht abgehoben werden`);
    }else console.log(`${geldBetrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontoStand - geldBetrag}€.`);
  }
  einzahlen(geldBetrag){
    console.log(`${geldBetrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontoStand + geldBetrag}€.`);
  }
  zeigInfo(){
    console.log(`Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`);
  }
}

const meinKontoInstanz = new Bankkonto(750, "DE23 4567 8901 2345 67", "Deutsche", "Müller")
console.log(meinKontoInstanz)
console.log(meinKontoInstanz.kontoinhaber);

meinKontoInstanz.abheben(450);
meinKontoInstanz.abheben(1000);
meinKontoInstanz.einzahlen(250);
meinKontoInstanz.zeigInfo()

# PB - Klassen - Grundlagen
​
In dieser Aufgabe geht es darum, die grundlegenden Konzepte von Klassen zu üben. Wir üben die Verwendung der Klasse `Date`, die in JavaScript eingebaut ist!

Füge deine Antworten direkt in diese Datei ein.

```js
const now = new Date();
const test = new Date();
```

1. Was ist die Variable `now` in dem obigen Code?
name von der Variable
2. Welchen Typ hat die Variable `now`?

3. Was ist in dem obigen Code die Variable `Date`?
4. Was ist der Typ von `Date`?
5. Was erhältst du, wenn du `console.log(now)` eingibst?
6. Was erhältst du, wenn du `console.log(Date)` eingibst?
7. Was erhältst du, wenn du `console.log(new Date())` eingibst?
8. Ist `now` wahrheitsgemäß?
9. Was bekommst du, wenn du `console.log(now === test)` eingibst? Und warum?
10. Was bekommst du, wenn du `console.log(now === Date)` eingibst?
11. Was bekommst du, wenn du `console.log(now === new Date())` machst?
12. Was bekommst du, wenn du `console.log(new Date() === new Date())` machst? Und warum?