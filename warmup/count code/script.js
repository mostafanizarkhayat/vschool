function countCode(strCode){
    var counter = 0;
    for (var i =0 ; i< strCode.length ; i++){
        if(strCode[i]==="c" && strCode[i+1]=="o" && strCode[i+3]==="e"){
            counter = counter+1;
        }
    }
 return counter;
}
console.log (countCode("codeihwoeifhwcomeoihfoiueqwcope"));