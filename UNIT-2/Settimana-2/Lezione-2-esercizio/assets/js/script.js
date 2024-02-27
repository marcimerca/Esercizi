const btnCard = document.querySelectorAll(".button-mostra-nascondi");

btnCard.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.innerText === "Nascondi sezione") {
      this.innerText = "Mostra";
    } else {
      this.innerText = "Nascondi sezione";
    }
  });
});

// contare numero viaggi

window.onload = function () {
  Viaggi = document.querySelectorAll(".card");
  const numViaggi = Viaggi.length;
  alert(`In questa pagina sono presenti ${numViaggi} viaggi per te!`);
};

// rimuovi card

rimuoviCard = () => {
  cards = document.querySelectorAll(".card");
  cards.forEach((element) => {
    element.style.display = "none";
  });
};
