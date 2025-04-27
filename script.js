function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice == 1) {
        return "rock";
    }

    if (computerChoice == 2) {
        return "paper";
    }

    if (computerChoice == 3) {
        return "scissors"
    }

}

function getUserChoice () {
    let userChoice = prompt("Pick your weapon:\n Rock\nPaper\nScissors");
    return userChoice.toLowerCase();
}

let userScore = 0, computerScore = 0;

function playRound () {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    console.log(computerChoice);
    console.log(userChoice);
    
    if(userChoice == "rock") {
        if(computerChoice == "scissors") {
            userScore +=1;
            console.log("Computer picked scissors. You win this round!");
        }
        if(computerChoice == "paper") {
            computerScore +=1;
            console.log("Computer picked paper. You lose this round!");
        }
        if(computerChoice == "rock") {
            console.log("Computer picked rock. Its a draw!");
        }
    }

    if(userChoice == "scissors") {
        if(computerChoice == "scissors") {
            console.log("Computer picked scissors. Its a draw!");
        }
        if(computerChoice == "paper") {
            userScore +=1;
            console.log("Computer picked paper. You win this round!");
        }
        if(computerChoice == "rock") {
            computerScore +=1;
            console.log("Computer picked rock. You lose this round!");
        }
    }

    if(userChoice == "paper") {
        if(computerChoice == "scissors") {
            computerScore +=1;
            console.log("Computer picked scissors. You lose this round!");
        }
        if(computerChoice == "rock") {
            userScore +=1;
            console.log("Computer picked rock. You win this round!");
        }
        if(computerChoice == "paper") {
            console.log("Computer picked paper. Its a draw!");
        }
    }
}

playRound();