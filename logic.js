// Create array of Rock, Paper, Scissors
var array = ["rock", "paper", "scissors"];

// Keep Score
var wins = 0;
var losses = 0;
var ties = 0;

// Have users play the game 10 times, then show them their total scores.
for (var i = 0; i < 10; i++) {

    // User chooses rock, paper, scissor
    var user = prompt("Do you choose rock, paper, or scissors?");

    // Use Math.random() to choose from array
    var compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice);

    // Alert chosen item using if/else statement
    if (user === "rock") {

        if (compChoice === 0) {
            alert("Computer chooses " + array[0] + ". It's a tie!");
            ties++;
        } else if (compChoice === 1) {
            alert("Computer chooses " + array[1] + ". Computer wins!");
            losses++;
        } else {
            alert("Computer chooses " + array[2] + ". You win!");
            wins++;
        }

    } else if (user === "paper") {

        if (compChoice === 0) {
            alert("Computer chooses " + array[0] + ". You win!");
            wins++;
        } else if (compChoice === 1) {
            alert("Computer chooses " + array[1] + ". It's a tie!");
            ties++;
        } else {
            alert("Computer chooses " + array[2] + ". Computer wins!");
            losses++;
        }

    } else if (user === "scissors") {

        if (compChoice === 0) {
            alert("Computer chooses " + array[0] + ". Computer wins!");
            losses++;
        } else if (compChoice === 1) {
            alert("Computer chooses " + array[1] + ". You win!");
            wins++;
        } else {
            alert("Computer chooses " + array[2] + ". It's a tie!");
            ties++;
        }

    }

    alert("Wins: " + wins + " -- Losses: " + losses + " -- Ties: " + ties);
    
}