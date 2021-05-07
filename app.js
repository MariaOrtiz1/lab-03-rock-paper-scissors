// import functions and grab DOM elements
import { opponentPick } from './utils.js';
import { rockPaperScissors } from './utils.js';

const playButtonClick = document.querySelector('#playButton');
const totalWinsDisplay = document.querySelector('#totalWins');
const totalLossesDisplay = document.querySelector('#totalLosses');
const totalPlaysDisplay = document.querySelector('#totalPlays');
const totalDrawsDisplay = document.querySelector('#totalDraws');
const resultsDisplay = document.querySelector('#results');
const colorDisplay = document.querySelector('.userResults');
// initialize state
let totalWinsResults = 0;
let totalPlaysResults = 0;
let totalDrawsResults = 0; 
let totalLossesResults = 0;


// set event listeners 
playButtonClick.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input:checked');
    const userChoice = selectedChoice.value;
    
    let opponentChoice = Math.ceil(Math.random() * 3);
    if (rockPaperScissors(userChoice, opponentPick(opponentChoice)) === 'won') {
        totalPlaysResults++;

        totalWinsResults++;
        colorDisplay.style.backgroundColor = 'green';
        totalPlaysDisplay.textContent = `Total Matches: ${totalPlaysResults}!`;
        totalWinsDisplay.textContent = `Total Victories: ${totalWinsResults}!`;
        totalLossesDisplay.textContent = `Total Defeats: ${totalLossesResults}!`;
        totalDrawsDisplay.textContent = `Total Ties: ${totalDrawsResults}!`;
        resultsDisplay.textContent = `You won! Put your coins back in your bag, you just got a free meal!`;

    } else if (rockPaperScissors(userChoice, opponentPick(opponentChoice)) === 'lost') {
        totalPlaysResults++;

        totalLossesResults++;
        colorDisplay.style.backgroundColor = 'red';
        totalPlaysDisplay.textContent = `Total Matches: ${totalPlaysResults}!`;
        totalWinsDisplay.textContent = `Total Victories: ${totalWinsResults}!`;
        totalLossesDisplay.textContent = `Total Defeats: ${totalLossesResults}!`;
        totalDrawsDisplay.textContent = `Total Ties: ${totalDrawsResults}!`;
        resultsDisplay.textContent = `Oh no....you lost. Hope you have enough gold to pay for everyone!`;

    } else if (rockPaperScissors(userChoice, opponentPick(opponentChoice)) === 'tie') {
        totalPlaysResults++;
        totalDrawsResults++;
        colorDisplay.style.backgroundColor = 'blue';
        totalPlaysDisplay.textContent = `Total Matches: ${totalPlaysResults}!`;
        totalWinsDisplay.textContent = `Total Victories: ${totalWinsResults}!`;
        totalLossesDisplay.textContent = `Total Defeats: ${totalLossesResults}!`;
        totalDrawsDisplay.textContent = `Total Ties: ${totalDrawsResults}!`;
        resultsDisplay.textContent = `You still have a chance to win! Give it another shot!`;
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
