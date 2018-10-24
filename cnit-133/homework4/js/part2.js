function printAllTables() {
    var finalString = "";
    const principal = 1000;
    for (let i = 5; i <= 10; i++) {
        finalString += "<article class='entry'><h4 class='title'>" + i + "% Interest Rate</h4>";
        finalString += "<table class='alternating center-text tables'><tr><th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th></tr>";
        for (let j = 1; j <= 10; j++) {
            finalString += "<tr><td>" + j + "</td><td>" + getBalance(j, principal, i) + "</td><td>" + (i / 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + "</td></tr>";
        }
        finalString += "</table></article>";
    }
    return finalString;
}

function getBalance(year, principal, rate) {
    let balance = principal * Math.pow((1 + (rate / 100)), year);
    return balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}