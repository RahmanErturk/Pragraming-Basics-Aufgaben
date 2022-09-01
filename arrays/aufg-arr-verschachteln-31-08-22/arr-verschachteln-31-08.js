// Loesung 1

function arrayNesting(arr1, arr2) {
  if (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  ) {
    return true;
  } else return false;
}

// Loesung 2

// const canNest = (a,b) => {
//     const x = a.sort();
//     const y = b.sort();

//     if(x[0] > y[0] && x[x.length-1] < y[y.length-1]){
//     return true;
//     } else return false;
// }

console.log(arrayNesting([1, 2, 3, 4], [0, 6]));
console.log(arrayNesting([3, 1], [4, 0]));
console.log(arrayNesting([9, 9, 8], [8, 9]));
console.log(arrayNesting([1, 2, 3, 4], [2, 3]));
