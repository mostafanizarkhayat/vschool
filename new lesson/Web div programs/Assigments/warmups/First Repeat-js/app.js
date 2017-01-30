function firstRepeat2(str) {
    var found = false;
    for (var i = 0; i < str.length; i++) {
        found = false;
        for (var j = 0; j < str.length; j++) {
            if ((str[i] === str[j]) && (i != j)) {
                found = true;
                j = str.length;
            }
        }
        if (!found) {
            return str[i];
        }
    }
}

console.log(firstRepeat2("ggggggggyxxxkljfvlsjkfga"));