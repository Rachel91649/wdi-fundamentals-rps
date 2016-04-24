////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
    	return "Tie!";
    }
    else if (playerMove === "rock") {
    	if (computerMove === "paper") {
    		return "Computer Wins!";
    		}
    		else {
    			return "Player Wins!";
    			}
    }
  	else if (playerMove === "paper") {
    	if (computerMove === "scissors") {
    		return "Computer Wins!";
    		}
    		else {
    			return "Player Wins!";
    			}
  	}
    else if (playerMove === "scissors") {
    	if (computerMove === "rock") {
    		return "Computer Wins!";
    		}
    		else {
    			return "Player Wins!";
    			}
   	}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log("Player chooses" + playerMove + "and Computer chooses" + computerMove + ".");
            getWinner(playerMove,computerMove);
        if (getWinner(playerMove,computerMove) === 'player') {
            playerWins += 1;
        } else if (getWinner(playerMove,computerMove) === 'computer') {
            computerWins +=1;
        }    
    }
    return [playerWins, computerWins];
}
playToFive()