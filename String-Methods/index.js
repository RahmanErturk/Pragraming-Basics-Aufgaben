const text = "   Lorem ipsum dolor sit amet.   ";

console.log(text);

console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(text.length);

console.log(text.substring(2, 14));
console.log(text.substring(15));

console.log(text.trim());
console.time("test 1");
console.log(text.trim().length);
console.log(text.trim().toUpperCase());
console.timeEnd("test 1");
console.log(text.trim().length, text.trim().toUpperCase());




console.time("test 2");
const trimmedText = text.trim();

console.log(trimmedText.length);
console.log(trimmedText.toUpperCase());
console.timeEnd("test 2");

// ---------------------------------------------------------------




const color = "rgb(255, 127, 0)";

// => rot: 255, grün: 127, blau: 0
console.log("rot; ", color.substring(4, 7), "grün: ", color.substring(9, 12), "blau: ", color.substring(14, 15));


console.log(`rot: 255, grün: 127, blau: 0`);
console.log(`rot: ${color.substring(4, 7)}, grün: ${color.substring(9, 12)}, blau: ${color.substring(14, 15)}`);

const rot = color.substring(4, 7);
const gruen = color.substring(9, 12); 
const blau = color.substring(14, 15);

const hellBlau = color.substring(14, 15) + 200; // * JavaScript nimmt + verschiedene Weise whar. Um dieses Problem zu lösen:
const blauNumber = +blau
const blauSteigert = blauNumber + 200;
// +blau macht vom String zu Nummer

const gruenReduziert = gruen - 27

console.log(`rot: ${rot} grün: ${gruenReduziert} blau: ${hellBlau}`);

const ergebnis = `rot: ${rot} grün: ${gruenReduziert} blau: ${blauSteigert}`
console.log(ergebnis)

// ----------------------------------------------------------------

const text2 = "Lorem Ipsum Dolor sit Rahman amet."
const searchTerm = "Rahman"
// 1. Text lesen und Name suchen
const isInText2 = text2.includes(searchTerm)
// 2. Antwort sagen
console.log(isInText2)
// Oder man kann auch ohne Variable schreiben.
console.log(text2.includes(searchTerm))

//-----------------------------------------------------------------

const testZiffernSystem = 205

console.log(testZiffernSystem);
console.log(testZiffernSystem.toString()); // decimal-system = 205
console.log(testZiffernSystem.toString(2)); // binary-system = 11001101
console.log(testZiffernSystem.toString(16)); // hexedecimal-system = cd

// -----------------------------------------------------------------

const str1 = "110101";
const str2 = "101"
const length = 20;

const paddedStr1 = str1.padStart(length, "muster");
const paddedStr2 = str2.padStart(length, "_*+/-_");

console.log(paddedStr1);
console.log(paddedStr2);  // Man kann mit padStart oder padEnd eine bestimmte Lange bestimmen und die leere Teile von dieser Lange mit den gewünschten Character auffüllen.
// MAn kann padStart und padEnd nur mit String benutzen.