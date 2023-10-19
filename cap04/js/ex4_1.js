// Cria referência ao form e elementos de resposta do programa
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  e.preventDefault() // Evita o envio do form
  const nome = frm.inNome.value // Obtém valores do form
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  const media = (nota1 + nota2) / 2 // Média das notas
  resp1.innerText = `A média do aluno é ${media.toFixed(2)}`

  // Cria as condições

  if (media >= 7) {
    // Altera o texto e estilo da cor do elemento resp2
    resp2.innerText = `Parabéns ${nome}, você está APROVADO(A)!`
    resp2.style.color = 'blue'
  } else if (media >= 4) {
    resp2.innerText = `Atenção ${nome}, você está de EXAME!!`
    resp2.style.color = 'green'
  } else {
    resp2.innerText = `Ops ${nome} você está reprovado(a).`
    resp2.style.color = 'red'
  }
})
