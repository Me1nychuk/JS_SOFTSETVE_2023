let desk = [];
const suits = ['H','D','C','S'];
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

for (let suit of suits){
    for(let rank of ranks){
        desk.push(rank+" "+suit);
    }
}

function Randomaizer(n){
    return Math.floor(Math.random()*n);
}

function dealCards(amount){
    let cards = [];
    for(let i = 0; i < amount; i++){
        let index = Randomaizer(desk.length);
        let card = desk[index];
        cards.push(card);
        desk.splice(index,1);
    }
    return cards;
}

function Show(playerCards,playerID){
    let playerCardDiv = document.getElementById(`${playerID}`);
    playerCardDiv.innerHTML = '';
    for (let card of playerCards) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        let text = document.createElement('p');
        text.classList.add('card-text');
        text.innerText = card;
        cardDiv.appendChild(text);
        playerCardDiv.appendChild(cardDiv);    
    }
}

let player1 = dealCards(6);
let player2 = dealCards(6);

Show(player1,"player1");
Show(player2,"player2");