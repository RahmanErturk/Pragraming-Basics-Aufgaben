
function incrementString (strng) {
    const arr = strng.split("");
    const letzteElement = Number(arr[arr.length - 1])

    if (isNaN(letzteElement)){
        arr.push(1);
        return arr.join("")      
    } 
    

    for (let i = 0; i < arr.length; i++){
        if(isNaN(arr[i]) === false) {
         
          const sum = Number(arr[i]) + 1
          return sum
            
        }
       
    }

}


// console.log(incrementString("foo"));
// console.log(incrementString("foo123"));

// console.log(incrementString("foo0042")); 

// console.log(incrementString("foo9")) 

// console.log(incrementString("foo099")); 

// let x = "rahman" - 5;

// console.log(Number.isNaN(x));

// function incrementString(input) {
//     var reg = /[0-9]/;
//     var result = "";
//     if (reg.test(input[input.length - 1]) === true) {
//       input = input.split("");
//       for (var i = 0; i < input.length; i++) {
//         if (parseInt(input[i]) === NaN) {
//           result += input[i];
//         } else if (i === input.length - 1) {
//           result += (parseInt(input[i]) + 1).toString();
//         } else {
//           result += input[i];
//         }
//       }
//       return result;
//     } else if (reg.test(input[input.length - 1]) === false) {
//       return (input += 1);
//     }
//   }
//   console.log("----------------------");


//   console.log(incrementString("foo"));
//   console.log(incrementString("foo23"));
  
//   console.log(incrementString("foo0042")); 
  
//   console.log(incrementString("foo9")) 
  
//   console.log(incrementString("foo099")); 


// Aufgabe 1 (Karte ziehen)

// Implementiere eine Funktion mit dem Namen getCard welche eine zufällige Karte aus dem Array cards entfernt und als String zurückgibt. Wenn man die Funktion getCard 52 mal aufgerufen hat soll sie zurück geben “Der Stapel ist leer”.

const cards = ["2 Pik","3 Pik","4 Pik","5 Pik","6 Pik", "7 Pik", "8 Pik", "9 Pik", "10 Pik", "Bube Pik", "Dame Pik", "König Pik", "Ass Pik", "2 Kreuz","3 Kreuz","4 Kreuz","5 PKreuzik","6 Kreuz", "7 Kreuz", "8 Kreuz", "9 Kreuz", "10 Kreuz", "Bube Kreuz", "Dame Kreuz", "König Kreuz", "Ass Kreuz", "2 Karo","3 Karo","4 Karo","5 Karo","6 Karo", "7 Karo", "8 Karo", "9 Karo", "10 Karo", "Bube Karo", "Dame Karo", "König Karo", "Ass Karo", "2 Herz","3 Herz","4 Herz","5 Herz","6 Herz", "7 Herz", "8 Herz", "9 Herz", "10 Herz", "Bube Herz", "Dame Herz", "König Herz", "Ass Herz"]

const shuffledCards = [];

function shuffleCards(myCard) {
    for (let i = myCard.length; i > 0; i--) {
        const indexNum = parseInt(Math.random()*(myCard.length));
        // console.log(indexNo);
        shuffledCards.push(myCard.splice(indexNum, 1).join(""));
        
    };
    return shuffledCards;
}

console.log(shuffleCards(cards));

function getCard(myCard) {
    
    for (let i = myCard.length; i >= 0; i--) {
        if(myCard.length > 0){
            const indexNo = parseInt(Math.random()*(myCard.length));
            // console.log(indexNo);
            let newCard = myCard.splice(indexNo, 1).join("");
            console.log(newCard);
        } else {
            console.log({shuffledCards});
            return "Der Stapel ist leer";
        };
    };
};
console.log(getCard(shuffledCards));



// Bonus:
// Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.

console.log("----------------- Frage 2 ------------------")

// Aufgabe 2 (Passwort Generator)
// Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
// Die Funktion gibt einen string zurück
// Die Funktion erhält 4 Parameter
// 1. length, eine number, gibt die Länge des Passworts an
// 2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
// 3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
// 4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & * enthalten soll.



const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["@", "!", "$", "%", "&", "*"];
const allCharacters = (capitalLetters + smallLetters + numbers + specialCharacters).replaceAll(/,/g, '');
// console.log(allCharacters);
// console.log(allCharacters.length);


function createPassword(myPass){
    const myPassword = [];
    for(let i=0; i < 5; i++){
        myPassword.push(myPass[parseInt(Math.random()*(myPass.length))]);
    };
    myPassword.splice(myPass[parseInt(Math.random()*(myPass.length))], 1, capitalLetters[parseInt(Math.random()*(capitalLetters.length))],smallLetters[parseInt(Math.random()*(smallLetters.length))], numbers[parseInt(Math.random()*(numbers.length))], specialCharacters[parseInt(Math.random()*(specialCharacters.length))]);
    return myPassword.join("");
};
// console.log(createPassword(allCharacters));





//Aufgabe 3 (Symmetrischer Unterschied)

// Implementiere eine Funktion mit dem namen symmetricDifference(), die zwei Arrays als Parameter erhält und ein Array mit deren symmetrischer Differenz zurückgibt. Das zurückgegebene Array darf nur eindeutige Werte enthalten (keine Duplikate).
// Beispiel:
// symmetricDifference([1, 2], [ ]) sollte [1, 2] zurückgeben
// symmetricDifference([1, 2], [1]) sollte [2] zurückgeben
// symmetricDifference([1, 2], [1, 3]) sollte [2, 3] zurückgeben
// symmetricDifference([1, 2, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
// symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
// symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]) sollte [3, 4, 5] zurückgeben

// function diffy(a, b) {
//     return [
//       ...a.filter((x) => !b.includes(x)),
//       ...b.filter((x) => !a.includes(x)),
//     ];
// }

function symmetricDifference(arr1, arr2) {
    const diffArr = [];
    
        for(let i = 0; i < arr1.length; i++){
            if(!arr2.includes(arr1[i])){
                diffArr.push(arr1[i])
            }
        }
        for(let j = 0; j < arr2.length; j++){
            if(!arr1.includes(arr2[j])){
                diffArr.push(arr2[j])
            }
        }
        // const newArr = []
        // for(let k = 0; k < diffArr.length; k++){
        //     for(let l = 0; l < diffArr.length; l++)
        //         if(diffArr[l] !== diffArr[k]){
        //         newArr.push(diffArr[k]);
        //     }  
        // }
        return diffArr
}

console.log(symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]));