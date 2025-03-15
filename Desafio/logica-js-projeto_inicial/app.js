// alert('Boas vindas ao nosso site');
// let nome = 'Lua';
// let idade = 25;
// let numerodeVendas = 50;
// let saldoDisponivel = 1000;
// alert('Erro! Preencha todos os campos');
// let mensagemDeErro = 'Erro! Preencha todos os campos';
// alert(mensagemDeErro);
// let nome2 = prompt('Qual seu nome?');
// let idade2 = prompt('Qual sua idade?');

// if (idade2 >= 18) {
//     alert('Pode tirar a habilitação');
//     console.log('Pode tirar a habilitação');
// } 
// else {alert('Ainda não possui idade para dirigir!');
// }

// let altura = parseFloat(prompt('Informe sua altura (em metros)'));
// let peso = parseFloat(prompt('Informe seu peso (em Kg)'));
// let imc = parseFloat(peso / (altura * altura));
// console.log('Seu IMC é ' + imc);
// alert('Seu IMC é ' + imc);

let num00 = parseInt(prompt('Informe um número inteiro!'));

while (num00 > 0) {
    let fat = parseInt(num00 - 1);
    let fatorial = parseInt(num00 * (fat));
    console.log('O fatorial é ' + fatorial);
    alert('O fatorial é ' + fatorial);
    num00--;
}
