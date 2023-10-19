// Criar referência ao form e aos elementos que apresentarão respostas
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// alert('Hello!')
// Criar um "ouvinte" de evento que ouvirá quando o botão for clicado e enviará o formulário
frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const ladoA = Number(frm.inLadoA.value) // Obtém e converte os dados de entrada
  const ladoB = Number(frm.inLadoB.value) // Obtém e converte os dados de entrada
  const ladoC = Number(frm.inLadoC.value) // Obtém e converte os dados de entrada

  // Cria as condições para exibir a resposta
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = 'Lados não podem formar um triângulo!'
  } else {
    resp1.innerText = 'Lados podem formar um triângulo!'
    if (ladoA == ladoB && ladoA == ladoC) {
      resp2.innerText = 'Equilátero, pois possuem os três lados iguais!'
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      resp2.innerText = 'Isósceles, pois possuem dois lados iguais!'
    } else {
      resp2.innerText = 'Escaleno, pois possui os três lados iguais!'
    }
  }
})

