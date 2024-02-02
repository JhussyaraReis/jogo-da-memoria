function getJogador() {
  const jogador = new Jogador();
  jogador.nome = localStorage.getItem("Jogador");
  jogador.tempo = localStorage.getItem(`${jogador.nome}`);
  return jogador;
}

const arrayDados = Object.entries(localStorage);
