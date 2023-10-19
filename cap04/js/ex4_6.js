// Criar referência ao form e aos elementos de resposta do programa
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

// Criar um 'ouvinte' de evento, que será acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
  e.preventDefault() // Evita o envio do form
  const withdraw = Number(frm.inWithdraw.value) //Obtém o valor do saque

  if (withdraw % 10 != 0) {
    alert('Valor inválido para as notas disponíveis R$ 10, 50, 100.')
    frm.inWithdraw.focus() // 
    return
  }

  const hundredBills = Math.floor(withdraw / 100)
  let rest = withdraw % 100
  const fiftyBills = Math.floor(rest / 50)
  rest = rest % 50
  const tenBills = Math.floor(rest / 10)
  
  if (hundredBills > 0) {
    resp1.innerText = `Notas de R$100: ${hundredBills}`
  } 
  if (fiftyBills > 0) {
    resp2.innerText = `Notas de R$50: ${fiftyBills}`
  } 
  if (tenBills > 0) {
    resp3.innerText = `Notas de R$10: ${tenBills}`
  }
})