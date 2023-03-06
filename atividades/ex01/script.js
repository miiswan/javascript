/*1. Faça uma função que receba um único valor representando segundos.
Essa função deverá convertê-lo para hora, minutos e segundos. Todas as
variáveis devem ser passadas como parâmetro, não havendo variáveis
globais.
*/

const valor = parseInt(prompt("Digite um valor em segundos:"));

function conversor(segundos, horas, minutos) {
  horas = Math.floor(segundos / 3600);
  minutos = Math.floor((segundos % 3600) / 60);
  segundos = Math.floor(segundos % 60);

  document.getElementById(
    "id"
  ).innerHTML = `${format(horas)}h ${format(minutos)}min e ${format(segundos)}seg`;
}

const format = (number) => {
  return (number = String(number).padStart(2, "0"));
};

conversor(valor);