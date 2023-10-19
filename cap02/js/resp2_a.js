// Uma farmácia está com uma promoção - Na compra de duas unidades do mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.

//Criar uma referência ao formulário e aos elementos h3
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// Criar um "ouvinte" de evento que será acionado quando o botão sumit for clicado
frm.addEventListener('submit', e => {
  const medicineName = frm.inMedicine.value // Obtem o conteúdo dos campos
  const price = Number(frm.inPrice.value)

  const productPrice = price * 2
  const rest = productPrice % 2
  const finalValue = productPrice - rest

  // const promocao = Math.floor(preco * 2) -> Solução do livro com cálculo em uma linha só

  resp1.innerText = `Promoção de ${medicineName}`
  resp2.innerText = `Leve dois por apenas R$${finalValue.toFixed(2)}`

  e.preventDefault() // Evita o envio do form
})
