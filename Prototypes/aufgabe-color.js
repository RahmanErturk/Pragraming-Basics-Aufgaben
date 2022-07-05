// Aufgabe A

// A-1
const colorA1 = "rgb(247, 101, 101)"

const rot = colorA1.substring(4, 7);
const rotReduziert = rot - 80;

const gruen = colorA1.substring(9, 12); 
const blau = colorA1.substring(14, 17);

const ergebnisA1 = `rot: ${rotReduziert} grün: ${gruen} blau: ${blau}`;
console.log({ergebnisA1})

// A-2
const colorA2 = "rgb(21, 35, 112)"

const rotA2 = colorA2.substring(4, 6);

const gruenA2 = colorA2.substring(8, 10); 
const gruenNumberA2 = +gruenA2
const gruenSteigertA2 = gruenNumberA2 + 75;

const blauA2 = colorA2.substring(12, 15);
const blauNumberA2 = +blauA2
const blauSteigertA2 = blauNumberA2 + 100;

const ergebnisA2 = `rot: ${rotA2} grün: ${gruenSteigertA2} blau: ${blauSteigertA2}`;
console.log({ergebnisA2})

// A-3
const colorA3 = "rgb(167, 249, 85)"
const rotA3 = colorA3.substring(4, 7);
const rotReduziertA3 = rotA3 - (rotA3 / 4);

const gruenA3 = colorA3.substring(9, 12);

const blauA3 = colorA3.substring(14, 16);
const blauReduziertA3 = blauA3 - (blauA3 / 4);

const ergebnisA3 = `rot: ${parseInt(rotReduziertA3)} grün: ${parseInt(gruenA3)} blau: ${parseInt(blauReduziertA3)}`;
console.log({ergebnisA3});



// Aufgabe B

// B-1
const colorB1 = "rgb(127, 255, 100)";

const rotB1 = 127;
const rotB1Hex = rotB1.toString(16);

const gruenB1 = 255;
const gruenB1Hex = gruenB1.toString(16)

const blauB1 = 100;
const blauB1Hex = blauB1.toString(16)

const ergebnisB1 = "#" + `${rotB1Hex}${gruenB1Hex}${blauB1Hex}`;
console.log({ergebnisB1});

// B-2
const colorB2 = 0xE23F76;

const rotB2 = 0xE2;
const rotB2Rgb = rotB2.toString();

const gruenB2 = 0x3F;
const gruenB2Rgb = gruenB2.toString();

const blauB2 = 0x76;
const blauB2Rgb = blauB2.toString()

const ergebnisB2 = "rgb" + "(" + `${rotB2Rgb}, ${gruenB2Rgb}, ${blauB2Rgb}` + ")";
console.log({ergebnisB2});

// B-3
const colorB3 = "rgb(229, 13, 218)";

const rotB3 = 229;
const rotB3Hex = rotB3.toString(16);

const gruenB3 = 13;
const gruenB3Hex = gruenB3.toString(16)

const blauB3 = 218;
const blauB3Hex = blauB3.toString(16)

const ergebnisB3 = "#" + `${rotB3Hex}${gruenB3Hex}${blauB3Hex}`;
console.log({ergebnisB3});

// B-4
const colorB4 = 0x02D633;

const rotB4 = 0x02;
const rotB4Rgb = rotB4.toString();

const gruenB4 = 0xD6;
const gruenB4Rgb = gruenB4.toString();

const blauB4 = 0x33;
const blauB4Rgb = blauB4.toString()

const ergebnisB4 = "rgb" + "(" + `${rotB4Rgb}, ${gruenB4Rgb}, ${blauB4Rgb}` + ")";
console.log({ergebnisB4});



// Aufgabe C

// C-1
const colorC1 = "rgb(71, 171, 247)";

const rotC1 = 71;
const rotC1Steigert = 71 + 100;
const rotC1SteigertHex = rotC1Steigert.toString(16);

const gruenC1 = 171;
const gruenC1Hex = gruenC1.toString(16);

const blauC1 = 247;
const blauC1Hex = blauC1.toString(16);

const ergebnisC1 = "#" + `${rotC1SteigertHex}${gruenC1Hex}${blauC1Hex}`;
console.log({ergebnisC1});

// C-2

const colorC2 = "rgb(59, 31, 242)";

const rotC2 = 59;
const rotC2Hex = rotC2.toString(16);

const gruenC2 = 31;
const gruenC2Reduzirt = 31 - 31;
const gruenC2ReduziertHex = gruenC2Reduzirt.toString(16);

const blauC2 = 242;
const blauC2Reduziert = 242 - 200;
const blauC2ReduziertHex = blauC2Reduziert.toString(16);

const ergebnisC2 = "#" + `${rotC2Hex}${gruenC2ReduziertHex}${blauC2ReduziertHex}`;
console.log({ergebnisC2});

// C-3

const colorC3 = 0x6BFF95;

const gruenC3 = 0xFF;
const gruenC3Rgb = gruenC3.toString();

const ergebnisC3 = "rgb" + "(" + `255, ${gruenC3Rgb}, 0` + ")";
console.log({ergebnisC3});

// C-4

const colorC4 = 0x234042;

const rotC4 = 0x23;
const rotC4Rgb = rotC4.toString();
const rotC4RgbSteigert = +rotC4Rgb + rotC4Rgb / 2;

const gruenC4 = 0x40;
const gruenC4Rgb = gruenC4.toString();
const gruenC4RgbSteigert = +gruenC4Rgb + gruenC4Rgb / 2; 

const blauC4 = 0x42;
const blauC4Rgb = blauC4.toString();
const blauC4RgbSteigert = +blauC4Rgb + blauC4Rgb / 2 ;

const ergebnisC4 = "rgb" + "(" + `${parseInt(rotC4RgbSteigert)}, ${parseInt(gruenC4RgbSteigert)}, ${parseInt(blauC4RgbSteigert)}` + ")";
console.log({ergebnisC4});


// C-4

const colorC5 = "rgb(165, 21, 50)";

const rotC5 = 165;
const rotC5Reduzirt = rotC5 - parseInt(rotC5 / 4);
const rotC5ReduziertHex = rotC5Reduzirt.toString(16);

const gruenC5 = 21;
const gruenC5Hex = gruenC5.toString(16);

const blauC5 = 50;
const blauC5Reduziert = blauC5 - parseInt(blauC5 / 4);
const blauC5ReduziertHex = blauC5Reduziert.toString(16);

const ergebnisC5 = "#" + `${rotC5ReduziertHex}${gruenC5Hex}${blauC5ReduziertHex}`;
console.log({ergebnisC5});
