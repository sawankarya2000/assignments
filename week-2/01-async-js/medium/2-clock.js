let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let amPm = hours >= 12 ? 'PM' : 'AM';

hours = hours == 0 ? 12 : hours;

displayClock(hours, minutes, seconds, amPm);
setInterval(clock, 1000);

function clock() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  if (hours > 12) {
    hours = 1;
    amPm = amPm == 'AM' ? 'PM' : 'AM';
  }
  displayClock(hours, minutes, seconds, amPm);
}

function displayClock(hours, minutes, seconds, amPm) {
    console.clear();
    console.log(
      `${hours < 10 ? "0" : ""}` +
        hours +
        ":" +
        `${minutes < 10 ? "0" : ""}` +
        minutes +
        "::" +
        `${seconds < 10 ? "0" : ""}` +
        seconds + " " +
        amPm
    );
}
