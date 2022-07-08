/**
* Author: Fantasia
* Projekt: Signup Seite
* Feature: Password Validierung
* Company: Tranzfer
*/
// Password das der Nutzer eingegeben hat
// Zum Testen verändern
let password = "lasjefasklfj!";
// State Variablen
let isPasswordSafe = true;
let errorMessages = [];
// Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
if (password.length < 6) {
   isPasswordSafe = false;
   errorMessages.push("Password nicht lang genug")  
}
// Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
if (
   !password.includes("!") &&
   !password.includes("$") &&
   !password.includes("%") &&
   !password.includes("&") &&
   !password.includes("+") &&
   !password.includes("#")
) {
   isPasswordSafe = false;
   errorMessages.push("Passwort muss Sonderzeichen enthalten");
}
// Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten
if (password.indexOf("password") >= 0 || password.indexOf("123456") >= 0) {
   isPasswordSafe = false;
   errorMessages.push("Passwort darf keine leichten Worte enthalten");
}
// Zum Schluss gibt das Programm aus ob das Passwort sicher ist
console.log("Überprüfung abgeschlossen.");
console.log(
   isPasswordSafe ? "Passwort ist sicher." : "Passwort ist nicht sicher!"
);
if (isPasswordSafe) {
   console.log("Anmeldung kann fortfahren.");
} else {
   console.log("Es gab folgende Fehler:");
   console.log(errorMessages.join(" | "));
}