const number = parseInt(prompt("Digite um número"));

function parOuImpar(number) {
    if( number % 2 === 0) {
        document.getElementById("par").innerHTML = `Verdadeiro`
    } else {
        document.getElementById("par").innerHTML = `Falso`
    }
}
parOuImpar(number)
