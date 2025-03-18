//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let varMeuNome = "";
let listaDeAmigos = [];

function meuNome() {
    let nomeInput = document.getElementById("meu").value;

    if (nomeInput == "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    varMeuNome = nomeInput;
    // Informação no console
    console.log('O jogador é ' + nomeInput + '!')
    
    // Exibir nome do jogador na tela
    let jogador = document.getElementById("jogador");
    jogador.innerHTML = varMeuNome;
    // Limpar o valor informado
    document.getElementById("meu").value = ""; 
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo == "") {
        alert("Por favor, digite o nome do amigo!");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Nome adicionado.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);

    // Exibir a lista de amigos na tela
    // let listaAmigos = document.getElementById("listaAmigos");
    // let li = document.createElement("li");
    // li.textContent = nomeAmigo;
    // listaAmigos.appendChild(li);

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = listaDeAmigos.join(', ')
    // Informação no console
    console.log('O nome ' + nomeAmigo + ' foi adicionado!')
    // Limpar o valor informado
    document.getElementById("amigo").value = ""; 
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortearmos!");
        return;
    }

    let sorteio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[sorteio];

    // Exibir o nome sorteado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigoSorteado;
    // Informação no console
    console.log('O sorteado(a) é ' + amigoSorteado + '!')
}
