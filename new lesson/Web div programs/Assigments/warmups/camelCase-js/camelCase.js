function camelCase(oldStr){
    var noSpace= "";
    
    for(var i=0; i<oldStr.length ; i++){
       // console.log(i);
        if ((oldStr[i] === "-") || (oldStr[i] === "_") || (oldStr[i] === " ")) {
              noSpace = oldStr.slice(0,i)+oldStr[i+1].toUpperCase()+ oldStr.slice(i+2,oldStr.length);
            oldStr=noSpace;
        }
         
       
    }
    return noSpace;
}
    
 console.log(camelCase("Hey-bro_your-cool_with the-camel"));    
    