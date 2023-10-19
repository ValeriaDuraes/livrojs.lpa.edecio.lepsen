// Elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.

const prompt = require('prompt-sync')() // Instala o pacote para ler entrada de dados
const number = Number(prompt('Número (centena): '))
if (number < 100 || number >= 1000) {
  console.log('Erro... O número inserido deve ser uma centena!')
  return
}

const num1 = Math.floor(number / 100)
const rest = number % 100
const num2 = Math.floor(rest / 10)
const num3 = rest % 10

console.log(`Invertido: ${num3}${num2}${num1}`)


