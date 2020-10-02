console.log("Projeto Checkout");
const inputCep = document.querySelector("#cepUsuario");

inputCep.addEventListener("keyup", apiCEP);


async function apiCEP(e) {
  if (this.value.length == 8) {

    let resposta = await fetch(
      "https://brasilapi.com.br/api/cep/v1/" + this.value
    );

    let cep = await resposta.json();

    console.log(cep);
  }

}

