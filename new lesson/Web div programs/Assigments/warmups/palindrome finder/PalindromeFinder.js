function palindromeFinder(isPalindrome) {
    var onlyLetters = "";
    var everyThingElse = "";
    var newstr= 0;
//    for (var i = 0; i < isPalindrome.length; i++) {
//        if (isPalindrome.match ([a - zA - Z]/g)) {
//            onlyLetters = onlyLetters + isPalindrome[i].toLowerCase();
//        }
//        else {
//            everyThingElse = everyThingElse + isPalindrome[i];
//        }
//    }
    // isPalindrome=isPalindrome.match (/[a-z A-Z]/g);
    onlyLetters=isPalindrome.replace(/[ ]|[?]|[!]|[,]/g,"").toLowerCase();
//isPalindrome=isPalindrome.toLowerCase();
    console.log("new: "+onlyLetters);
    var backi=onlyLetters.length;
    for (var j = 0; j < onlyLetters.length/2; j++) {
        if (onlyLetters[j] == onlyLetters[backi] ){
            backi--;
            newstr ++;
             console.log(onlyLetters[j] +"=="+ onlyLetters[backi]);
        }        
    }
    if(backi%2==0)
        
    {
        if(newstr==backi/2)
        return true;}
    else{
         if(newstr==(backi-1)/2)
        return true;
    }
    return false;
}
console.log(palindromeFinder("hiba  h!aBih"));
