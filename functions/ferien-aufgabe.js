
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

function getCard(myCard){

    let cardsOfArray = []
    for (let i = 0; i < myCard.length; i++){
        
        const index = parseInt(Math.random()*(myCard.length))
        
        const newCard = myCard.splice(index, 1)
        
        cardsOfArray.push(newCard)
    }
    return cardsOfArray.join(", ")
} 

console.log(getCard(cards))
console.log(cards)