function inCaps(letter) {
    return letter === letter.toUpperCase();
   
function antiCaps
}
var count=0
}
if ()
 
  /////////////// RE DO !! ///////////////////  
    
    
    function isCaps(letter) {  
 return letter === letter.toUpperCase();
}


function antiCaps(stringVar){
   var newstring = "";
   for(var i = 0; i < stringVar.length ; i++){
       if (isCaps(stringVar[i])===true){
           newstring = newstring + stringVar[i].toLowerCase();    
       }    
       else {
           newstring = newstring + stringVar[i].toUpperCase();
       }     
   }
   return newstring;
}
console.log(antiCaps("Hello"));
console.log(antiCaps("racEcar"));
console.log(antiCaps("bAnAnA"));