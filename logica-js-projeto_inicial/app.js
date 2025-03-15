alert('Boas vindas ao jogodo número secreto'); 
//let numeroSecreto = 4;
let tamanhoNumeroSecreto = 1000;
let numeroSecreto = parseInt(Math.random() * tamanhoNumeroSecreto + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// comentário
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e ' + tamanhoNumeroSecreto);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Vocês descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1) {
//     alert(`Isso aí! Vocês descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso aí! Vocês descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

