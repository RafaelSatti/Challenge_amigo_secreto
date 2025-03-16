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

// GitHub ==> Plataforma onde hospedamos o código
// Git ==> Ferramenta onde fazemos o controle de versões do código
// git init ==> Inicializar um novo repositório. Antes utilizar o git status para verificar já tem o repositório, caso não (fatal: not a git repository) rode o git init.

// Git e GitHub - Instruções
// git init
// git add .
// git commit -m "projeto inicial"
// git remote add origin git@github.com:SEU_USUARIO/SEU_REPOSITORIO
// git push -u origin main

// Lembre-se de substituir SEU_USUARIO pelo seu username definido ao criar a sua conta no GitHub e SEU_REPOSITORIO pelo nome do repositório que você criou no GitHub.