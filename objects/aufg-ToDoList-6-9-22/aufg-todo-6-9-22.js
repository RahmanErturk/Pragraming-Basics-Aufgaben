/*
Schreibe ein Objekt, welches Aufgaben enthält und Methoden, mit denen die Aufgaben bearbeitet werden können.
Es soll möglich sein, eine neue Aufgabe hinzuzufügen, eine Aufgabe als erledigt zu markieren und Aufgaben zu löschen.
Außerdem soll man über eine weitere Methode nur unerledigte Aufgaben finden können.
Überlege dir, welche Eigenschaften eine einzelne Aufgabe haben muss, damit man die Methoden anwenden kann.

Beispiele für Aufgaben:

- Einkaufen gehen X
- Wohnung putzen  X
- Essen kochen    X
- Wäsche waschen
- Yaman wecken

*/

const todo = {
  aufgaben: {},

  aufgabeHinzufuegen(aufgabe) {
    this.aufgaben[aufgabe] = false;
    console.log(`- Aufgabe "${aufgabe}" ist erfolgreich hinzugefügt.`);
  },

  aufgabeErledigen(aufgabe) {
    if (this.aufgaben[aufgabe]) {
      console.error(`- Aufgabe "${aufgabe}" ist bereits erledigt.`);
    } else {
      this.aufgaben[aufgabe] = true;
      console.log(`${aufgabe} X`);
    }
  },

  aufgabeDelete(aufgabe) {
    delete this.aufgaben[aufgabe];
    console.log(`- Aufgabe "${aufgabe}" ist erfolgreich gelöscht.`);
  },

  erledigteAufgaben() {
    console.log("== Erledigte Aufgaben ==");
    for (key in this.aufgaben) {
      //   console.log(key);
      if (this.aufgaben[key] === true) {
        console.log(`- ${key}`);
      }
    }
  },

  unerledigteAufgaben() {
    console.log("== Unerledigte Aufgaben ==");
    for (key in this.aufgaben) {
      //   console.log(key);
      if (this.aufgaben[key] === false) {
        console.log(`- ${key}`);
      }
    }
  },
};

todo.aufgabeHinzufuegen("Wohnung Putzen");
todo.aufgabeHinzufuegen("Essen Kochen");
todo.aufgabeHinzufuegen("Wäsche Waschen");
todo.aufgabeHinzufuegen("Einkaufen Gehen");
todo.aufgabeHinzufuegen("JS Lernen");

console.log("---------------------------");

todo.aufgabeErledigen("Einkaufen Gehen");

console.log("---------------------------");

todo.aufgabeHinzufuegen("Spazieren Gehen");

console.log("---------------------------");

todo.aufgabeErledigen("Einkaufen Gehen");

console.log("---------------------------");

todo.unerledigteAufgaben();

console.log("---------------------------");

todo.aufgabeErledigen("Essen Kochen");

console.log("---------------------------");

todo.erledigteAufgaben();

console.log("---------------------------");

todo.aufgabeDelete("JS Lernen");

console.log("---------------------------");

todo.unerledigteAufgaben();

console.log("---------------------------");

console.log(todo);
