/**
 * Ternary
 * 
 * Ein kurzes if else statement auf einer Zeile.
 * 
 */

const alterJonas = 16;
alterJonas >= 18
  ? console.log("Du darfst Vodka kaufen.")
  : console.log("Du darfst Saft kaufen.");

const verkäuferAntwort =
  alterJonas >= 18 ? "Du darfst Vodka kaufen." : "Du darfst Saft kaufen.";

console.log(verkäuferAntwort);