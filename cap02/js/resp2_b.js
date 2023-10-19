// Elaborar um programa para uma lan house de um aeroporto - O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.

// Cria referência ao form e ao elemento h3 (onde a resposta será exibida)
const frm = document.querySelector('form')
const resp = document.querySelector('#resp')

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const hourPrice = Number(frm.inPrice.value) // Obtém os dados dos campos
  const timeUsed = Number(frm.inTime.value) // Obtém os dados dos campos

  // Calcula o valor a pagar, arredondando pra cima com Math.ceil
  const total = Math.ceil(timeUsed / 15) * hourPrice

  resp.innerText = `Valor a pagar R$${total.toFixed(2)}`

  e.preventDefault()
});
