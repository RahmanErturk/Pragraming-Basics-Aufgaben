// write your code here

// Aufgabe: Color Analyzer

const color = "abc";

switch (color) {
  case "red":
    console.log(`${color}, "Q1: Red's a great color on you."`);
    break;

  case "blue":
    console.log(`${color}, "Q1: Blue? Great choice."`);
    break;

  case "green":
    console.log(`${color}, "Q1: Ok. Green it is."`);
    break;
  
  case "yellow":
    console.log(`${color}, "Q1: Not what I would have picked, but yellow is fine."`);
    break;

  default:
    console.log(`${color}, "Q1: The aim of the game is to pick a color."`);
    break;
}

// Aufgabe Grading

const grade = "A";

switch (grade) {
  case "A":
    console.log(`${grade}, "Q2: A - Well done!"`);
    break;

  case "B":
    console.log(`${grade}, "Q2: B - Good on you!"`);
    break;

  case "C":
    console.log(`${grade}, "Q2: C - Good effort"`);
    break;
  
  case "D":
    console.log(`${grade}, "Q2: D - Try harder next time..."`);
    break;

  default:
    console.log(`${grade}, "Q2: Yikes..."`);
    break;
}

// Aufgabe Fruits

const fruits = "apple";

switch (fruits) {
  case "apple":
    console.log(`${fruits}, "Q3: An apple a day keeps the doctor away."`);
    break;

  case "banana":
    console.log(`${fruits}, "Q3: Bananas are full of potassium.`);
    break;

  case "orange":
    console.log(`${fruits}, "Q3: Yep, oranges. Great choice."`);
    break;
  
  case "strawberry":
    console.log(`${fruits}, "Q3: Yep, oranges. Great choice."`);
    break;

  default:
    console.log(`${fruits}, "Q3: PICK A FRUIT"`);
    break;
}

// Aufgabe Percentage Complete

const percentageComplate = 120;

if (percentageComplate <= 30) {
  console.log("Q4: Still a long way to go");
} else if (percentageComplate > 30 && percentageComplate <= 50) {
  console.log("Q4: Slowly getting there");
} else if (percentageComplate > 50 && percentageComplate <= 80) {
  console.log("Q4: You can do it!");
} else if (percentageComplate > 81 && percentageComplate <= 99) {
  console.log("Q4: This is the last push!");
} else if (percentageComplate === 100) {
  console.log("Q4: You're there. Well done!");
} else {
  console.log("Q4: You should enter a value between 0 and 100!");
}