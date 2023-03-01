// crie um programa que solicita ao usuário 10 números, através de uma estrutura de repetição, e mostre o maior número digitado pelo usuário

let maxNumber = 0;
for(let i = 0; i < 10; i++){
    const number = parseFloat(prompt('Digite um número'));

    maxNumber = number > maxNumber ? number : maxNumber;
}

document.getElementById('info').innerHTML = `O maior número digitado foi: ${maxNumber}`