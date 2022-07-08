// Entscheidungstreffer

const entscheidungsTreffer = Math.random();
console.log(entscheidungsTreffer);

if (entscheidungsTreffer < 0.5) {
    console.log("JA!");
} else {
    console.log("Nein :(");
}

const x = Math.random();
const result = (x < 0.5) ? "Ja" : "Nein";
console.log({result})


// Würfel

const Würfel = Math.floor(Math.random()*6) + 1;

if (Würfel == 6) {
    console.log(Würfel, "= Super, Nun kannst du wieder würfeln!");
}else {
    console.log(Würfel, "= Schade, das war sehr knapp!");
}