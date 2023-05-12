const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;
//підлючили айдішки


//масив з іконками
const items = [{name: "crab", image: "./Images/crab.png"},
{name: "elephant", image: "./Images/elephant.png"},
{name: "flamingo", image: "./Images/flamingo.png"},
{name: "frog", image: "./Images/frog.png"},
{name: "lion", image: "./Images/lion.png"},
{name: "penguin", image: "./Images/penguin.png"},
{name: "snake", image: "./Images/snake.png"},
{name: "spider", image: "./Images/spider.png"},
{name: "chameleon", image: "./Images/chameleon.png"},
{name: "chicken", image: "./Images/chicken.png"},
{name: "fox", image: "./Images/fox.png"},
];

//для часу
let seconds = 0,
minutes = 0;

//для руху
let movesCount = 0,
winCount = 0;

//реалізація таймера
const timeGenerator = () =>{
    seconds +=1;
    if(seconds>=60){
        minutes+=1;
        seconds= 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML= `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//реалізація для рахунку кроків
const movesCounter= () =>{
    movesCount +=1;
    movesCount.innerHTML = `<span>Moves:</span>${moves}`;
};

// вибір рандомно з масиву іконок
const generateRandom = (size = 4) => {
    let tempArray = [...items];
    let cardValues = [];
    size = (size*size)/2;
    for (let index = 0; index < size; index++) {
        const randIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randIndex]);
        tempArray.splice(randIndex,1);
        
    }
    return cardValues;
};

const matrixGenerator = (cardValues,size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues,...cardValues];
    cardValues.sort(()=>Math.random() - 0.5);
    for (let index = 0; index < size*size; index++) {
        gameContainer.innerHTML +=`
            <div class = "card-container" data-card-value="${cardValues[index].name}">
                <div class="card-before">?</div>
                <div class="card-after">
                        <img src="${cardValues[index].image}" class="image"/>
                </div>
            </div> `;
    }
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click",()=>{
        if(!card.classList.contains("matched")){
            card.classList.add("flipped"); 
            if(!firstCard){
                firstCard = card;
                firstCardValue = card.getAttribute("data-card-value");
            }
            else{
                movesCounter();
                secondCard = card;
                let secondCardValue = card.getAttribute("data-card-value");
                if( firstCardValue == secondCardValue){
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
                    firstCard = false;
                    winCount +=1;
                    if(winCount == Math.floor(cardValues.length / 2)){
                        result.innerHTML =`<h2>You Won</h2> <h4>Moves: ${movesCount}</h4>`;
                        stopGame();
                    }
                }
                else{
                    let[tempFirst,tempSecond] = [firstCard,secondCard];
                    firstCard = false;
                    secondCard = false;
                    let delay = setTimeout(() => {
                        tempFirst.classList.remove("flipped");
                        tempSecond.classList.remove("flipped")
                    },900); 
                }
    
            }
         }
       });
    });
};

startBtn.addEventListener("click",() => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    controls.classList.add("hide");
    stopBtn.classList.remove("hide");
    startBtn.classList.add("hide");
    interval = setInterval(timeGenerator,1000);
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
    initializer();
} );

stopBtn.addEventListener("click",(stopGame = () => {
    controls.classList.remove("hide");
    stopBtn.classList.add("hide");
    startBtn.classList.remove("hide");
    clearInterval(interval);
})
);

const initializer = () =>{
    result.innerHTML = "";
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
};


 

