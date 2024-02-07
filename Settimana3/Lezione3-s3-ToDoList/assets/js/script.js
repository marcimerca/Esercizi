const task = document.getElementById("task");

const aggiungi = document.getElementById("aggiungi");

const divLista = document.getElementById("list-container");

const errore = document.getElementById("errore");

const regexTask = /^\S.*\S?$/;

aggiungi.addEventListener("click", function () {
  if (regexTask.test(task.value)) {
    const lista = document.createElement("ul");
    const elementoLista = document.createElement("li");
    elementoLista.setAttribute("id", elementoLista.value);
    const btnElimina = document.createElement("button");
    btnElimina.setAttribute("id", "elimina");
    btnElimina.innerText = "Cancella";
    elementoLista.innerText = task.value;

    divLista.appendChild(lista);
    lista.appendChild(elementoLista);
    elementoLista.appendChild(btnElimina);
    task.value = "";
    errore.innerText = "";

    let barrato = false;
    elementoLista.addEventListener("dblclick", function () {
      if (barrato) {
        elementoLista.style.textDecoration = "none";
        elementoLista.style.backgroundColor = "lightgrey";

        barrato = false;
      } else {
        elementoLista.style.textDecoration = "line-through";
        elementoLista.style.backgroundColor = "lightgreen";
        barrato = true;
      }
    });

    btnElimina.addEventListener("click", function () {
      elementoLista.style.display = "none";
    });
  } else {
    errore.innerText =
      "Il task deve cominciare con un carattere esclusi gli spazi";
  }
});
