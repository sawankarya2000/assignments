/*
        Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
    */

function wait(n) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve("Promise resolved"), 1000*n);   
    })
}

wait(2).then((result) => console.log(result));