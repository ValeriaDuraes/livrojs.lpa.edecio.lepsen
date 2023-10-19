const prompt = require('prompt-sync')() // Adiciona o pacote ao programa
const veiculo = prompt('Veículo: ') // Lê os dados de entrada
const preco = Number(prompt('Preço R$ '))
const entrada = preco * 0.50 // Calcula o valor de entrada
const parcelas = (preco * 0.50) / 12 // Calcula o valor das parcelas 
console.log(`Promoção: ${veiculo}`) // Exibe o nome do veículo
console.log(`Entrada de R$${entrada.toFixed(2)}`) // Exibe o valor da entrada
console.log(`+ 12 parcelas de R$${parcelas.toFixed(2)}`) // Exibe o valor das parcelas

