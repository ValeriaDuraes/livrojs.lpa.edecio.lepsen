// Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o número máximo 
// de vezes que o cliente pode parcelar está compra e o valor de cada parcela. Considere as seguintes condições: 
// a) Cada parcela deve ser de, no mínimo R$20,00.
// b) O número máximo de parcelas permitidas é 6.

const prompt = require('prompt-sync')() // Adiciona o pacote prompt-sync para entrada de dados
const purchaseTotal = Number(prompt('Valor total da compra R$')) // Lê os dados de entrada
const aux = Math.floor(purchaseTotal / 20) // aux = nº de parcelas sem condições
const installment = aux == 0 ? 1 : aux > 6 ? 6 : aux // Operador ternário
const installmentValue = purchaseTotal / installment // Calculo do valor da parcela
console.log(`Pode pagar em ${installment}x de R$${installmentValue.toFixed(2)}`)


