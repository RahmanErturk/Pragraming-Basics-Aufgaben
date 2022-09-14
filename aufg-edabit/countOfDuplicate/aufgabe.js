function duplikate(str) {
  const arrFromStr = str.toLowerCase().split("").sort()
  const newArr = []
  arrFromStr.forEach((elem) => {
    if(arrFromStr.indexOf(elem) !== arrFromStr.lastIndexOf(elem)){
      newArr.push(elem)
    }
  })
  console.log(newArr);
  if(newArr.length === 0) return 0
  const filteredArr = []
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i + 1] !== newArr[i]) filteredArr.push(newArr[i])
  }
  return `${filteredArr.length}: ${filteredArr.join(", ")}`;
}

// function duplikate(text) {
//   const caseInsesitive = text.toLowerCase().split("");
//   const result = caseInsesitive.reduce((acc, el) => {
//     if (acc[el] === undefined) acc[el] = 0;
//     acc[el] += 1;
//     return acc;
//   }, {});
//   const values = Object.values(result);
//   return values.filter((el) => el > 1).length;
// }
// console.log(duplikate("aaabbcde"));
// console.log(duplikate("aabbbccdd"));
// console.log(duplikate("22dd33sst"));

console.log(duplikate("abcde"));
console.log(duplikate("aabbcde"));
console.log(duplikate("aabBcde"));
console.log(duplikate("aA11"));
console.log(duplikate("aabbccdd"));
console.log(duplikate("aabbb"));