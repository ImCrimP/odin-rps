const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const choiceBtn = document.querySelectorAll('.btn');

const winGame = document.querySelector("#win-container");
const winTxt = document.querySelector("#winTxt");

const winDisplay = document.querySelector("#winner");
const explanation = document.querySelector("#explanation");

const p1Choice = document.querySelector("#p1Choice");
const cpuChoice = document.querySelector("#cpuChoice");

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
        if(playerSelection != "restart"){
            getComputerChoice();
            showChoice(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            
        }
        else{
            restart();
        }
        
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);
    })
});



function playRound(playerSelection, computerSelection){

        while(playerSelection != undefined){
            //winDisplay.textContent = '';
            //explanation.textContent = '';

            if(computerSelection == playerSelection){
                winDisplay.textContent = "Draw!"
                explanation.textContent = `${playerSelection.toUpperCase()} ties ${computerSelection.toUpperCase()}`;
                return
            }
            else if(computerSelection == "rock"){
                //return console.log((playerSelection == "paper") ? `You Win!` : `You Lose!`);
                if(playerSelection == "paper"){
                    winCount ++;
                    winDisplay.textContent = 'You Win!';
                    explanation.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
                    fillWin();
                    checkWinner();
                    if(win){
                       return winner();
                    }
                }
                else{
                    loseCount ++;
                    winDisplay.textContent = 'You Lose!';
                    explanation.textContent = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
                    console.log(loseCount);
                    fillLose();
                    checkWinner();
                    if(lose){
                        return loser();
                    }
                }
                return 
            }
            else if(computerSelection == "paper"){
                //return console.log((playerSelection == "scissors") ? `You Win!` : `You Lose!`);
                if(playerSelection == "scissors"){
                    winCount ++;
                    winDisplay.textContent = 'You Win!';
                    explanation.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
                    fillWin();
                    checkWinner();
                    if(win){
                        return winner();
                    }
                }
                else{
                    loseCount ++;
                    winDisplay.textContent = 'You Lose!';
                    explanation.textContent = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;;
                    console.log(loseCount);
                    fillLose();
                    checkWinner();
                    if(lose){
                        return loser();
                    }
                }
                return;
            }
            else if(computerSelection == "scissors"){
                //return console.log((playerSelection == "rock") ? `You Win!` : `You Lose!`);
                if(playerSelection == "rock"){
                    winCount ++;
                    winDisplay.textContent = 'You Win!';
                    explanation.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
                    fillWin();
                    checkWinner();
                    if(win){
                        return winner();
                    }
                }
                else{
                    loseCount ++;
                    winDisplay.textContent = 'You Lose!';
                    explanation.textContent = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
                    console.log(loseCount);
                    fillLose();
                    checkWinner();
                    if(lose){
                        return loser();
                    }
                }
                return;
            }
        }
    return;
    
}

//function result(playerSelection, computerSelection){}

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

function showChoice(playerSelection, computerSelection){
        if(computerSelection == "rock"){
            cpuChoice.textContent = "ROCK";
        }
        else if(computerSelection == "paper"){
            cpuChoice.textContent = "PAPER";
        }
        else{
            cpuChoice.textContent = "SCISSORS";
        }
    
    
        if(playerSelection == "rock"){
            p1Choice.textContent = "ROCK";
        }
        else if(playerSelection == "paper"){
            p1Choice.textContent = "PAPER";
        }
        else{
            p1Choice.textContent = "SCISSORS";
        }
   

    return;
}

function checkWinner(){
    if (winCount < 3 && loseCount < 3){
        win = false;
        lose = false;
    }
    else if (winCount >= 3){
        win = true;
    }
    else if(loseCount >= 3){
        lose = true;
    }
}

function fillWin(){
    if(winCount == 1){
        win1.style.backgroundColor = playerColor;
    }
    else if(winCount == 2){
        win2.style.backgroundColor = playerColor;
    }
    else if(winCount >= 3){
        win3.style.backgroundColor = playerColor;
    }
}

function fillLose(){
    if(loseCount == 1){
        lose1.style.backgroundColor = cpuColor;
    }
    else if(loseCount == 2){
        lose2.style.backgroundColor = cpuColor;
    }
    else if(loseCount >= 3){
        lose3.style.backgroundColor = cpuColor;
    }
}

function winner(){
    cpuChoice.textContent = '';
    p1Choice.textContent = '';

    winDisplay.textContent = '';
    //explanation.textContent = '';
    winTxt.textContent = "You Win!";
}

function loser(){
    cpuChoice.textContent = '';
    p1Choice.textContent = '';

    winDisplay.textContent = '';
    //explanation.textContent = '';
    winTxt.textContent = "You Lose!";
}

function restart(){
    winCount = 0;
    loseCount = 0;

    winTxt.textContent = "";
    cpuChoice.textContent = '';
    p1Choice.textContent = '';

    winDisplay.textContent = '';
    explanation.textContent = '';

    win = false;
    lose = false;

    win1.style.backgroundColor = "white";
    win2.style.backgroundColor = "white";
    win3.style.backgroundColor = "white";

    lose1.style.backgroundColor = "white";
    lose2.style.backgroundColor = "white";
    lose3.style.backgroundColor = "white";
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
