/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    waitOneSecond().then((milliseconds) => console.log("waitOneSecond() took " + (milliseconds - currentDate) + " milliseconds"));
    waitTwoSecond().then((milliseconds) => console.log("waitTwoSecond() took " + (milliseconds - currentDate) + " milliseconds"));
    waitThreeSecond().then((milliseconds) => console.log("waitThreeSecond() took " + (milliseconds - currentDate) + " milliseconds"));

    // Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((results) => {
    //     results.forEach((milliseconds, index) => {
    //         console.log((index + 1) + " took " + (milliseconds - currentDate) + " milliseconds.");
    //     })
    // })
}

calculateTime();