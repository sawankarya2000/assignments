/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now()), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now()), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now()), 3000);
  });
}

function calculateTime() {
  let currentDate = Date.now();
  waitOneSecond().then((milliseconds) => {
    console.log(
      "waitOneSecond() took " + (milliseconds - currentDate) + " milliseconds"
    );
    return waitTwoSecond();
  })
  .then((milliseconds) => {
    console.log(
        "waitTwoSecond() took " + (milliseconds - currentDate) + " milliseconds"
      )
      return waitThreeSecond();
  })
  .then((milliseconds) =>
  console.log(
    "waitThreeSecond() took " + (milliseconds - currentDate) + " milliseconds"
  ));
}

calculateTime();