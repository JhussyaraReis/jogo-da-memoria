const arrayDados = Object.entries(localStorage);
const form = document.querySelector(".tabela");

console.log(form);

function ordenarCompetidores(competidores) {
  const jogadoresOrdenados = competidores.sort(function (a, b) {
    return b[1] - a[1];
  });
  return jogadoresOrdenados;
}

// ordenarCompetidores(arrayDados);

function exibirRanking() {
  ordenarCompetidores(arrayDados).forEach((e, i) => {
    const tr = document.createElement("tr");
    const tdPosicao = document.createElement("td");
    tdPosicao.innerText = `${i + 1}º`;
    const tdNome = document.createElement("td");
    tdNome.innerText = `${e[0]}`;
    const tdTempo = document.createElement("td");
    tdTempo.innerText = `${e[1]}`;
    tr.appendChild(tdNome);
    tr.appendChild(tdPosicao);
    tr.appendChild(tdTempo);
  });
}

exibirRanking();

/** Pegar tbody
 *  Criar tr
 *  criar td
 *  incluir texto
 *  adicionar na tbody
 */
