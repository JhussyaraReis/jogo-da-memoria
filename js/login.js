const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector('.login_form');

const validarLogin = (event) => { 
    if(event.target.value.length >= 3){
        button.removeAttribute('disabled');
        return /** caso tenha entrado no if ele termina a função 
                    sem executar as outras linhas */
    }
    button.setAttribute('disabled','');
}

/** Podemos usa o destructing para 
 * simplificar tirando o 'event' e 
 * deixando apenas o 'target' e usando um else 
 * 
 * const validarLogin = ({target}) => { 
    if(target.value.length >= 3){
        button.removeAttribute('disabled');
    }else{
       button.setAttribute('disabled',''    ); 
    }
}*/

const salvarJogador = (event) => {
    event.preventDefault();

    localStorage.setItem('Jogador', input.value)
    window.location = 'pages/jogo.html';
}

input.addEventListener('input',validarLogin);
form.addEventListener('submit', salvarJogador);