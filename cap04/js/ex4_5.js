// Cria a referência ao form e ao elemento que apresentará a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// Cria o "ouvinte" de evento que ao clicar no botão submit irá o envio do formulário
frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = Number(frm.inNumber.value) // Obtém o valor do número digitado no form

  const squareRoot = Math.sqrt(number)

    if(Number.isInteger(squareRoot)){
      resp.innerText = `Raiz: ${squareRoot}`
    }else {
      resp.innerText = `Não há raiz exata para ${number}`
    }
})