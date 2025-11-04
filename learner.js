let humanScore = 0;
let robotScore = 0;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRobotChoice() {
    let random = randomInt(1, 3);

    let robotChoice;
    
    if (random === 1) {robotChoice = 'rock'}
    else if (random === 2) {robotChoice = 'paper'}
    else {robotChoice ='scissors'};

    console.log('robot choice:', robotChoice);
    return robotChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Enter either \'rock, paper or scissors\'');
    humanChoice = humanChoice.trim().toLowerCase();

    console.log('Your choice:', humanChoice);
    return humanChoice;
}

function computeRound(human, robot) {
    switch (human) {
        case "rock":
            switch (robot) {
                case 'rock':
                    console.log('it\'s a tie');
                    break;
                case 'paper':
                    console.log('You lose: paper beats rock.')
                    robotScore += 1;
                    break;
                case 'scissors':
                    console.log('You win: Rock beats scissors')
                    humanScore += 1;
                    break;
            }
            break;

        case "paper":
            switch (robot) {
                case 'paper':
                    console.log('it\'s a tie');
                    break;
                case 'rock':
                    console.log('You win: paper beats rock.')
                    humanScore += 1;
                    break;
                case 'scissors':
                    console.log('You lose: scissors beats paper')
                    robotScore += 1;
                    break;
            }
            break;
        
        case "scissors":
            switch (robot) {
                case 'scissors':
                    console.log('it\'s a tie');
                    break;
                case 'paper':
                    console.log('You win: scissors beats paper.')
                    humanScore += 1;
                    break;
                case 'rock':
                    console.log('You lose: Rock beats scissors')
                    robotScore += 1;
                    break;
            }
            break;
        
        default:
            console.log('Invalid input')
    }
}

function playRound() {
    let hmnChoice = getHumanChoice();
    let rbtChoice = getRobotChoice();

    computeRound(hmnChoice, rbtChoice);

    console.log('Human =', humanScore);
    console.log('Robot =', robotScore);
}

function playGame() {
    for (let i = 0; i <= 4; ++i) {
        playRound();
        console.log('----')
    }

    if (humanScore > robotScore) {
        console.log('You win this game');
    } else if (humanScore < robotScore) {
        console.log('You lose this game');
    } else {
        console.log('Well, you tied');
    }
}
playGame();
