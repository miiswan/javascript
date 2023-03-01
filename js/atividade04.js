// faça um script para efetuar o indice de massa corporal


const peso  = prompt('Digite seu peso')
const altura = prompt('Digite sua altura')
const imc = (peso/(altura*altura))

document.getElementById('oi').innerHTML = `Seu índice de massa corporal é ${imc.toFixed(2)}
`;

