function formatMoney(stringToCurr) {
    var withCurrency = "";
    var count = 0;
    for (var i = stringToCurr.length - 1; i >= 0; i--) {
        count++;
        if (count == 3 && i != 0) {
            withCurrency += stringToCurr[i] + ",";
            count = 0;
        }
        else {
            withCurrency += stringToCurr[i];
        }
    }
    withCurrency = withCurrency.split("").reverse().join("");
    return withCurrency;
}
console.log(formatMoney("123456789") + " L.L.");
console.log(formatMoney("1000000000000000000000000000000000000000000000") + " L.L.");