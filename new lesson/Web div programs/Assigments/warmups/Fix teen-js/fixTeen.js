function noTeenSum(a, b, c) {
    var summ = 0;
    summ = fixTeen(a) + fixTeen(b) + fixTeen(c);
    return summ;
};

function fixTeen(num) {
    if (((num >= 13) && (num <= 19)) && ((num !== 15)) && ((num !== 16))) {
        return 0;
    }
    else {
        return num;
    };
}
    console.log(noTeenSum(12, 15, 13));