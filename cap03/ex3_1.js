const prompt = require('prompt-sync')() // Adiciona o pacote para a entrada de dados
const num1 = Number(prompt('1º Número: ')) // Lê os números
const num2 = Number(prompt('2º Número: ')) 
const soma = num1 + num2 // Calcula a soma
console.log(`A soma é ${soma}`) // Exibe o resultado
