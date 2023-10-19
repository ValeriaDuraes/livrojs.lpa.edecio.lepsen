// Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).

const prompt = require('prompt-sync')() // Adiciona o pacote ao programa
const pesoRacao = Number(prompt('Peso da ração (kg): ')) // Lê os dados de entrada
const consumoDia = Number(prompt('Consumo por dia (g): ')) // Lê os dados de entrada
const duracao = Math.floor((pesoRacao * 1000) / consumoDia)
const sobra = (pesoRacao * 1000) % consumoDia
console.log(`A ração irá durar ${duracao} dias.`)
console.log(`E haverá uma sobra de ${sobra} grama(s).`)


