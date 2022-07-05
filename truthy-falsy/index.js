/** 
 *  Truthy - Falsy
 * ----------------
 * 
 *  Truthy => Non-Zero Values;
 * 
 *  Falsy => Null, Undefined, 0, ""(empty String);
 * 
 * 
 **/ 

const a = 0;

if (a == true) {
console.log("hallo");
}else {
    console.log("tschüss!");
}

const b = 1;

if (b == true) {
console.log("hallo");
}else {
    console.log("tschüss!");
}

// -----------------------------------------------------------------

const c = "rahman";

if (c == true) {
    console.log("Hi! Rahman");
}else {
    console.log("Sorry, Rahman");
}  // Hier ist "c" ein String und true ist ein Boolean-Wert. Weil 2 Variablen-Type unterschiedlich bzw. nicht gleich sind, gibt console Else-Wert aus.

//--------------------------------------------------------------------

const d = "rahman";

if (!!d == true) {
    console.log("Hi! Rahman");
}else {
    console.log("Sorry, Rahman");
}  // Aufrufezeichen macht die Variable ein Boolean. Das Aufrufezeichen macht den Wert Not. Wenn man es 2 Male benutzt, dann gibt console einen positiven Wert aus.

// -----------------------------------------------------------------------------

const e = "rahman"; 
if (e) {
    console.log("Hi! Rahman");    
}else {
    console.log("Sorry, Rahman");
} // Hier überprüft man, ob die Variable e ein Wert hat. Wenn sie keinen Wert hat oder leer ist, gibt console "Sorry, Rahman" aus.

const e2= ""; 
if (e2) {
    console.log("Willkommen");    
}else {
    console.log("Tschau!");
}

// ------------------------------------------------------------------------------

const f = {}; // Object
// Normalerweise kann man ein Const nicht verändern, aber kann man es verschiedene Werte geben, indem man Geschweifteklammern benutzt und ein id gibt.

f.id = 1234;
console.log({f})

const g = {
    id: 0,
    name: "Test",
    type: "bla",
}

g.id = "abcde";

console.log(g)
console.log({g})