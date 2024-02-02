const grid = document.querySelector(".grid");
const spanJogador = document.querySelector(".jogador");
const spanTimer = document.querySelector(".timer");

const personagens = [
  "anakin",
  "c3po",
  "leah",
  "mal",
  "obi",
  "r2d2",
  "solo",
  "troop",
  "vader",
  "yoda",
];

const criarELemento = (tagElemento, classeElemento) => {
  const elemento = document.createElement(tagElemento);
  elemento.className = classeElemento;
  return elemento;
};

const checkJogo = () => {
  const cartasDesabilitadas = document.querySelectorAll(".disabled-card");

  if (cartasDesabilitadas.length == 20) {
    clearInterval(this.loop); // parando o timer
    localStorage.setItem(
      `${localStorage.getItem("Jogador")}`,
      spanTimer.innerHTML
    );
    alert(
      `PARABÉNS ${localStorage.getItem(
        "Jogador"
      )} ..... Você Ganhou o Jogo!!! Seu tempo foi ${spanTimer.innerHTML}s`
    );
    window.location = "./ranking.html";
  }
};

let primeiraCarta = "";
let segundaCarta = "";

const checkCards = () => {
  const primeiroPersonagem = primeiraCarta.getAttribute("data-personagem");
  const segundoPersonagem = segundaCarta.getAttribute("data-personagem");

  if (primeiroPersonagem == segundoPersonagem) {
    setTimeout(() => {
      primeiraCarta.firstChild.classList.add("disabled-card");
      segundaCarta.firstChild.classList.add("disabled-card");

      primeiraCarta = "";
      segundaCarta = "";

      checkJogo();
    }, 500);
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("revelar-card");
      segundaCarta.classList.remove("revelar-card");

      primeiraCarta = "";
      segundaCarta = "";
    }, 500);
  }
};

const revelarCard = ({ target }) => {
  console.log(primeiraCarta, segundaCarta);
  if (target.parentNode.className.includes("revelar-card")) {
    return;
  }

  if (primeiraCarta == "") {
    target.parentNode.classList.add("revelar-card");
    primeiraCarta = target.parentNode;
  } else if (segundaCarta == "") {
    target.parentNode.classList.add("revelar-card");
    segundaCarta = target.parentNode;

    checkCards();
  }
};

const criarCard = (personagem) => {
  const card = criarELemento("div", "card");
  const front = criarELemento("div", "face front");
  const back = criarELemento("div", "face back");

  front.style.backgroundImage = `url('../imagens/${personagem}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  grid.appendChild(card);

  card.addEventListener("click", revelarCard);

  card.setAttribute("data-personagem", personagem);
  return card;
};

const iniciarJogo = () => {
  //pega os elementos de um array e espalha em outro
  const ArrayPersonagensduplicados = [...personagens, ...personagens];

  // usa o random para gerar um número aleatório que vai embaralhar com o sort
  const ArrayPersonagensEmbaralhados = ArrayPersonagensduplicados.sort(
    () => Math.random() - 0.5
  );

  //percorrendo o array de personagens e para cada um deles executando a função criarCard que recebe o personagem
  ArrayPersonagensEmbaralhados.forEach((personagem) => {
    const card = criarCard(personagem);
  });
};

const iniciarTimer = () => {
  this.loop = setInterval(() => {
    const tempoAtual = Number(spanTimer.innerHTML);
    spanTimer.innerHTML = tempoAtual + 1;
  }, 1000);
};

window.onload = () => {
  spanJogador.innerHTML += ` ${localStorage.getItem("Jogador")}`;
  iniciarTimer();
  iniciarJogo();
};
