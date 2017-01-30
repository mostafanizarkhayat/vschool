function getnb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
module.exports.playersWinners = function(player1) {
    
    var arr = ["Rock", "Papper", "Scissors"];
    var startRandom = getnb(0, 2);
    var computer = arr[startRandom];
    console.log("player1 ="+player1+" computer= "+ computer)
    if ((player1 == "Rock" && computer == "Scissors") || (player1 == "Scissors" && computer == "Papper") || (player1 == "Papper" && computer == "Rock")) {
        console.log("player1 won")
    }
    else if ((computer == "Rock" && player1 == "Scissors") || (computer == "Scissors" && player1 == "Papper") || (computer == "Papper" && player1 == "Rock")) {
        console.log("Computer won")
    }
    else if (player1 == computer) {
        console.log("Draw")
    }
}