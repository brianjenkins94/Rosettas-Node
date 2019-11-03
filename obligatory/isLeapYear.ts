function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

for (let x = 2010; x <= 2020; x++) {
    if (isLeapYear(x)) {
        console.log(x + " is a leap year.");
    } else {
        console.log(x + " is NOT a leap year.");
    }
}
