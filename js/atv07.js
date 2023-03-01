// crie um programa que imprima todos os divisores de um número. para dado um número n, o programa testa todos os números de 1 até n.

let number = prompt('Digite um número');

for( let i=1; i <= number; i++){
    if( number % i === 0 ){
        console.log(i)
    }
}
document.getElementById('span').innerHTML = `Os divisores desse número são: ${i}`