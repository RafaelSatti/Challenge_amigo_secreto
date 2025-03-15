function ola() {
    console.log('Olá, mundo');
}

ola();

function comNome() {
    let nome;
    nome = prompt('Informe seu nome!');
    alert('Olá' + nome);
}

comNome();

function numero () {
    let number;
    number = prompt('Insira um número');
    let dobro = number * 2;
    alert('O dobro de ' + number + ' é ' + dobro);
}

numero();

function media (num1, num2, num3) {
    let num1;
    let num2;
    let num3;
    let med;
    med = parseFloat((num1 + num2 + num3) / 3);
}
media(prompt('informe um número'), prompt('Informe outro número'), prompt('Informe o último número'));

function big (num4, num5) {
    let num4;
    let num5;
    if (num4 > num5) {
        alert('O maior é ' + num4);
    } else {
        alert('O maior é ' + num5)
    }
}
big(prompt('informe um número'), prompt('Informe outro número'), prompt('Informe o último número'));

function mult (num6) {
    let num6;
    let result = parseFloat(num6 * num6);
    alert('O resultado da multiplicação de ' + num6 + ' por ' + num6 +' é ' + result);
}
mult(prompt('informe um número'), prompt('Informe outro número'), prompt('Informe o último número'));