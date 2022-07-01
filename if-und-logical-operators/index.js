// Frage 1

let isDogBetter = true;
let isCatBetter = false;

// Frage 2 - a
console.log("Frage 2-a ist: " + isDogBetter && isCatBetter);
// Frage 2 - b
console.log("Frage 2-b ist: " + isDogBetter || isCatBetter);
// Frage 2 - c
console.log(!(isDogBetter && isCatBetter));

// Frage 3
let atoms = 7;
let sandGrains = 8;
let starsInSky = 9;

// Frage 4 - a
if((atoms > starsInSky) && (atoms > sandGrains)){
    console.log(true);
}else {
    console.log(false);
}
// Frage 4 - b
console.log(!(atoms === sandGrains));
// Frage 4 - c
console.log((starsInSky < sandGrains) || (starsInSky > atoms));
// Frage 4 - d
console.log(atoms === starsInSky || !(atoms === sandGrains));
// Frage 4 - e
console.log(atoms >= 10 && sandGrains <= 10);
// Frage 4 - f
console.log((atoms * starsInSky) < 100 || (atoms * sandGrains) > 100);
