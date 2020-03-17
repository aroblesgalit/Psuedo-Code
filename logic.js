// * With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock paper scissors.

// * Try to break it down into steps that you could code out.

// * Think of basic elements like loops, if-else statements, arrays, alerts, etc.


// * Be prepared to share your outlines approach.


// Create array of Rock, Paper, Scissors
var array = ["rock", "paper", "scissors"];

// Use Math.random() to choose from array
var compChoice = Math.floor(Math.random() * 2);
console.log(compChoice);

// Keep Score
var wins = 0;
var loses = 0;
var ties = 0;

// Alert chosen item using if/else statement
// Have users play the game 10 times, then show them their total scores.
for (var i = 0; i < 10; i++) {

    // User chooses rock, paper, scissor
    var user = prompt("Do you choose rock, paper, or scissors?");

    if (user === "rock") {

        if (compChoice === 0) {
            alert("Computer chooses " + array[0] + ". It's a tie!");
        } else if (compChoice === 1) {
            alert("Computer chooses " + array[1] + ". Computer wins!");
        } else {
            alert("Computer chooses " + array[2] + ". You win!");
        }
    
    } else if (user === "paper") {
    
        if (compChoice === 0) {
            alert("Computer chooses " + array[0] + ". You win!");
        } else if (compChoice === 1) {
            alert("Computer chooses " + array[1] + ". It's a tie!");
        } else {
            alert("Computer chooses " + array[2] + ". Computer wins!");
        }
    
    } else if (user === "scissors") {
    
        if (compChoice === 0) {
            alert("Computer chooses " + array[0] + ". Computer wins!");
        } else if (compChoice === 1) {
            alert("Computer chooses " + array[1] + ". You win!");
        } else {
            alert("Computer chooses " + array[2] + ". It's a tie!");
        }

    }

}
