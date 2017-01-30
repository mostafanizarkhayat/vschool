var i;
var lyrics = 
    ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin", 
              "whilen", "livin", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Got", "kiss", 
              "myself", "Im", "so", "pretty"];
        
function sing(i){
var lyricsSpace = "" ;
for (var i = 0; i < lyrics.length; i++) {
 lyricsSpace = lyricsSpace + lyrics[i] + " "; 
}
console.log(lyricsSpace);

}

function printLyricsBackwards() {
    var lyricsString = "";
    for (var i = lyrics.length - 1; i >= 0; i--) {
        lyricsString = lyricsString + lyrics[i] + " ";
    }
    console.log(lyricsString);
}

function everyOtherLyric() {
    var lyricsString = "";
    for (var i = 0; i < lyrics.length; i+=2) {  // Increment i by 2
        lyricsString = lyricsString + lyrics[i] + " ";
    }
    console.log(lyricsString);
}

everyOtherLyric()