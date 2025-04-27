function getComputerChoice () {
    return Math.floor(Math.random() * 3 + 1);
}

function getUserChoice () {
    return prompt("Escolha sua arma: \nPedra: 1\nPapel: 2\nTesoura: 3");
}

let humamScore = 0, computerScore = 0;