function getComputerChoice(){
    let choice;
    let randomvalue = Math.floor((Math.random())*3);
    switch (randomvalue){
        case 0:
            choice="Rock";
            break;
        case 1:
            choice="Paper";
            break;
        case 2:
            choice="Scissor";
            break;
    }
    return choice;
}

console.log(getComputerChoice());