// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
 const frm = document.querySelector('form');
 const resp = document.querySelector('h3');

//Cria um "ouvinte" de evento, acionado quando o botão submit for apertado...
frm.addEventListener('submit', (e) => {
  const name = frm.inName.value; // Obtem o nome digitado no form
  resp.innerText = `Olá ${name}`; // Exibe a resposta do programa
  e.preventDefault(); //Evita envio do form
});
