var phrase = 'slimy smelly solution';  
function isInArray(days, day) {
    return days.indexOf(day.toLowerCase()) > -1;
}
function letterFreq(letterNum) {
    var arrayL=[];
    for(var j = 0 ; j < phrase.length ; j++)
   {
        var checkString=phrase[j];
       var sumLetter=1;
       for (var i = j+1 ; i < phrase.length ; i++) 
       {
           console.log(isInArray(arrayL,checkString));
        
           if (checkString===phrase[i] && !isInArray(arrayL,checkString)) 
            {  sumLetter=sumLetter+1;
            
              arrayL.push(checkString);}
       }
    console.log(checkString+" count : "+ sumLetter);
   }
}
letterFreq(phrase);