let player = {
  name: "Hani",
  chips: 235,
};
let isAlive = false;
let hasBlackJack = false;
let cards = [];
let sum;
let message;

const startGame = document.getElementById("start-game");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const messageEl = document.getElementById("message-el");
const newCard = document.getElementById("new-card");
const playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": " + player.chips;

startGame.addEventListener("click", function () {
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
});

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

newCard.addEventListener("click", function () {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumber();
    cards.push(card);
    sum += card;
    renderGame();
  }
});
