const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const choiceBtn = document.querySelectorAll('.choice');

const winGame = document.querySelector("#win-container")
const winTxt = document.querySelector("#winTxt")

const win1 = document.querySelector("#p1-cir-1");
const win2 = document.querySelector("#p1-cir-2");
const win3 = document.querySelector("#p1-cir-3");

const lose1 = document.querySelector("#cpu-cir-1");
const lose2 = document.querySelector("#cpu-cir-2");
const lose3 = document.querySelector("#cpu-cir-3");

let computerSelection;
let playerSelection;
let winCount = 0;
let loseCount = 0;
let win = false;
let lose = false;

playerColor = "blue";
cpuColor = "red";

const choices = ["rock", "paper", "scissors"];

//console.log(getPlayerChoice());
//console.log(getComputerChoice());
//getPlayerChoice();



//playRound(playerSelection, computerSelection);



choiceBtn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playerSelection = button.id);
        playerSelection = button.id;
        getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);
    })
});



function playRound(playerSelection, computerSelection){

    while(playerSelection != undefined){
        if(computerSelection == playerSelection){
            return `Draw!`
        }
        else if(computerSelection == "rock"){
            //return console.log((playerSelection == "paper") ? `You Win!` : `You Lose!`);
            if(playerSelection == "paper"){
                winCount ++;
                checkWinner();
                if(win){
                   return winner();
                }
            }
            else{
                loseCount ++;
                checkWinner();
            }
            return 
        }
        else if(computerSelection == "paper"){
            //return console.log((playerSelection == "scissors") ? `You Win!` : `You Lose!`);
            if(playerSelection == "scissors"){
                winCount ++;
                checkWinner();
                if(win){
                    return winner();
                }
            }
            return;
        }
        else if(computerSelection == "scissors"){
            //return console.log((playerSelection == "rock") ? `You Win!` : `You Lose!`);
            if(playerSelection == "rock"){
                winCount ++;
                checkWinner();
                if(win){
                    return winner();
                }
            }
            return;
        }
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


function checkWinner(){
    if (winCount < 3 && loseCount < 3){
        win = false;
        lose = false;
    }
    else if (winCount == 3){
        win = true;
    }
    else if(loseCount == 3){
        lose == true;
    }
}

function winner(){
    win3.style.backgroundColor = playerColor;
    winTxt.textContent = "You Win!";
}

function loser(){

}

function restart(){
    
}

/*
function getPlayerChoice(){

    choiceBtn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playerSelection = button.id);
        return playerSelection;
    })
})

    /*
    //playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    //console.log(playerSelection);

    do{
        playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
    }
    while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

    return playerSelection;
}
*/
