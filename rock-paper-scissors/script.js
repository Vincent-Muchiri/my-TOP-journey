let gameChoices = ['Rock', 'Paper', 'Scissors'];
scoreArray = []
let computerScore = 0;
let playerScore = 0;
let tries = 0;

function getComputerChoice(){
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    //console.log(computerSelection);
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    tries ++;

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        console.log("Choose either rock, paper, scissors");
        tries --;
    }else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        console.log(`You've lost this round! ${computerSelection} beats ${playerSelection}`);
        computerScore ++;
    } else if(playerSelection == computerSelection){
        console.log("It's a tie. Try again.");
        tries --;
    } else{
        console.log(`You've won this round! ${playerSelection} beats ${computerSelection}`);
        playerScore ++;
    }
    scoreArray = [playerScore, computerScore];
    console.log(scoreArray);

}

function game(){
    let playerSelection = prompt("Choose either rock, paper or scissors").toLowerCase();
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

}

//for (let roundPlayed =0; roundPlayed <5; roundPlayed++){
//    game()
//}


let continuePlaying = true;

while (continuePlaying){
    game()
    /*if (tries == 5){
        if (playerScore > computerScore){
            console.log("You've won!");
        }
        else if(playerScore < computerScore){
            console.log("You've lost!");
        }
        else{
            console.log("It's a draw!")
        }
        console.log(scoreArray);
        continuePlaying = false;
    }*/
    if (playerScore == 3){
        alert("Congratulations, you've won!");
        continuePlaying = false;
    }
    else if(computerScore == 3){
        alert("Sorry, you've lost.");
        continuePlaying = false;
    }
}
