const computerDiceOne = document.querySelector('.computer-dice-one');
const computerDiceTwo = document.querySelector('.computer-dice-two');
const playerDiceOne = document.querySelector('.player-dice-one');
const playerDiceTwo = document.querySelector('.player-dice-two');   
const computerCreditsElement = document.querySelector('.computer-credits');
const playerCreditsElement = document.querySelector('.player-credits');   
const higherButton = document.querySelector('.higher-button');
const lowerButton = document.querySelector('.lower-button');
const goButton = document.querySelector('.go-button');
const rollButton = document.querySelector('.roll-button');
const messageElement = document.querySelector('.message-box');
const computersScore = document.querySelector('.computers-score-text');
const playersScore = document.querySelector('.players-score-text');

let computerCredits = 10;
let playerCredits = 10;
let computerTotal = 0;
let playerTotal = 0;
let computerScore = 0;
let playerScore = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDice() {
    const computerDice1 = rollDice();
    const computerDice2 = rollDice();
    const playerDice1 = rollDice();
    const playerDice2 = rollDice();    
    computerTotal = computerDice1 + computerDice2;
    playerTotal = playerDice1 + playerDice2;
    computerDiceOne.innerHTML = getDiceUnicode(computerDice1);
    computerDiceTwo.innerHTML = getDiceUnicode(computerDice2);
    playerDiceOne.innerHTML = getDiceUnicode(playerDice1);
    playerDiceTwo.innerHTML = getDiceUnicode(playerDice2);
    messageElement.textContent = `Computer Total: ${computerTotal}, Player Total: ${playerTotal}`;
}

function getDiceUnicode(diceValue) {
    const unicodeStart = 9855;
    return `&#${unicodeStart + diceValue};`;
}

function updateCredits() {
    computerCreditsElement.textContent = computerCredits;
    playerCreditsElement.textContent = playerCredits;
}

function handleGuess(isHigher) {
    if ((isHigher && playerTotal > computerTotal) || (!isHigher && playerTotal < computerTotal) ) {
        computerCredits -= 1;
        messageElement.textContent = 'Correct! Player wins!';       
    } else if (playerTotal == computerTotal) {
        messageElement.textContent = 'You are lost both(';
        computerCredits -= 1;
        playerCredits -= 1;
    } else {
        playerCredits -= 1;
        messageElement.textContent = 'Wrong! Computer wins!';
    }
    checkGameStatus();
    updateCredits();
}

function resetGame() {
    computerCredits = 10; 
    playerCredits = 10;
    computerTotal = 0; 
    playerTotal = 0; 
    computerDiceOne.innerHTML = '';
    computerDiceTwo.innerHTML = '';
    playerDiceOne.innerHTML = '';
    playerDiceTwo.innerHTML = '';
    messageElement.textContent = 'New game started! Ready to play!';        
    updateCredits(); 
    goButton.disabled = true;
    higherButton.disabled = true;
    lowerButton.disabled = true;
    rollButton.disabled = false; 
    updateScore();
}

goButton.addEventListener('click', function() {
    goButton.disabled = true;
    higherButton.disabled = false;
    lowerButton.disabled = false;
    updateDice();
});

higherButton.addEventListener('click', function() {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    rollButton.disabled = false;
    handleGuess(true);
});

lowerButton.addEventListener('click', function() {
    handleGuess(false);
    higherButton.disabled = true;
    lowerButton.disabled = true;
    rollButton.disabled = false;
});

goButton.disabled = false;
higherButton.disabled = true;
lowerButton.disabled = true;
rollButton.disabled = true;

rollButton.addEventListener('click', function() {
    goButton.disabled = true;
    rollButton.disabled = true;
    higherButton.disabled = false; 
    lowerButton.disabled = false;  
    updateDice();
});

function checkGameStatus() {
    if (computerCredits <= 0) {
        messageElement.textContent = 'Game over! The computer has no credits left. Starting a new game...';
        resetGame();
        playerScore += 1;
    } else if (playerCredits <= 0) {
        messageElement.textContent = 'Game over! The player has no credits left. Starting a new game...';
        computerScore += 1;
        resetGame();
    } else {
        rollButton.disabled = false; 
    }
    updateScore();
}

function updateScore() {
    computersScore.textContent = `Computer score: ${computerScore}`;
    playersScore.textContent = `Player score: ${playerScore}`;       
}
