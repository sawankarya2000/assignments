/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

let condition = true;
function sleep (seconds) {
    let currentDate = new Date();
    while(new Date() - currentDate < seconds){
        //Do nothing
    }
}

sleep(10000);
console.log("Sleep time over");