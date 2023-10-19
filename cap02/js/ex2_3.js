// Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

//Criar uma referência ao form e aos elementos h3 (respostas)
const frm = document.querySelector('form') // document --> objeto e o querySelector --> método
// O objeto document pode através do método querySelector, referenciar as tags h3 por seus IDs
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const veiculo = frm.inVeiculo.value // Obtem o conteúdo dos campos
  const preco = Number(frm.inPreco.value)

  const entrada = preco * 0.5 // Calcula o valor da entrada
  const valorParcelas = (preco * 0.5) / 12 // Calcula o valor das parcelas

  resp1.innerText = veiculo
  resp2.innerText = `Entrada no valor de R$${entrada.toFixed(2)}` // Exibe as respostas
  resp3.innerText = `+ 12x de R$${valorParcelas.toFixed(2)}`

  e.preventDefault() // Evita o envio do formulário
})
