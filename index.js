const listaDeReceitas = [];
const inputTitulo = document.querySelector("#titulo");
const selectDificuldade = document.querySelector("#dificuldade");
const textAreaIngredientes = document.querySelector("#ingredientes");
const textAreaPreparo = document.querySelector("#preparo");
const inputVideo = document.querySelector("#link");
const painelReceitas = document.querySelector(".painel-receitas");

const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.onclick = () => {
  const inputVegano = document.querySelector("input[name='vegano']:checked");

  const novaReceita = {
    titulo: inputTitulo.value,
    dificuldade: selectDificuldade.value,
    ingredientes: textAreaIngredientes.value,
    preparo: textAreaPreparo.value,
    video: inputVideo.value,
    vegano: inputVegano.value,
    view: false,
  };

  listaDeReceitas.push(novaReceita);

  alert("Cadatrado com sucesso!");

  exibirReceitas();
};

function exibirReceitas() {
  listaDeReceitas.forEach((receita) => {
    if (receita.view) return;

    const novaReceitaHtml = `
    <article>
          <h2>${receita.titulo}</h2>
          <small>Dificuldade: ${receita.dificuldade}</small>
          <p> ${receita.preparo}</p>
        </article>
    `;

    receita.view = true;
    painelReceitas.innerHTML += novaReceitaHtml;
  });
}

// function exibirReceitas() {

//   let htmlReceitas = '';

//   for (let index = 0; index < listaDeReceitas.length; index++) {
//     htmlReceitas += `<article class="card">
//           <h2>${listaDeReceitas[index].titulo}</h2>
//           <small>Dificuldade: ${listaDeReceitas[index].dificuldade}</small>
//           <p> ${listaDeReceitas[index].preparo}</p>
//       </article>`;
//   }

//   let painelReceitas = document.querySelector('.painel-receitas');

//   painelReceitas.innerHTML = htmlReceitas;

// }
