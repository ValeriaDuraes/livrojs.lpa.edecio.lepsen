// Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago...

// Criar uma referência ao form e ao elemento h3
const frm = document.querySelector('form');

// O objeto document pode através do método querySelector, referenciar o id do elemento h3
const resp1 = document.querySelector('#outResp1')

// Criar um "ouvinte" de evento, que será acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const preco = Number(frm.inPreco.value); // Obtem o conteúdo dos campos
  const consumo = Number(frm.inConsumo.value);

  const valor = (preco / 1000) * consumo
  resp1.innerText = `Valor a pagar R$${valor.toFixed(2)}`
  
  e.preventDefault()
})