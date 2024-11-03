
/*Returns randomly either rock paper or scissors*/
function getComputerChoice(){
    let selectedValue =  Math.random()*3;
    if (selectedValue < 1){
        return "rock";
    }
    if (selectedValue >= 1 && selectedValue < 2){
        return "scissors";
    }
    else {
        return "paper";
    }
    return "Something bad has happened.";
}
/*Asks user to give the system either rock paper or scissors. 
Recurseively sends itself back if they put something else*/
function getHumanChoice(){
    let humanChoice = prompt("Please select either rock, paper, or scissors.").toLowerCase();
    if (humanChoice != "rock" && humanChoice != "scissors" && humanChoice != "paper"){
        humanChoice = getHumanChoice();
    }
    return humanChoice;
}
/*I dislike the idea of needing to manaully check each case
but I currently can't think of a cleaner option, maybe an index
check that loops back to the first? Might clean up later*/
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return 0;
    }
    if ((humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "scissors" && computerChoice == "rock")){
            return 1;
    }
    if ((humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice == "scissors")){
            return 2;
    }
}
/*Let the player pick how many rounds. Try to deal with them picking not a number*/
function getNumberOfRounds(){
    let numberOfRounds = prompt("Welcome to rock paper scissors. The classic basic test. How many rounds would you like to play?","0");
    if (!Number.isInteger(parseInt(numberOfRounds)) || parseInt(numberOfRounds) <= 0){
        console.log("You must select a positive number. Please select again.");
        numberOfRounds = getNumberOfRounds();
    }
    return parseInt(numberOfRounds);
}
/*Prompts for how many games the player wants to play. Loops that number of times*/
function playGame(){
    let humanScore = 0;
    let computerScore = 0; 
    let result =0;
    let numberOfRounds = getNumberOfRounds();
    for(let i = 0; i < numberOfRounds; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        result = playRound(humanChoice,computerChoice);
        console.log("You Played:      " + humanChoice);
        console.log("Computer Played: " + computerChoice);
        switch (result){
            case 0:
                console.log("Its a draw! Nobody wins this round.");
                break;
            case 1:
                console.log("Computer wins the round! Better luck next time.");
                computerScore ++;
                break;
            case 2:
                console.log("You won the round! Congratulations!");
                humanScore ++;
                break;
        }
        console.log("Your Current Score:       " + humanScore);
        console.log("Computer's Current Score: " + computerScore);
    }

    if (humanScore > computerScore){
        console.log("You win the game! Congratulations. Type 'playGame()' to go again.");
        return;
    }
    if (humanScore < computerScore){
        console.log("The computer wins! Condolences. Type 'playGame()' to go again.");
        return;
    }
    console.log("It's ended in a draw. Type 'playGame()' to go again.");
    return;
}


