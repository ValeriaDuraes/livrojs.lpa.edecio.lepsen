// Referenciar o form e os elementos que apresentarão respostas
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// Cria o 'ouvinte' de eventos, que será acionado ao clicar em submit
frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const number = Number(frm.inNumber.value) // Obtém os valores do form

  const evenOrOdd = number % 2 === 0 ? 'par' : 'ímpar'
  resp.innerText = `${number} é ${evenOrOdd}.` 

  // if(evenOrOdd % 2 === 0) {
  //   resp.innerText = `${evenOrOdd} é par` 
  // } else {
  //   resp.innerText = `${evenOrOdd} é ímpar`
  // }
})