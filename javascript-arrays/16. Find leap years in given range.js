function checkAllLeapYear(start, end) {
    let sta = parseInt(start);
    let en = parseInt(end);
    let leapYear = [];
    for (let i = sta; i <= en; i++) {
        if (i % 4 === 0) {
            leapYear.push(i);
        }
    }
    console.log(leapYear);
}

checkAllLeapYear("1992", "2013")