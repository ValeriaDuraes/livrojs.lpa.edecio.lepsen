const neighborhood = prompt("Bairro da entrega: ")
let deliveryFee
switch (neighborhood) {
  case 'Downtowm':
    deliveryFee = 5.00
    break
  case 'Fragata':
  case 'Três Vendas':
    deliveryFee = 7.00
    break
  case 'Laranjal':
    deliveryFee = 10.00
    break
  default:
    deliveryFee = 8.00
    break
}

alert(`Taxa R$${deliveryFee.toFixed(2)}`)