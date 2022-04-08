//Prompt asking the number of cards
let nCards = prompt("Qual o número de cartas do jogo? 4, 6, 8, 10, 12 ou 14?");
while (nCards % 2 !== 0 || nCards < 4 || nCards > 14) {
  nCards = prompt("Qual o número de cartas do jogo? 4, 6, 8, 10, 12 ou 14?");
}

let cardlist = [];

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
function flip(element) {
  element.classList.toggle("flip");
}
function random() {
  return Math.random() - 0.5;
}

choseGame(nCards);
