//creo tabella

const contenitore = document.getElementById("contenitoreTombola");
const arrayCelle = [];
creaTabellone = () => {
  for (let i = 1; i < 91; i++) {
    const cella = document.createElement("div");
    cella.className = "cella";
    const numero = document.createElement("h1");
    numero.innerText = i;
    arrayCelle.push(numero.innerText);
    cella.appendChild(numero);
    contenitore.append(cella);
  }
};

creaTabellone();

//gestisco il button

let numEstratto;
const numEstratti = [];

const stampaNumEstratto = document.getElementById("numEstratto");

const btnEstrai = document.getElementById("estrai");

btnEstrai.addEventListener("click", function () {
  stampaNumEstratto.innerText = "";
  numEstratto = Math.floor(Math.random() * 90 + 1);

  numEstratti.push(numEstratto);
  stampaNumEstratto.innerText = `Il numero estratto è: ${numEstratto}`;

  console.log(numEstratti);
  for (let i = 0; i < arrayCelle.length; i++) {
    if (numEstratto === parseInt(arrayCelle[i])) {
      const cellaCorrispondente =
        contenitore.getElementsByClassName("cella")[i];
      cellaCorrispondente.style.backgroundColor = "yellow";
    }
  }
});

//devo evidenziare numero corrispondente sulla tombola

// se numero estratto = numero cella-- > applico classe alla cella

// btnEstrai.addEventListener("click", function () {
//   stampaNumEstratto.innerText = "";
//   numEstratto = Math.floor(Math.random() * 90 + 1);
//   numEstratti.push(numEstratto);
//   stampaNumEstratto.innerText = `Il numero estratto è: ${numEstratto}`;
//   console.log(numEstratti);
//   for (let i = 0; i < arrayCelle.length; i++) {
//     if ((numEstratto = arrayCelle[i])) {
//     }
//   }
// });
