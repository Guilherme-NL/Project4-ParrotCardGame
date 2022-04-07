let nCartas = prompt("Qual o número de cartas do jogo? 4, 6, 8, 10, 12 ou 14?");
while (nCartas % 2 !== 0 || nCartas < 4 || nCartas > 14) {
  nCartas = prompt("Qual o número de cartas do jogo? 4, 6, 8, 10, 12 ou 14?");
}

for (let i = 0; i < nCartas; i++) {
  let cartas = document.querySelector("ul");
  cartas.innerHTML += `      
    <div class="flip-card-container">
    <div class="flip-card" onclick="flip(this)">
        <div class="flip-card-front">
        <img src="Images/fiestaparrot.gif" />
        </div>
        <div class="flip-card-back">
        <img src="Images/front.png" />
        </div>
    </div>
    </div>
  `;
}
function flip(element) {
  element.classList.toggle("flip");
}
