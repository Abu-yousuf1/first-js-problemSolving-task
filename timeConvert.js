// minute to seconds

function isMinute(minute) {
    const seconds = minute * 60;
    return seconds;
}
const myMinute = isMinute(5);
console.log(myMinute, "seconds")

//--------------- age to day,hours,minute and seconds.

function ageToDays(age) {
    const days = age * 365;
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    console.log(days, "days, ", hours, "hours,", minutes, "Minutes,", seconds, "seconds,")

}
const myAge = ageToDays(21);
