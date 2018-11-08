var letters = "abcdefghijklmnopqrstuvwxyz";
var solution = letters.charAt(Math.floor(Math.random() * 26));
console.log("Game Solution: " + solution);


var player = {
    wins: 0,
    losses: 0,
    guessesLeft: 9,
    guessesMade: [],

    reset: function () {
        this.guessesLeft = 9;
        this.guessesMade = [];
        solution = letters.charAt(Math.floor(Math.random() * 26));
    },

    updateScore: function () {
        document.getElementById("scoreboard").innerHTML =
            "<p>Wins: " + this.wins + "</p>" +
            "<p>Losses: " + this.losses + "</p>" +
            "<p>Guesses Left: " + this.guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + this.guessesMade.join(", ") + "</p>";
    },
};

document.onkeyup = function (event) {
    var userInput = event.key;

    // Game Logic
    if (letters.indexOf(userInput) > -1) {
        // Restricts pressable keys to lowercase letters only.
        // When userInput is not found in the string of letters, or index of letters, final value = -1

        // Data Debug Log
        console.log("Loop: " + (10 - player.guessesLeft) + " | Guess #: " + (player.guessesLeft) + " | Wins: " + player.wins + " | Losses: " + player.losses);

        // Reset on Win
        if (userInput === solution) {
            player.wins++;
            player.reset();
            console.log("-- Game Won --");
            console.log("-- Resetting --");
            console.log("Game Solution: " + solution);
        }
        // Retry on Miss
        else {
            player.guessesLeft--;
            player.guessesMade.push(userInput);
            console.log("-- Try Again --");
        }

        // Reset on Loss
        if (player.guessesLeft === 0) {
            player.losses++;
            player.reset();
            console.log("-- Game Lost --");
            console.log("-- Resetting --");
            console.log("Game Solution: " + solution);
        }

        // Update Score after any one Step
        player.updateScore();
    }
};