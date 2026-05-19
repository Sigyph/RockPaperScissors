function getComputerChoice() {
    let choice;
    const randomvalue = Math.floor((Math.random()) * 3);
    switch (randomvalue) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}
function getHumanChoice() {
    const user = prompt("Choose rock, paper or scissors");
    return user.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result;

    if (computerChoice === "Rock") {
        switch (humanChoice) {
            case "rock":
                console.log("Tie!" + "Computer chose " + computerChoice);
                break;
            case "scissors":
                console.log("You lose! " + "Computer chose " + computerChoice);
                computerScore++;
                break;
            case "paper":
                console.log("You win! " + "Computer chose " + computerChoice);
                humanScore++;
                break;
            default:
                console.log("Your text has errors");
        }
    }
    else if (computerChoice === "Paper") {
        switch (humanChoice) {
            case "paper":
                console.log("Tie!" + "Computer chose " + computerChoice);
                break;
            case "rock":
                console.log("You lose! " + "Computer chose " + computerChoice);
                computerScore++;
                break;
            case "scissors":
                console.log("You win! " + "Computer chose " + computerChoice);
                humanScore++;
                break;
            default:
                console.log("Your text has errors");
        }
    }
    else {
        switch (humanChoice) {
            case "scissors":
                console.log("Tie!" + "Computer chose " + computerChoice);
                break;
            case "paper":
                console.log("You lose! " + "Computer chose " + computerChoice);
                computerScore++;
                break;
            case "rock":
                console.log("You win! " + "Computer chose " + computerChoice);
                humanScore++;
                break;
            default:
                console.log("Your text has errors");
        }
    }
    console.log("Current scores => Computer: "+computerScore+"  "+ "User: "+humanScore);
}


let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
