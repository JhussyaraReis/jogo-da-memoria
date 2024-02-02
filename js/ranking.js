const dadosLocalStorange = Object.entries(localStorage);
const btnVoltar = document.querySelector("span");

const jogadoresOrdenados = dadosLocalStorange
  .filter((jogador) => jogador[0] !== "Jogador")
  .sort(function (a, b) {
    return a[1] - b[1]; // coloca na ordem crescente
  });

function exibirRanking() {
  const corpoTabela = document.querySelector("tbody");
  jogadoresOrdenados.forEach((e, i) => {
    if (e[0] !== "Jogador") {
      const tr = document.createElement("tr");
      const tdPosicao = document.createElement("td");
      tdPosicao.innerText = `${i + 1}º`;
      const tdNome = document.createElement("td");
      tdNome.innerText = `${e[0]}`;
      const tdTempo = document.createElement("td");
      tdTempo.innerText = `${e[1]}`;
      tr.appendChild(tdPosicao);
      tr.appendChild(tdNome);
      tr.appendChild(tdTempo);
      corpoTabela.appendChild(tr);
    }
  });
}

btnVoltar.addEventListener("click", () => {
  window.location = "./jogo.html";
});

exibirRanking();
