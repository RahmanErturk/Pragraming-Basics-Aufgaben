const money = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

function calculateChange(price, amountPaid) {
  let change = amountPaid - price;

  return money.reduce((prev, curr) => {
    const numOfTimesCurrAmountFitInChange = parseInt(change / curr);

    if (numOfTimesCurrAmountFitInChange !== 0) {
      prev += `${numOfTimesCurrAmountFitInChange} x ${curr} €` + " | ";

      change = change % curr;
    }

    return prev;
  }, "");
}

console.log(calculateChange(3.75, 50));
console.log(calculateChange(4.5, 20));
