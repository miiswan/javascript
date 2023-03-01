// uma empresa decide dar um aumento de 30% aos funcionários com salários inferiores a. Faça um programa que receba o salário do funcionário e mostre  R$ 500, 00o valor do salário reajustado ou uma mensagem caso ele não tenha direito ao aumento.

const salario = parseFloat(prompt('Digite seu salário'));
const salarioNovo = salario + (salario * (30/100));
const span = document.getElementById('span');

if(salario < 500) {
    span.innerHTML = `Seu novo salário é de: R$${salarioNovo}`;
} else {
    span.innerHTML = "Você não tem direito ao aumento.";
}
    
