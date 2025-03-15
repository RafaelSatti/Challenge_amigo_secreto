let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Selecione um botão';
// let nome;
let num1;
let num2;
let resultadoSoma;
function Verificador() {
    console.log('O botão foi clicado');
}

function Amor() {
    console.log('Eu amo JS');
}

function Cidade() {
    let nome;
    nome = prompt('Informe o nome de uma cidade no Brasil');
    alert('Estive em ' + nome + ' e lembrei de você!');
}

function Somar() {
    num1 = parseInt(prompt('Informe um número inteiro'));
    num2 = parseInt(prompt('Informe outro número inteiro'));
    resultadoSoma = num1 + num2;
    alert('O resultado da soma de ' + num1 + ' + ' + num2 + ' é ' + resultadoSoma);
}