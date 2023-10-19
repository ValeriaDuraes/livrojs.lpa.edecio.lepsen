// Criar referência ao form e aos elementos que apresentarão as respostas
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// Criar um 'ouvinte' que será acionado quando clicar no botão submit
frm.addEventListener('submit', (e) => {
  e.preventDefault() // Previne o envio do form

  const allowedSpeed = Number(frm.inAllowedSpeed.value) // Obtém o valor do elemento no form
  const driverSpeed = Number(frm.inDriverSpeed.value)
  const speed20 = allowedSpeed * 1.2

  if (driverSpeed <= allowedSpeed) {
      resp.innerText = `Sem multa`
      } else {
      if (driverSpeed <= speed20) {
        resp.innerText = `Multa leve`
      }else {
        resp.innerText = `Multa grave`
      }
    }
})