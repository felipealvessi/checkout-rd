console.log("Projeto Checkout");

const inputCep = document.querySelector("#cepUsuario");

let inputEndereco = document.querySelector("#cepUsiario");
let inputEndereco = document.querySelector("#bairroUsiario");
let inputEndereco = document.querySelector("#cidadeUsiario");

inputCep.addEventListener("keyup", apiCEP);


async function apiCEP(e) {
  if (this.value.length == 8) {

    let resposta = await fetch(
      "https://brasilapi.com.br/api/cep/v1/" + this.value
    );

    let cep = await resposta.json();
    inputEndereco.value = cep.street;
    inputBairro.value = cep.neighborhood;
    inputCidade.value = cep.city;

  }
}

