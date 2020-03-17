

// Create array of Rock, Paper, Scissors
// var array = ["rock", "paper", "scissors"];


var wins=0;
var loss=0;
var ties=0;

for (var i = 1; i < 10; ) {
    var user = prompt("Do you choose rock, paper, or scissors?");
    // Use Math.random() to choose from array
    var compChoice = Math.floor(Math.random() * 2);
// Alert chosen item using if/else statement
    if (user === "rock") {
        if (compChoice==0) {
            alert("Computer chooses rock");
                alert("You have tied!");ties++;
        } else if (compChoice==1) {
            alert("Computer chooses paper");
                alert("You Lose!");loss++;
        } else if (compChoice==2) {
            alert("Computer chooses scissors");
                alert("You Win!");wins++;
        } else {
            alert("Something went wrong, please try again");
        }        
    } else if (user === "paper") {
        if (compChoice==0) {
            alert("Computer chooses rock");
                alert("You Win!");wins++;
        } else if (compChoice==1) {
            alert("Computer chooses paper");
                alert("You have tied!");ties++;
        } else if (compChoice==2) {
            alert("Computer chooses scissors");
                alert("You Lose!");loss++;
        } else {
            alert("Something went wrong, please try again");
        }
    } else if (user === "scissors") {
        if (compChoice==0) {
            alert("Computer chooses rock");
                alert("You Lose!");loss++;
        } else if (compChoice==1) {
            alert("Computer chooses paper");
                alert("You Win!");wins++;
        } else if (compChoice==2) {
            alert("Computer chooses scissors");
                alert("You have tied!");ties++;
        } else {
            alert("Something went wrong, please try again");
        }
    } else {
        alert("Invalid Choice, please choose again");
    }
    i=wins+loss+ties;
}
alert("Game Over");