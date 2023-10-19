//  Criar referência ao form e aos elementos que apresentarão respostas
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1') 
const resp2 = document.querySelector('#outResp2') 

// Criar um 'ouvinte' de evento que enviará o formulário quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
  e.preventDefault() // Evita o envio do form

  const valor = Number(frm.inValue.value)

  // Caso o valor for insuficiente
  if(valor < 1.00) {
    alert('Valor insuficiente, mínimo de R$1.00')
    frm.inValue.focus()
    return
  }

  // Declara variáveis
  let tempo
  let troco

  // Cria as condições para verificar tempo e troco
  if(valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if (valor >= 1.75){
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.00
  }

  // Exibe respostas
  resp1.innerText = `Tempo: ${tempo}min`
  if (troco > 0) {
    resp2.innerText = `Troco R$ ${troco.toFixed(2)}` 
  }
})