//h1
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

//Buttons
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var rstButton = document.getElementById("rst");

//PlayerScores 
var p1Score = 0;
var p2Score = 0;

//State of the Game BOOLEAN
var gameOver = false;

//Max Score & NumberInput
var winningScore = 5;
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

//Event Listeners
p1Button.addEventListener("click", function() {
    if (gameOver === false) {
        p1Score++;

        if (p1Score === winningScore) {
            console.log("GAME OVER!");
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }

});

p2Button.addEventListener("click", function() {
    if (gameOver === false) {
        p2Score++;

        if (p2Score === winningScore) {
            console.log("GAME OVER!");
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }

});

rstButton.addEventListener("click", function() {
    console.log("Reset clicked.")

    //Resetting everything
    resetGame();
});

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    //Number hier ist wichtig, da sonst der winningScore ein String wäre! 

    resetGame();
});

//Functions

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}