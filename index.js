let computerSelection;
let playerSelection;

const choices = ["rock", "paper", "scissors"];

//console.log(getPlayerChoice());
//console.log(getComputerChoice());
getPlayerChoice();
getComputerChoice();
console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);
playRound(playerSelection, computerSelection);



function playRound(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return `Draw!`
    }
    else if(computerSelection == "rock"){
        return console.log((playerSelection == "paper") ? `You Win!` : `You Lose!`);
    }
    else if(computerSelection == "paper"){
        return console.log((playerSelection == "scissors") ? `You Win!` : `You Lose!`);
    }
    else if(computerSelection == "scissors"){
        return console.log((playerSelection == "rock") ? `You Win!` : `You Lose!`);
    }
}

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    if(choiceNum == 0){
        return  computerSelection = choices[0];
    }
    else if(choiceNum == 1){
        return  computerSelection = choices[1];
    }
    else{
        return computerSelection = choices[2];
    }
}

function getPlayerChoice(){
    //playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    //console.log(playerSelection);

    do{
        playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    }
    while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

    return playerSelection;
}