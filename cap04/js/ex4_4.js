// Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas (no horário de verão da França), elaborar um programa que leia a hora no Brasil e informe a hora na França.

// Cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// "Ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const timeInBrazil = Number(frm.inTimeInBrazil.value)

  let timeInFrance = timeInBrazil + 5
  if (timeInFrance > 24) {
    timeInFrance = timeInFrance - 24
  }

// Apresenta a resposta (altera o conteúdo do elemento h3 da página)
  resp.innerText = `Hora na França: ${timeInFrance.toFixed(2)}`

})
