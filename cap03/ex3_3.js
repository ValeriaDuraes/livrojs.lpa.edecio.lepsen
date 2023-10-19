// Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.

const prompt = require('prompt-sync')() // Adiciona o pacote ao programa
const salario = Number(prompt('Salário R$ ')) // Lê dados de entrada
const tempoTrabalho = Number(prompt('Tempo de trabalho (anos): ')) // Lê dados de entrada
const quadrienio = Math.floor(tempoTrabalho / 4) // Calcula os quadriênios
const salarioAcrescido = salario + (salario * (quadrienio * 0.01)) // Calcula o acréscimo no salário
console.log(`O funcionário trabalha há ${tempoTrabalho} anos na empresa, tendo direito a ${quadrienio} quadriênio(s).`) // Exibe o tempo de trabalho e quantos quadriênios tem por direito
console.log(`O salário do funcionário com ajuste é de ${salarioAcrescido.toFixed(2)}`) // Exibe o valos do salário com o acréscimo
