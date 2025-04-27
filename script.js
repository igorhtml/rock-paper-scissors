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
    let userChoice = prompt("Escolha sua arma (escreva):\n Pedra\nPapel\nTesoura");
    return userChoice.toLowerCase();
}

let humamScore = 0, computerScore = 0;

function playRound () {
    
}