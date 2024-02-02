const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");

const validarLogin = (event) => {
  if (event.target.value.length >= 3) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};

const salvarJogador = (event) => {
  event.preventDefault();

  localStorage.setItem("Jogador", input.value);
  window.location = "pages/jogo.html";
};

input.addEventListener("input", validarLogin);
form.addEventListener("submit", salvarJogador);
