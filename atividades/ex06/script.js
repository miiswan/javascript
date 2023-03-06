const number = parseFloat(prompt("Digite um número"));
const info = document.querySelector("#info");

function myFunction(num) {
  return Number(num).toFixed(2);
}

info.innerHTML = `Novo número: ${myFunction(number)}`;
