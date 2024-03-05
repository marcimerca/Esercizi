const nome = document.getElementById("nome");
const pStampa = document.getElementById("stampa");
const btnSalva = document.getElementById("btnSalva");
const btnElimina = document.getElementById("btnElimina");

btnSalva.addEventListener("click", function () {
  localStorage.setItem("nuovoNome", nome.value);
  let nomeRecuperato = localStorage.getItem("nuovoNome");
  pStampa.innerText = nomeRecuperato;
  nome.value = "";
});

btnElimina.addEventListener("click", function () {
  localStorage.removeItem("nuovoNome");
  pStampa.innerText = "No Data";
  nome.value = "";
});
