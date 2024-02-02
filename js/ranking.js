const arrayDados = Object.entries(localStorage);

function ordenarCompetidores(competidores) {
  const jogadoresOrdenados = competidores.sort(function (a, b) {
    return a[1] - b[1]; // coloca na ordem crescente
  });
  return jogadoresOrdenados;
}

function exibirRanking() {
  const corpoTabela = document.querySelector("tbody");
  ordenarCompetidores(arrayDados).forEach((e, i) => {
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
  });
}

exibirRanking();
