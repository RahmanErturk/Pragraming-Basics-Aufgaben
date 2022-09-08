const rankOfLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function wordRank(myStr) {
  const mySentence = myStr.toLowerCase().split(" ");

  const arrOfWordPoints = mySentence.map((word) => {
    let pointOfMyWord = 0;
    const pointOfWord = word.split("").reduce((prev, letter) => {
      prev += rankOfLetters.indexOf(letter) + 1;
      return prev;
    }, 0);
    pointOfMyWord += pointOfWord;
    return pointOfMyWord;
  });

  return mySentence[arrOfWordPoints.indexOf(Math.max(...arrOfWordPoints))];
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Wednesday is hump day."));
