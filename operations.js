function getComputerChoice() {
    let choice;
    let randomvalue = Math.floor((Math.random()) * 3);
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
    let user = prompt("Choose rock, paper or scissors");
    return user.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());