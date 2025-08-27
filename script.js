let userScore = 0;
let pcScore = 0;

const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const result_div = document.getElementById("result");

const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getPcChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, pcChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${userChoice} vence a ${pcChoice}. ¡Tú ganas!`;
}

function lose(userChoice, pcChoice) {
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    result_div.innerHTML = `${userChoice} es vencido por ${pcChoice}. ¡Tú pierdes!`;
}

function draw(userChoice, pcChoice) {
    result_div.innerHTML = `Ambos eligieron ${userChoice}. ¡Es un empate!`;
}

function game(userChoice) {
    const pcChoice = getPcChoice();
    switch (userChoice + pcChoice) {
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            win(userChoice, pcChoice);
            break;
        case 'piedrapapel':
        case 'papeltijera':
        case 'tijerapiedra':
            lose(userChoice, pcChoice);
            break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            draw(userChoice, pcChoice);
            break;
    }
}

rock_button.addEventListener('click', () => game("piedra"));
paper_button.addEventListener('click', () => game("papel"));
scissors_button.addEventListener('click', () => game("tijera"));
