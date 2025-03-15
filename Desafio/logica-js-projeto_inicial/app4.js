console.log('Boas vindas!');
let nome = 'Rafael';
console.log(nome);
alert('Olá ' + nome);
let resposta = prompt('Qual a linguagem de programação que voce mais gosta?');
console.log(resposta);
let valor1 = 50;
let valor2 = 10;
resultadoSoma = valor1 + valor2;
console.log('A soma de ' + valor1 + ' + ' + valor2 + ' é igual a ' + resultadoSoma);
resultadoSubtracao = valor1 - valor2;
console.log('A soma de ' + valor1 + ' - ' + valor2 + ' é igual a ' + resultadoSubtracao);
let idade = prompt('Qual sua idade?');
let maiorIdade = idade >= 18 ? 'Você já é adulto!' : 'Você ainda é menor de idade';
alert(maiorIdade);
let numero = prompt('Informe um número');

if (numero >= 0) {
    alert('O número ' + numero + ' é positivo');
} else {
    alert('O número ' + numero + ' é negativo');
}
alert(numero);
let numeros = 1
while (numeros < 11) {
    alert('O número é ' + numeros)
    numeros ++
}
let nota = 5;
let statusNota = nota >=7 ? 'Aprovado' : 'Reprovado';
alert(statusNota);
let numeroAleatorio = Math.random();
alert(numeroAleatorio);
let numeroAleatorio2 = parseInt(Math.random() * 10) + 1;
alert(numeroAleatorio2);
let numeroAleatorio3 = parseInt(Math.random() * 100) + 1;
alert(numeroAleatorio3);
