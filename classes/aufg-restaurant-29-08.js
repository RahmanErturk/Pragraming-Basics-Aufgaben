// Das digitale Restaurant
// ------
// Wir programmieren uns ein Restaurant! Das Restaurant verfügt über eine Speisekarte, kann geöffnet oder geschlossen werden und führt eine Kasse mit ein wenig Wechselgeld zu Beginn. Über das Geld in der Kasse wird das Personal bezahlt, sobald das Restaurant schließt.
// Benötigt werden außerdem folgende Personengruppen: Gäste, Kellner, Köche (und Barkeeper). Gäste sollen Speisen und Getränke bestellen können, die von Kellnern aufgenommen und an Köche (und Barkeeper) weitergegeben werden. Köche (und Barkeeper) können Bestellungen von Kellnern erhalten und sie zubereiten. Nach der Zubereitung bringen Kellner die Speisen und Getränke zu den Gästen. Nach dem Essen bezahlen Gäste an Kellner. Zum Schluss bekommen Kellner und Köche (und Barkeeper) ihren Lohn.

const speisekarte = [
  { suppe: 5 },
  { gemischteGrillteller: 15 },
  { dönertasche: 6 },
  { pomDönner: 6 },
  { kebap: 13 },
  { vorspeise: 4 },
  { getränke: 3 },
];

// function getRandom(arr) {
//   return Math.floor(Math.random() * arr.length);
// }

// class Restaurant {
//   constructor(ourSpeisekarte) {
//     this.ourSpeisekarte = ourSpeisekarte;
//     this.kasse = 30;
//   }
//   open() {
//     return this.isOpen = true;
//   }
//   closed() {
//     return this.isOpen = false;
//   }
// }

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
// }
// class Gast extends Person {
//   constructor(...args) {
//     super(...args);
//   }
//   makeOrder(restaurant) {
//     const index = getRandom(restaurant.ourSpeisekarte);

//     const getRandomSpeise = restaurant.ourSpeisekarte[index];

//     restaurant.kasse += Object.values(getRandomSpeise)[0];
//     console.log(getRandomSpeise);
//   }
// }

// const erKebapHaus = new Restaurant(speisekarte);
// console.log(erKebapHaus);

// console.log(erKebapHaus.open());

// const ourGast = new Gast("Rahman");
// console.log(ourGast);
// ourGast.makeOrder(erKebapHaus);

// console.log(erKebapHaus);

// Restaurant
// + Speisekarte
// + geöffnet/geschlossen
// + Kasse
// - Personal bezahlen
class Restaurant {
  constructor(speisekarte, kassenbestand) {
    this.speisekarte = speisekarte;
    this.kasse = kassenbestand;
    this.geoeffnet = false;
  }
  bestellungen() {
    this.bestellung = [];
  }

  personalBezahlen() {
    // ...
  }

  oeffnen() {
    this.geoeffnet = true;
  }

  schliessen() {
    this.geoeffnet = false;
  }

  // DEBUG --------
  status() {
    console.log("geöffnet?", this.geoeffnet);
  }
}

const restaurant = new Restaurant(speisekarte, 0);
console.log(restaurant);

// Personal
// + Anfangswert ausgezahlter Lohn: 0€
// - Lohn erhalten
class Personal {
  constructor() {
    this.lohn = 0;
  }

  lohnErhalten(lohn) {
    this.lohn += lohn;
  }
}

const personal = new Personal();
console.log(personal);
personal.lohnErhalten(100);
console.log(personal);

// Koch (erbt von Personal)
// - Bestellung erhalten
// - Bestellung zubereiten
// class Koch extends Personal {
//   constructor(restaurant) {
//     this.restaurant = restaurant;
//   }
//   bestellungErhalten(gericht) {
//     console.log("Bestellung erhalten:", gericht);
//   }
// }
// const koch = new Koch()

// Kellner (erbt von Personal)
// - Bestellung aufnehmen
// - Bestellung weitergeben
// - Bestellung ausgeben
// - abkassieren
class Kellner extends Personal {
  constructor(restaurant) {
    super(restaurant);
    this.restaurant = restaurant;
  }

  bestellungAufnehmen(gericht) {
    console.log("Bestellung aufgenommen:", gericht);
    // ...
  }

  bestellungWeitergeben(gericht) {
    this.restaurant.bestellungen.push(gericht);
  }

  bestellungAusgeben() {
    // ...
  }

  abkassieren(gericht) {
    console.log("Bestellung abgerechnet:", gericht);
    // ...
  }
}
const kellner = new Kellner();
kellner.bestellungWeitergeben()
console.log(restaurant.bestellungen())

// Gast
// - bestellen
// - bezahlen
class Gast {
  constructor(kellner) {
    this.kellner = kellner;
  }

  bestellen() {
    this.gericht = speisekarte[Math.floor(Math.random() * speisekarte.length)];
    this.kellner.bestellungAufnehmen(this.gericht);
  }

  bezahlen() {
    console.log(`zu bezahlen: ${Object.values(this.gericht)[0]}€`);
    this.kellner.abkassieren(this.gericht);
  }
}

const gast1 = new Gast(kellner);
const gast2 = new Gast(kellner);

gast1.bestellen();
gast2.bestellen();

gast1.bezahlen();
gast2.bezahlen();
