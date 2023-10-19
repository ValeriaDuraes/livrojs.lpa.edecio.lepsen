// Cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// "Ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
  e.preventDefault() // Evita o envio do form

  const name = frm.inName.value // Obtém valores do form
  const male = frm.inMale.value // Obtém valores do form
  const height = Number(frm.inHeight.value) // Obtém valores do form

  // let weight // Declara a variável peso
  // if (male) { // Se male (ou, if male == true)
  //   weight = 22 * Math.pow(height, 2) // Math.pow eleva ao quadrado
  // } else {
  //   weight = 21 * Math.pow(height, 2) // Math.pow eleva ao quadrado
  // }

  const weight = male ? 22 * Math.pow(height, 2) : 21 * Math.pow(height, 2) // Realizando o cálculo acima com o operador ternário

  frm.addEventListener('reset', (e) => {
    resp.innerText = ''
  })

  // Apresenta a resposta (altera o conteúdo do elemento h3 da página)
  resp.innerText = `${name}, seu peso ideal é ${weight.toFixed(3)}kg.`
})

