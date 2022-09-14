// function missingNum (array) {
//   const sortedArr = array.sort((a,b) => a - b);
//   if(!sortedArr.includes(1)){
//     return 1;
//   } else if(!sortedArr.includes(10)) {
//     return 10;
//   }
//   for (let i = 1; i < sortedArr.length; i++) {
//     if(sortedArr[i] - sortedArr[i - 1] === 2){
//       return (sortedArr[i] + sortedArr[i - 1]) / 2;
//     };    
//   };
// }

function missingNum(array) {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return parseInt(myArray.filter((elem) => !array.includes(elem)).join(""))
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log(missingNum([5, 2, 3, 8, 4, 7, 9, 6, 10]));