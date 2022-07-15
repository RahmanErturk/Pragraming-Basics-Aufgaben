// Aufgabe
console.log("----------- Aufgabe -----------")
// 1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.
// 2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.
// 3. Kombiniere beide Funktionen, sodass ein übergebener Text gekürzt und die Anfangsbuchstaben der Wörter in Großbuchstaben ausgegeben werden.
// 4. Prüfe in jeder Funktion, ob die übergebenen Werte tatsächlich Strings sind. Falls nicht, gib eine Fehlermeldung zurück (z.B. "Invalides Argument! Es muss ein String übergeben werden!").
// 5. Sind deine Funktionen Pure Functions oder haben sie Side Effects? Begründe/Beweise deine Antwort.

const text1 = "Authoritatively incentivize excellent alignments whereas sources rapidiously.";
const text2 = "Rapidiously incubate enterprise architectures for covalent expertise. Completely deliver cross-media core competencies through extensive technologies.";
const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise.";

const array = [1, 2, 3, 4, 5, 6];

const number = 5674857;


function aufgabe1(myText){
  if(typeof myText !== "string"){
    return "Invalides Argument! Es muss ein String übergeben werden!";
  }
  const sentence = myText.split(' ');
  for (let i = 0; i < sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
  }
  return sentence.join(" ");
}

console.log("Frage-1:", aufgabe1(text1)); 

// ------------------------------------------------------------------
console.log("--------------------------------------")
// ------------------------------------------------------------------

function aufgabe2(myText){
  if(typeof myText !== "string"){
    return "Invalides Argument! Es muss ein String übergeben werden!"
  }
  let paragraph = myText.split(" ")
  paragraph = paragraph.slice(0, 29).join(" ") + "...";

  return paragraph;
}

console.log("Frage-2", aufgabe2(array));

// ------------------------------------------------------------------
console.log("--------------------------------------")
// ------------------------------------------------------------------

function aufgabe3(myText){
  if(typeof myText !== "string"){
    return "Invalides Argument! Es muss ein String übergeben werden!"
  }
  let paragraph = myText.split(" ")
    for (let i = 0; i < paragraph.length; i++){
      paragraph[i] = paragraph[i][0].toUpperCase() + paragraph[i].slice(1)
    }
    paragraph = paragraph.slice(0, 29).join(" ") + "...";
    return paragraph;
}

console.log("Frage-3", aufgabe3(number));

// ------------------------------------------------------------------
console.log("--------------------------------------")
// ------------------------------------------------------------------


