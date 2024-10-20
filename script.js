
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const computerScore = document.querySelector('#computer-score')

let humanScoreNumber = 0
let computerScoreNumber = 0 

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playComputer())

}

const playComputer = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices [randomNumber]
}

const playTheGame = (human, computer) => {
    console.log('humano: ' + human + 'Maquina: ' + computer)

    if (human === computer) {
        result.innerHTML = 'EMPATOU! &#x1F926'
    }
    else if (human === 'rock' && computer === 'scissors' ||
        human === 'scissors' && computer === 'paper' ||
    human === 'paper' && computer === 'rock') {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'VOCÊ GANHOU! ​&#x1F46F';
    }
    else {
        computerScoreNumber++
        computerScore.innerHTML = computerScoreNumber
        result.innerHTML = 'VOCÊ PERDEU! TENTE NOVAMENTE. &#x1F63F'
    }
}