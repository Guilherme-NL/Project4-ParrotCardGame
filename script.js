//Prompt asking the number of cards
let nCards = prompt("Qual o número de cartas do jogo? 4, 6, 8, 10, 12 ou 14?");
while (nCards % 2 !== 0 || nCards < 4 || nCards > 14) {
  nCards = prompt("Qual o número de cartas do jogo? 4, 6, 8, 10, 12 ou 14?");
}

let cardlist = [];
let cardOne, cardTwo;
let cardSelected = [];
let disable = false;

function choseGame(nCards) {
  if (Number(nCards) === 4) {
    cardList = [
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "bobrossparrot.gif",
      "explodyparrot.gif",
    ];
  }
  if (Number(nCards) === 6) {
    cardList = [
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
    ];
  }
  if (Number(nCards) === 8) {
    cardList = [
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
    ];
  }
  if (Number(nCards) === 10) {
    cardList = [
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "revertitparrot.gif",
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "revertitparrot.gif",
    ];
  }
  if (Number(nCards) === 12) {
    cardList = [
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "revertitparrot.gif",
      "tripletsparrot.gif",
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "revertitparrot.gif",
      "tripletsparrot.gif",
    ];
  }
  if (Number(nCards) === 14) {
    cardList = [
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "revertitparrot.gif",
      "tripletsparrot.gif",
      "unicornparrot.gif",
      "bobrossparrot.gif",
      "explodyparrot.gif",
      "fiestaparrot.gif",
      "metalparrot.gif",
      "revertitparrot.gif",
      "tripletsparrot.gif",
      "unicornparrot.gif",
    ];
  }
  cardList.sort(random);
  for (let i = 0; i < nCards; i++) {
    let cards = document.querySelector("ul");

    cards.innerHTML += `      
        <div class="flip-card-container">
          <div class="flip-card" onclick="flip(this)">
            <div class="flip-card-front">
            <img src="Images/${cardList[i]}" />
            </div>
            <div class="flip-card-back">
            <img src="Images/front.png" />
            </div>
          </div>
        </div>
      `;
  }
}
//function to randomize cards selection
function random() {
  return Math.random() - 0.5;
}

function flip(element) {
  if (!disable) {
    element.classList.add("flip");
    selectCard();
  }
}
function selectCard() {
  cardSelected = document.querySelectorAll(".flip");
  if (cardSelected.length === 2) {
    cardOne = cardSelected[0];
    cardTwo = cardSelected[1];

    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}
function matchCards(img1, img2) {
  if (img1 === img2) {
    cardOne.removeAttribute("onclick");
    cardTwo.removeAttribute("onclick");
    cardOne.classList.add("flip-fixed");
    cardTwo.classList.add("flip-fixed");
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    cardSelected = [];
    cardOne = cardTwo = "";
  } else {
    setTimeout(function () {
      cardOne.parentNode.classList.add("shake");
      cardTwo.parentNode.classList.add("shake");
    }, 500);
    setTimeout(function () {
      cardOne.parentNode.classList.remove("shake");
      cardTwo.parentNode.classList.remove("shake");
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = cardTwo = "";
    }, 1000);
  }
}

choseGame(nCards);
