var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

var letters = "abcdefghijklmnopqrstuvwxyz";
var solution = letters.charAt(Math.floor(Math.random() * 26));

document.onkeyup = function (event) {
    var userInput = event.key;

    // Solution Debug Log
    console.log("Game Solution: " + solution);

    // Game Loop
    if (letters.indexOf(userInput) > -1) { //Restricts pressable keys to lowercase letters only.

        // Data Debug Log
        console.log("Loop: " + (10 - guessesLeft) + " | Guess #: " + (guessesLeft) + " | Wins: " + wins + " | Losses: " + losses);

        // Reset on Win, else Retry
        if (userInput == solution) {
            wins++;
            guessesLeft = 9;
            guessesMade = [];
            solution = letters.charAt(Math.floor(Math.random() * 26));
            console.log("-- Game Won --");
            console.log("-- Resetting --");
        }
        else {
            guessesLeft--;
            guessesMade.push(userInput);
            console.log("-- Try Again --");
        }

        // Reset on Loss
        if (guessesLeft == 0) {
            guessesLeft = 9;
            losses++;
            guessesMade = [];
            solution = letters.charAt(Math.floor(Math.random() * 26));
            console.log("-- Game Lost --");
            console.log("-- Resetting --");
        }

        // Update Score
        document.getElementById("scoreboard").innerHTML =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + guessesMade.join(", ") + "</p>";
    }
}