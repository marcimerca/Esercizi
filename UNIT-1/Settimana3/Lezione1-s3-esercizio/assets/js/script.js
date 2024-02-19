/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  document.querySelector("h1").innerText = "Io sono il nuovo titolo";
};

changeTitle();

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  document.querySelector("h1").className = "myHeading";
};

addClassToTitle();

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  let lista = document.querySelectorAll("div p");
  for (let i = 0; i < lista.length; i++) {
    lista[i].innerText = "sono un paragrafo cambiato";
  }
};

changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  let lista = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < lista.length; i++) {
    lista[i].innerText = "Ora porto a google";
    lista[i].setAttribute("href", "https://www.google.com");
    lista[i].setAttribute("target", "_blank");
  }
};

changeUrls();

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const newLi = document.createElement("li");
  newLi.innerText = "4th - sono il nuovo elemento aggiunto alla lista";
  document.getElementById("secondList").appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  const newPara = document.createElement("p");
  newPara.innerText = "Sono stato aggiunto al primo div";
  document.querySelectorAll("div")[0].appendChild(newPara);
};

addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const primaLista = document.getElementById("firstList");
  primaLista.style.display = "none";
};
hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  let elencoListe = document.querySelectorAll("ul");
  for (let i = 0; i < elencoListe.length; i++) {
    elencoListe[i].setAttribute("style", "background-color: green");
  }
};

paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  let stringa = document.querySelector("h1");
  stringa.addEventListener("click", function () {
    stringa.innerText = stringa.innerText.slice(0, -1);
  });
};
// non va fatto cos' ma con splice rivedere

makeItClickable();

///altra versine prof, trasformando stringa in array

const makeItClickable2 = function () {
  let stringa = document.querySelector("h1");
  stringa.style.cursor = "pointer";
  stringa.addEventListener("click", function () {
    let scritta = stringa.innerText.split("");
    scritta.pop();
    let nuovaScritta = scritta.join("");
    scritta.innerText = nuovaScritta;
  });
};
makeItClickable2();

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */
// const revealFooterLink = function () {
//   const footer = document.querySelector("footer");
//   footer.addEventListener("click", function () {
//     alert(document.querySelector("footer a"));
//   });
// };

//vedere versione prof
const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", function () {
    alert(document.querySelector("footer a"));
  });
};

revealFooterLink();

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const oggetti = [
  {
    immagine: "banana",
    nome: "frutto",
    quantita: 5,
    prezzo: 10,
  },
  {
    immagine: "bbo",
    nome: "fkjreh",
    quantita: 1,
    prezzo: 3,
  },
  {
    immagine: "babbs",
    nome: "frfrfr",
    quantita: 6,
    prezzo: 100,
  },
  {
    immagine: "bag4g",
    nome: "frgt4gv",
    quantita: 4,
    prezzo: 112,
  },
  {
    immagine: "banfr",
    nome: "frutg5",
    quantita: 1,
    prezzo: 19,
  },
];

const generateTable = function () {
  const tableContainer = document.getElementById("tableArea");
  const tabella = document.createElement("table");
  const intestazione = document.createElement("tr");
  const thId = document.createElement("th");
  thId.innerText = "ID";
  const thImmagine = document.createElement("th");
  thId.innerText = "Immagine";
  const thNome = document.createElement("th");
  thId.innerText = "Nome prodotto";
  const thQuantita = document.createElement("th");
  thId.innerText = "Quantità";
  const thPrezzo = document.createElement("th");
  thId.innerText = "Prezzo";

  intestazione.appendChild(thId);
  intestazione.appendChild(thImmagine);
  intestazione.appendChild(thNome);
  intestazione.appendChild(thPrezzo);

  tabella.appendChild(intestazione);
};

generateTable();

// const generateTable = function () {
//   const table = document.createElement("table");
//   document.getElementById("tableArea").appendChild(table);
//   const titoli = ["immagine", "nome prodotto", "quantità", "prezzo"];
//   const titleRow = document.createElement("tr");
//   table.appendChild(titleRow);
//   for (let i = 0; i < titoli.length; i++) {
//     let title = document.createElement("th");
//     title.innerHTML = titoli[i];
//     titleRow.appendChild(title);
//   }
//   const row = document.createElement("tr");
//   table.appendChild(row);
//   for (let i = 0; i < oggetti.length; i++) {
//     const oggetto = document.createElement("td");
//     oggetto.innerHTML = oggetti[i].immagine + oggetti[i].nome;
//     row.appendChild(oggetto);
//   }
// };

generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {};

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

// const changeColorWithRandom = function () {
//   titoletto = document.getElementById("h2");
//   titoletto.addEventListener("click", function () {
//     document.getElementById("changeMyColor").style.color = "blue";
//   });
// };

// changeColorWithRandom();
