// AUFGABE

// Hier die Zusatzaufgaben zum Üben:
// 1. Schreibe eine Funktion, die aus allen übergebenen Strings den längsten String zurückgibt.

const text1 = "Authoritatively incentivize excellent alignments whereas sources rapidiously.";
const text2 = "Rapidiously incubate enterprise architectures for covalent expertise. Completely deliver cross-media core competencies through extensive technologies. Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly ";
const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical and manufactured products. Uniquely and restore progressive bandwidth rather than timely initiatives. Interactively and exploit client-centric e-business without convergence. Intrinsicly ";

function theLongestString(str1, str2, str3){
    if (str1.length > str2.length && str1.length > str3.length){
        return "text1";
    } else if (str2.length > str1.length && str2.length > str3.length){
        return "text2";
    }
    return "text3";
}

// console.log(theLongestString(text1, text2, text3));

// 2. Schreibe eine Funktion, die alle Vorkommen eines Wortes in einem Text prüft.

function searchWord(word){
    const arrayText = text3.split(" ");
     
    return arrayText.filter(countOfWord => countOfWord === word).length;
}

// console.log(searchWord("exploit"))
// 3. Schreibe eine Funktion, die alle Wörter in einem Text rückwärts geschrieben zurückgibt. Die Position der Worte soll sich dabei aber nicht ändern.
// Beispiel: "the quick brown fox jumps over the lazy dog" => "eht kciuq nworb xof spmuj revo eht yzal god"



function reversedText(str) {
    const arrayStr = str.split(" ");
    const arrayReversed = [];
    for (let i = 0; i < arrayStr.length; i++){
        arrayReversed.push(arrayStr[i].split("").reverse().join(""));
    }
    return arrayReversed.join(" ");
}

console.log(reversedText(text1));

