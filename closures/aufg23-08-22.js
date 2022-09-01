// Aufgabe 1:
// Schreibe eine Closure, mit der es möglich ist, Zahlen auf eine bestimmte Anzahl an Nachkommastellen zu runden.
// Die Anzahl soll über die outer function festgelegt werden können.
// Die Zahl, die an die inner function übergeben wird, soll dann entsprechend gerundet werden.
// Beispiele:
// Funktion rundet auf 2 Nachkommastellen:
// 5.492858 => 5.49
// 12.7491313 => 12.75
// Funktion rundet auf 4 Nachkommastellen:
// 5.492858 => 5.4929
// 12.7491313 => 12.7491

function digitsRounder(numberOfDigits) {
    const digits = (number) => console.log(number.toFixed(numberOfDigits));
    return digits
}

const twoDigits = digitsRounder(2)
const fourDigits = digitsRounder(4)

twoDigits(5.492858);
twoDigits(12.7491313);

fourDigits(5.492858); 
fourDigits(12.7491313); 

// Aufgabe 2:
// Schreibe eine Closure, die anhand eines Parameters entscheidet, welche Suchmaschine genutzt wird.
// Beim Aufruf der inner function soll dann die passende URL zum Suchbegriff und der zuvor festgelegten Suchmaschine ausgegeben werden.
// Verwende für die Wahl der Suchmaschine den Namen.
// Beispiele für URLs:
// Google: https://www.google.com/search?q=closures
// DuckDuckGo: https://duckduckgo.com/?q=closures
// Bing: https://www.bing.com/search?q=closures


function searchEngineDecider(searchEngine) {
    if(!["Google", "DuckDuckGo", "Bing"].includes(searchEngine)) {
        console.log("unbekannte Suchmaschine!");
        return;
    }

    let searchEngineUrl;

    switch(searchEngine) {
        case "Google":
           searchEngineUrl = `https://www.google.com/search?q=`;
           break;
        case "DuckDuckGo":
           searchEngineUrl = `https://duckduckgo.com/?q=`;
           break;
        case "Bing":
           searchEngineUrl = `https://www.bing.com/search?q=`;
           break;
    }

    const search = (query) => {
        return searchEngineUrl + query
    }

    return search
}

const google = searchEngineDecider("Google");
const duckDuckGo = searchEngineDecider("DuckDuckGo");
const bing = searchEngineDecider("Bing");

console.log(google("closure")); 
console.log(duckDuckGo("vural")); 
console.log(bing("huseyin")); 


const person3 = {
    id: 3,
    name: "tester",
    greet: (sayHi) => {
        console.log(this.greet);
        console.log((`${sayHi}, ich bin ${this.name}`));
    }
}

//person3.greet("Hi")





