const imageSources = [
    'images/icon-rock.svg',
    'images/icon-scissors.svg',
    'images/icon-paper.svg'
];

const rulesButton = document.getElementById('rulesBtn');
const rulesContainer = document.getElementById('rulesContainer');
const closeButton = document.getElementById('closeBtn');
const blackBg = document.getElementById('blackBg');

rulesButton.addEventListener('click', () => {
    rulesContainer.style.display = 'block';
    blackBg.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    rulesContainer.style.display = 'none';
    blackBg.style.display = 'none';
})

const gameButtons = document.querySelectorAll('.gameBtn');
const gameplayContainer = document.querySelector('#gamePlayContainer');
const gameContainer = document.querySelector('#gameContainer');
const rulesBtn = document.getElementById('rulesBtn');
const attribution = document.querySelector('.attribution');

gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        houseContainer.style.display = 'none';
        StartGame(button);
        gameContainer.style.display = 'none';
        gameplayContainer.style.display = 'block';
        rulesBtn.style.marginTop = '20vh';
        attribution.style.marginTop = '26.1vh';
    });
});

const houseContainer = document.querySelector('#houseContainer');
const randomImage = getRandomItem(imageSources);

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

let playerName, houseName;

function StartGame(buttonChosen)
{
    const playerContainer = document.getElementById('playerContainer');
    playerContainer.querySelector('img').src = buttonChosen.querySelector('img').src;
    playerContainer.style.background = window.getComputedStyle(buttonChosen.parentElement).background;
    houseContainer.querySelector('img').src = randomImage;

    setTimeout(() => {
        houseContainer.style.display = 'block';
        gameStatus();
    }, 1000);

    switch(randomImage)
    {
        case 'images/icon-rock.svg':
            houseContainer.style.background = 'radial-gradient(circle, hsl(349, 71%, 52%), hsl(349, 70%, 56%))';
            houseName = 'rock';
            break;
        case 'images/icon-scissors.svg':
            houseContainer.style.background = 'radial-gradient(circle, hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
            houseName = 'scissors';
            break;
        case 'images/icon-paper.svg':
            houseContainer.style.background = 'radial-gradient(circle, hsl(230, 89%, 62%), hsl(230, 89%, 65%))';
            houseName = 'paper';
            break;
        default:
            break;
    }

    playerName = buttonChosen.id;
}

const overCanvas = document.getElementById('gameOver');
const reloadButton = overCanvas.querySelector('button');
let score = 0;
const playerScore = document.getElementById('score');
const rippleEffect = document.querySelector('.box');

function gameStatus()
{
    const houseCardHolder = document.getElementById('houseCardHolder');
    const playCardHolder = document.getElementById('playerCardHolder');
    
    if(playerName === 'paper' && houseName === 'scissors' || playerName === 'scissors' && houseName === 'rock' || playerName === 'rock' && houseName === 'paper')
    {
        overCanvas.querySelector('h1').textContent = 'YOU LOSE';
        reloadButton.style.color = 'red';
        if(score > 0)
        {
            score--;
        }

        houseCardHolder.querySelector('.box').style.display = 'flex';
        setTimeout(() => {
            houseCardHolder.querySelector('.box').style.display = 'none';
        }, 4300)
    }
    else
    {

        overCanvas.querySelector('h1').textContent = 'YOU WIN';
        reloadButton.style.color = 'blue';
        if(playerName !== houseName)
        {
            score++;
        }
        playCardHolder.querySelector('.box').style.display = 'flex';
        setTimeout(() => {
            playCardHolder.querySelector('.box').style.display = 'none';
        }, 4300)
    }

    if(playerName === houseName)
    {
        overCanvas.querySelector('h1').textContent = 'EVEN';
        score = score;

        houseCardHolder.querySelector('.box').style.display = 'flex';
        setTimeout(() => {
            houseCardHolder.querySelector('.box').style.display = 'none';
        }, 4300)
        playCardHolder.querySelector('.box').style.display = 'flex';
        setTimeout(() => {
            playCardHolder.querySelector('.box').style.display = 'none';
        }, 4300)
    }
    overCanvas.style.display = 'block';
    playerScore.textContent = score;
}

reloadButton.addEventListener('click', () => {
    gameContainer.style.display = 'block';
    gameplayContainer.style.display = 'none';
    overCanvas.style.display = 'none';
    rulesBtn.style.marginTop = '3.8vh';
    attribution.style.marginTop = '10vh';
})