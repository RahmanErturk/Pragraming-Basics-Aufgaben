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
    // console.log(word);
    let pointOfMyWord = 0;
    const pointOfWord = word.split("").reduce((prev, letter) => {
      prev += rankOfLetters.indexOf(letter) + 1;
      // console.log(prev);
      return prev;
    }, 0);
    pointOfMyWord += pointOfWord;
    return pointOfMyWord;
  });
  // console.log(mySentence);
  // console.log(arrOfWordPoints);

  const theWordWithMostHighestPoint =
    mySentence[arrOfWordPoints.indexOf(Math.max(...arrOfWordPoints))];

  if (theWordWithMostHighestPoint.includes(".")) {
    return theWordWithMostHighestPoint.replace(".", "");
  } else if (theWordWithMostHighestPoint.includes(",")) {
    return theWordWithMostHighestPoint.replace(",", "");
  } else {
    return theWordWithMostHighestPoint;
  }
}

// console.log(wordRank("The quick brown fox nworb."));
// console.log(wordRank("Nancy is very pretty."));
// console.log(wordRank("Check back tomorrow, man!"));
// console.log(wordRank("Wednesday is hump day."));

// Lösung 1
function wordRank1(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const onlyAlphanumeric = str.replace(/[^a-z" "]/gi, "");
  console.log(onlyAlphanumeric);
  const arr = onlyAlphanumeric.toLowerCase().split(" ");
  console.log(arr);
  const charValueSum = arr.map((el) => {
    return el.split("").reduce((acc, curr) => {
      return alphabet.indexOf(curr) != -1
        ? acc + alphabet.indexOf(curr) + 1
        : acc + 0;
    }, 0);
  });
  console.log(charValueSum);

  const maxValueIndex = charValueSum.indexOf(Math.max(...charValueSum));
  console.log(maxValueIndex);
  return onlyAlphanumeric.split(" ")[maxValueIndex];
}

//Lösung 2
function wordRank(str) {
  const onlyAlphanumeric = str.replace(/[^a-z" "]/gi, "");
  const arr = onlyAlphanumeric.toLowerCase().split(" ");

  const charValueSum = arr.map((el) => {
    return el.split("").reduce((acc, curr) => {
      return acc + curr.charCodeAt(0) - 96;
    }, 0);
  });
  const maxValueIndex = charValueSum.indexOf(Math.max(...charValueSum));
  return onlyAlphanumeric.split(" ")[maxValueIndex];
}

console.log(wordRank1("Checkxycwcyvxcyc back tomorrow, man!"));
