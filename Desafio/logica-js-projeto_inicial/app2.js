let diaUsuario = prompt('Que dia é hoje?');
let numeroInformado = prompt('Informe um número');
let numeroJogo = prompt('Informe um número para um jogo');
let saldo = prompt('Informe seu saldo bancário');
let nome = prompt('Favor inserir seu nome');
if (diaUsuario == 'Sábado') {
    alert('Bom final de semana');
}
if (diaUsuario == 'Domingo') {
    alert('Bom final de semana');
} else {
    alert('Boa semana!');
}

if (numeroInformado >= 0) {
    alert('Número positivo');
} else {
    alert('Número negativo');
}

if (numeroJogo >= 100) {
    alert('Parabéns, você venceu');
} else {
    alert('Tente novamente para ganhar');
}

alert('O saldo da sua conta é ' + saldo);


alert('Boas vindas ' + nome)