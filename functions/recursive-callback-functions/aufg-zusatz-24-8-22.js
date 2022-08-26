// Aufgabe 1

function countTrue(arr) {
    let trueCounter = 0;
    arr.forEach(element => {
       if(element === true) {
            trueCounter++         
       } 
    });
    return trueCounter;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));



// Aufgabe 2

function numInStr(arr) {
    // const myArray = []
    // const numFinder = arr.forEach((element) => {
    //     let wordContainsNumber = false;
    //     element.split("").forEach((letter) => {
    //         if(!isNaN(letter) && letter !== " "){
    //             wordContainsNumber = true;
    //         }
    //     });
    //     if(wordContainsNumber) {
    //         myArray.push(element)
    //     }
    // })
    // return myArray
    return arr.filter((element) => {
        for( let i = 0; i < element.length; i++){
            if(!isNaN(element.charAt(i)) && !(element.charAt(i) === " ") ){
            return element;
            };
        };
    })
}

console.log(numInStr(["1a", "a", "2b", "b"]));  
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));


// Aufgabe 3

function maxItems(price, money) {
    const sortedPrice = price.sort((a, b) => a - b)        
    const myArray = []
    for(let i = 0; i < sortedPrice.length; i++){
        money = money - sortedPrice[i]
        if(money > 0){
            myArray.push(sortedPrice[i])
        } 
    }
    if(myArray.length === 0) {
        return "Nicht genug Geld!"
    }; return myArray.length
}

console.log(maxItems(["10", "7", "2", "60"], "20"));
console.log(maxItems(["1", "1", "2"], "3"));
console.log(maxItems(["15", "5", "30", "30", "10"]));