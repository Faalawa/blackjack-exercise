const player = blackjackGame["player"];
const dealer = blackjackGame["dealer"];

document.querySelector('#blackjack-hit-button').addEventListener("click", "Hit");

function blackjackHit() {
    if (blackjackGame["isStand"]===false) {
        let count = randomCard();
    }
}
function randomCard() {
    let randomIndex = Math.floor(Math.random * 13);
    return blackjackGame["cards"][randomIndex];
}
function showCards(card, activePlayer) {
    if (activePlayer["score"] <=21) {
        let cardImage = document.createElement("img");
    }
} 