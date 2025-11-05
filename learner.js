const startButton = document.querySelector('#play-round');
let roundBtn = document.querySelectorAll('.roundBtn');

const humanChoiceSpan = document.querySelector('#human-choice');
const robotChoiceSpan = document.querySelector('#robot-choice');
const robotScoreBoard = document.querySelector('#robot-score');
const humanScoreBoard = document.querySelector('#human-score');

const teller = document.querySelector('#teller');
const teller2 = document.querySelector('#teller-2');

let humanScore;
let robotScore;

let rbtChoice;
let hmnChoice;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRobotChoice() {
    let random = randomInt(1, 3);
    let robotChoice;
    
    if (random === 1) {robotChoice = 'rock'}
    else if (random === 2) {robotChoice = 'paper'}
    else {robotChoice ='scissors'};

    return robotChoice;
}


function computeRound(human, robot) {
    switch (human) {
        case "rock":
            switch (robot) {
                case 'rock':
                    teller.textContent = "It\'s a tie!"
                    break;
                case 'paper':
                    console.log('You lose: paper beats rock.')
                    teller.textContent = "You lose: paper beats rock."
                    robotScore += 1;
                    break;
                case 'scissors':
                    console.log('You win: Rock beats scissors')
                    teller.textContent = "You win: rock beats scissors"
                    humanScore += 1;
                    break;
            }
            break;

        case "paper":
            switch (robot) {
                case 'paper':
                    teller.textContent = "It\'s a tie!"
                    break;
                case 'rock':
                    console.log('You win: paper beats rock.')
                    teller.textContent = "You win: paper beats rock"
                    humanScore += 1;
                    break;
                case 'scissors':
                    console.log('You lose: scissors beats paper')
                    teller.textContent = "You lose: scissors beats paper"
                    robotScore += 1;
                    break;
            }
            break;
        
        case "scissors":
            switch (robot) {
                case 'scissors':
                    teller.textContent = "It\'s a tie!"
                    break;
                case 'paper':
                    console.log('You win: scissors beats paper.')
                    teller.textContent = "You win: scissors beats paper"
                    humanScore += 1;
                    break;
                case 'rock':
                    console.log('You lose: Rock beats scissors')
                    teller.textContent = "You lose: Rock beats scissors"
                    robotScore += 1;
                    break;
            }
            break;
        
        default:
            console.log('Invalid input')
    }
}

function playRound(event) {
    hmnChoice = event.target.textContent;
    hmnChoice = hmnChoice.trim().toLowerCase();
    console.log('your choice:', hmnChoice)
    rbtChoice = getRobotChoice();
    console.log('Round Played')
    
    humanChoiceSpan.textContent = hmnChoice;
    robotChoiceSpan.textContent = rbtChoice;

    computeRound(hmnChoice, rbtChoice);

    console.log('Human =', humanScore);
    console.log('Robot =', robotScore);

    humanScoreBoard.textContent = humanScore;
    robotScoreBoard.textContent = robotScore;

    if (humanScore >= 3 || robotScore >=3) {
        if (humanScore > robotScore) {
            teller2.textContent = "You won this round! It's first to 3";
        } else {
            teller2.textContent = "You lost this round! It's first to 3";
        };
    };
}

function playGame() {
    console.log('round started');

    robotScore = 0;
    humanScore = 0;

    humanScoreBoard.textContent = humanScore;
    robotScoreBoard.textContent = robotScore;
    humanChoiceSpan.textContent = "";
    robotChoiceSpan.textContent = "";
    teller.textContent = "";
    teller2.textContent = "";
}

startButton.addEventListener('click', playGame);
roundBtn.forEach(
    button => {
            button.addEventListener('click', (buttonEvent) => {
                if (humanScore >= 3 || robotScore >=3) {
                    teller.textContent = 'Restart Round';
                } else {
                    playRound(buttonEvent);
                }
            });
    }    
);
