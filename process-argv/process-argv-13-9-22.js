console.log(" ");
console.log("---Umgebung------");
console.log(" ");

// 1 - Entwickle eine Funktion, welche die aktuell genutzte Node-Version ausgibt.
// 2 - Schreibe eine Funktion, die das Betriebssystem (und die Architektur) ausgibt.
// 3 - Finde mit einer Funktion heraus, in welchem Pfad das Skript gerade ausgeführt wird.
// 4 - Steuere den Aufruf der drei Funktionen über Argumente:
//   -- nutze Begriffe wie "node", "os" oder "directory", um die drei Funktionen zu identifizieren
//   -- schreibe zuerst so, dass nur eine Funktion pro Skriptaufruf ausgeführt wird
//   -- erweitere deinen Code so, dass du beliebig viele Begriffe übergeben kannst und diese dann die passenden Funktionen aufrufen
//   -- füge ein Argument "all" hinzu, welcher alle Funktionen ausführt
//   -- erweitere das Skript nach Belieben mit weiteren Funktionen und Argumenten

const printNodeVersion = () => `Node: ${process.version}`;
const printOSDetails = () => `OS: ${process.platform} (${process.arch})`;
const printPwd = () => `Pfad: ${process.mainModule.path}`;

const [nodePath, scriptPath, ...functions] = process.argv;

/*if (functions.includes("node"))*/ console.log(printNodeVersion());
/*if (functions.includes("os"))*/ console.log(printOSDetails());
/*if (functions.includes("directory"))*/ console.log(printPwd());

// -------------------------------------------------------------

console.log("---Zeit-1------");
console.log(" ");

// 1. Lege eine Funktion an, die die aktuelle Uhrzeit ausgibt.

function time() {
  const time = new Date();
  return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}
console.log(time());

console.log(" ");
console.log("---Zeit-2------");
console.log(" ");

// 2. Erstelle eine Funktion, die das aktuelle Datum ausgibt

function date() {
  const date = new Date();
  return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
}
console.log(date());

console.log(" ");
console.log("---Zeit-3------");
console.log(" ");

// 3. Steuere das Ausgabeformat über ein Argument (YYYY-MM-DD, hh:mm, DD.MM.YY)

const [nodePath2, scriptPath2, ...functions2] = process.argv;

if (functions2.includes("time")) console.log(time());

if (functions2.includes("date")) console.log(date());

if (functions2.includes("currentTime")) console.log(`${time()}\n${date()}`);

console.log(" ");
console.log("---Countdown-1------");
console.log(" ");

// 1 - Entwickle eine Funktion, die einen Countdown ausgibt, der von 30 Sekunden herunterzählt. Jede Sekunde soll die verbleibende Zeit ausgegeben werden

// 2 - Steuere den Countdown über ein Argument

// 3 - Anstatt der Sekunden, lasse auch Minuten oder sogar Stunden zu. Überlege Dir, wie Du Sekunden von Minuten und Stunden unterscheiden kannst

const countDown = (seconds = 5) => {
  let remainingSeconds = +seconds;

  const interval = setInterval(() => {
    // console.clear();
    console.log(remainingSeconds);
    remainingSeconds--;

    if (remainingSeconds < 0) clearInterval(interval);
  }, 1000);
};

const seconds = process.argv[2];
countDown(seconds);
