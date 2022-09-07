// Aufgabe 1

const specialMultiply = (num1, num2) => {
  if (num2 === undefined) {
    const innerFunc = (num3) => num1 * num3;
    return innerFunc;
  } else {
    return num1 * num2;
  }
};

// const double = specialMultiply(3);
// console.log(double(5));

console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}....

console.log("--------------------");

// Aufgabe 2

function guessingGame(amount) {
  let answer = Math.floor(Math.random() * 10);
  console.log(answer);
  let guesses = 0;
  return (closure = (guess) => {
    guesses++;
    if (guesses < amount) {
      if (guess === answer) {
        return `You got it!`;
      } else if (guess > answer) {
        return `Your guess is too high!`;
      } else {
        return `Your guess is too low!`;
      }
    } else if (guesses === amount) {
      if (guess === answer) {
        return `You got it!`;
      } else return `No more guesses the answer was ${answer}`;
    } else {
      return `You are all done playing!`;
    }
  });
}

const game = guessingGame(4);
console.log(game(1)); // "You're too low!"
console.log(game(8)); // "You're too high!"
console.log(game(5)); // "You're too low!"
console.log(game(7)); // "You got it!"
console.log(game(1)); // "You are all done playing!"

const game2 = guessingGame(3);
console.log(game2(5)); // "You're too low!"
console.log(game2(3)); // "You're too low!"
console.log(game2(1)); // "No more guesses the answer was 0"
console.log(game2(1)); // "You are all done playing!"

// Aufgabe 3
// https://dmitripavlutin.com/javascript-closures-interview-questions/

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`; // Wenn wir diesen Ausdruck in Funktion log nehmen würden, bekommen wir dann 3 beim Console.
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => [10]
