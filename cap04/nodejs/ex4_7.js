// A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam R$12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar.

const prompt = require('prompt-sync')() // Adiciona pacote para entrada de dados
const people = Number(prompt('Nº de Pessoas: ')) // Lê dados de entrada
const fish = Number(prompt('Nº de peixes: ')) // Lê dados de entrada
let pay                                 // Declara a variável pagar
if (fish <= people){                    // Condição definida no exemplo
  pay = people * 20    
} else {
  pay = (people * 20) + ((fish - people) * 12)
}

console.log(`Pagar R$ ${pay.toFixed(2)}`) // Exibe o valor a ser pago 
