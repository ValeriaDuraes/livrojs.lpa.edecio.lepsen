//  Elaborar um programa para um cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

// Cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector('form'); // document --> objeto e querySelector --> método
// O objeto document pode a partir do método querySelector, referenciar as tags h3 e h4
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
  const title = frm.inTitle.value; // Obtém o conteúdo dos campos
  const duration = Number(frm.inDuration.value);

  const hours = Math.floor(duration / 60) // Arredonda para baixo o resultado
  const minutes = duration % 60; // Obtém o resto da divisão

  resp1.innerText = title; // Exibe as respostas
  resp2.innerText = `${hours} hora(s) e ${minutes} minuto(s).`;

  e.preventDefault(); //Evita envio do form
})