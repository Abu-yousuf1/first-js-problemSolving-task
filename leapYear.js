function leapYear(year) {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        return true
    }
    return false
}

const checkLeapYear = leapYear(2100);
console.log(checkLeapYear);