console.log("Projeto Checkout");
const inputCep = document.querySelector("#cepUsuario");

inputCep.addEventListener("keyup", apiCEP);

function apiCEP(e) {
  if (this.value.length == 8) {
    alert('CEP digitado: ' + this.value);
  }
}
