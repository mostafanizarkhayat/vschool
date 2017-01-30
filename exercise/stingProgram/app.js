var readlineSync = require("readline-sync");

//first nb 
var upperCaseWord = readlineSync.question ("Please Enter a word to make it upper Case: ");
console.log("Upper Case: "+upperCaseWord.toUpperCase());

//second number
var charNumb = readlineSync.question ("Please Can You Give Me the lenght of strg: ");
console.log ("the length is: " + charNumb.length);

//3rd number
var firstNane = readlineSync.question ("Please Can You Give Me your firstname: ");
var secondNAme = readlineSync.question ("Please Can You Give Me your latname: ");
console.log ("your fullName is: " + firstNane.concat(" "+secondNAme));

//4th number
var longMessage = readlineSync.question ("Please Can You enter a long message: ");
if (longmessage.length>=20){
    console.log ("your long message is"+longMessage);
    }else {
    console.log ("your last half of your long message is: " + longMessage.substr(21 , longMessage.length))
}
