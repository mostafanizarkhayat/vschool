var sumArr=0;
function arrSum(arr){
    for(var i=0 ; i<arr.length ; i++){
       sumArr = sumArr+Number(arr[i]); 
    }
    console.log(sumArr);
}
var array = [2, 5, 7, 9];
arrSum(array);