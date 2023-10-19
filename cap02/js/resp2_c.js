// Um supermercado está com promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção.

// Criando uma referência ao formulário e aos h3 (onde serão exibidas as respostas)
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outPromotionPrice')
const resp2 = document.querySelector('#out3ProductPrice')

// Criando um "ouvinte" de evento que será acionado ao clicar em submit
frm.addEventListener('submit', e => {
  const productName = frm.inProductName.value // Obtém o valor do campo inProductName
  const productPrice = Number(frm.inPrice.value) // Obtém o valor do campo inProductPrice

  promocao = productPrice * 3 - productPrice * 0.5
  terceiro = productPrice / 2

  resp1.innerText = `${productName} - Promoção: Leve 3 por R$${promocao.toFixed(
    2
  )}`
  resp2.innerText = `O 3º produto custa apenas R$${terceiro.toFixed(2)}`

  e.preventDefault() // Evita o envio do formulário
})
 