function findUniques(array1, array2) {
    var uniqueToArray1 = array1.filter(function(item) {
        return array2.indexOf(item) === -1;
    });
    var uniqueToArray2 = array2.filter(function(item) {
        return array1.indexOf(item) === -1;
    });
    return uniqueToArray1.concat(uniqueToArray2);
}
console.log(findUniques([1, 2, 3, "Hey", "Hi", 4], [1, 2, "Yo", 3, 5, 6, 7, "Hey", 8]));
