/**
 * If-Else
 * 
 * If-else ist eine Bedingung-Codeblock.
 * 
 * Der if Block wird ausgeführt, wenn die Bedingung zwischen den Rundenklammern richtig ist.
 * 
 * Der else Block wird ausgeführt, wenn die Bedingung zwischen den Rundenklammern richtig ist.
 * 
 */

const istHeuteDonnerstag = true;

if(istHeuteDonnerstag){
  console.log("Heute ist Donnerstag");
}else {
  console.log("Heute ist nicht Donnerstag");
}

//Man kann if else Codeblock mit mehreren "else if" erweitern.
const tag = "Donnerstag"

if (tag === "Montag") {
  console.log("Heute ist Montag");
} else if (tag === "Dienstag"){
  console.log("Heute ist Dienstag");
} else if (tag === "Mittwoch"){
  console.log("Heute ist Mittwoch");
} else if (tag === "Donnerstag"){
  console.log("Heute ist Donnerstag");
} else if (tag === "Freitag"){
  console.log("Heute ist Freitag");
} else if (tag === "Samstag"){
  console.log("Heute ist Samstag");
} else {
  console.log("Heute ist Sonntag");
}

// Man kann es mit Logical Operators kombinieren.
const alterSuse = 18;
const alterMaria = 19;
const alterJonas = 17;

if (alterSuse >= 18 && alterMaria >= 18 && alterJonas >= 18) {
  console.log("Ihr dürft alle drei auf das Festival");
}else {
  console.log("Alle müssen >= 18 sein!");
}

if (alterMaria >= 18 || alterJonas>= 18) console.log("Einer von euch >= 18");


// Wenn der Code im if statement nur aus einen Ausdruck bzw. einer Zeile besteht, braucht man geschweiften Klammern nicht.
const day = "Donnerstag";

if (day === "Donnerstag") console.log("Bald Wochenende");