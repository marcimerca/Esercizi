/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

// concatena("pippo", "pluto") {
//   risultato PIUTO
// } si può fare metodi array o metodi stringhe

concatena = (stringa1, stringa2) => {
  let nuovaStringa = stringa1.slice(0, 2).concat(stringa2.slice(-3));
  return nuovaStringa.toUpperCase();
};

console.log(concatena("dinosauro", "mammut"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
//creare array vuoto, poi dieci valori compreso fra 0 e 100, vedi es colori, giorni scorsi

let arrayValori = [];

popolaArray = () => {
  for (let i = 0; i < 10; i++) {
    arrayValori.push(Math.floor(Math.random() * 101));
  }
  return arrayValori;
};
popolaArray();
console.log(arrayValori);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const numeri = [1, 7, 2, 18, 123, 97, 34, 8, 11];
console.log(numeri);

trovaPari = (array) => {
  const arrayPari = array.filter((element) => {
    return element % 2 === 0;
  });
  return arrayPari;
};

console.log(trovaPari(numeri));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

somma1 = (array) => {
  let somma = 0;
  array.forEach((element) => (somma += element));
  return somma;
};

console.log(somma1(numeri));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

somma2 = (array) => {
  const sommaRed = array.reduce(
    (accumul, currentValue) => accumul + currentValue
  );
  return sommaRed;
};

console.log(somma2(numeri));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/ //passi array e un numero es: 5, dopo incrementati di 5

arrayIncrementato = (array, n) => {
  const arrayNuovo = array.map((element) => element + n);
  return arrayNuovo;
};

console.log(arrayIncrementato(numeri, 100));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

//dentro map scrivo metodo che mi scriva lunghezza stringhe

const arrayStringhe = [
  "Il mio nome è",
  "Massimo Decimo Meridio",
  "comandante delle legioni Felix",
];

ritornaLung = (array) => {
  const arrayLung = array.map((element) => element.length);
  return arrayLung;
};
console.log(ritornaLung(arrayStringhe));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("esercizio8");

const arrayDispariForEach = [];

const creaArrayDispari = () => {
  const numeri = [];
  for (let i = 1; i <= 99; i++) {
    numeri.push(i);
  }

  numeri.forEach((numero) => {
    if (numero % 2 !== 0) {
      arrayDispariForEach.push(numero);
    }
  });
};

console.log(creaArrayDispari());

// arrayDispari = () => {
//   let arrayDispari = [];
//   for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) {
//       arrayDispari.push(i);
//     }
//   }
//   return arrayDispari;
// };
// console.log(arrayDispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("esercizio9");
function piuVecchio() {
  let anno = 2100;
  movies.forEach((element) => {
    if (Number(element.Year) < anno) {
      anno = Number(element.Year);
    }
  });
  console.log(anno);
}
piuVecchio();

// trovaVecchio = () => {
//   let filmVecchio = movies[0];
//   movies.forEach((element) => {
//     if (parseInt(element.Year) < parseInt(filmVecchio.Year)) {
//       filmVecchio = element;
//     }
//   });
//   return filmVecchio;
// };

// console.log(trovaVecchio());
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
contaFilm = () => {
  return movies.length;
};
console.log(contaFilm());

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
titoliFilm = () => {
  const titoliFilm = movies.map((element) => element.Title);
  return titoliFilm;
};
console.log(titoliFilm());

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente. (anno > 2000)
*/

filmrecenti = () => {
  const filmRecenti = movies.filter((element) => element.Year >= 2000);
  return filmRecenti;
};

console.log(filmrecenti());

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

sommaAnniFilm = () => {
  const sommaAnni = movies.reduce((accumul, currentValue) => {
    return accumul + parseInt(currentValue.Year);
  }, 0);
  return sommaAnni;
};

console.log(sommaAnniFilm());

// ----------------------------------------

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro). ***
*/
// base

trovaFilm = (imdbID) => {
  const filmSpec = movies.find((element) => {
    return element.imdbID === imdbID;
  });
  return filmSpec;
};

console.log(trovaFilm("tt2395427"));

//vuol dire passa id e trova oggetto film
//html select, button cerca e trovo titolo fil, anno, film locandina,
// A) ricerca array oggetti B) destrutturazione oggetti, C) visualizzzione singole prop nell'html

/*
1) elenco a tendina --> popolare l'elenco con i titoli presenti nella base dati indicando come value l'id(deve essere diverso da tutti gli altri)
2) button che seleziona elemento scelto e dall'elenco e ne mostra i singoli dati


*/

//dico chi è la select
// const elenco = document.getElementById("elenco"); //perchè dobbiamo eseguire operazione, non serve creare array
// movies.forEach((element) => {
//   let option = document.createElement("option");
//   option.setAttribute("value", element.imdbID);
//   option.innerText = element.Title;
//   elenco.appendChild(option);
// });

// document.getElementById("scegli").addEventListener("click", function () {
//   let imdbID = elenco.value;
//   const filmScelto = movies.find((element) => {
//     return element.imdbID === imdbID;
//   });
//   console.log(filmScelto);

//   document.getElementById("titolo").innerText = filmScelto.Title;
//   document.getElementById(
//     "anno"
//   ).innerText = `Anno di produzione: ${filmScelto.Year}`;
//   document.getElementById(
//     "locandina"
//   ).innerHTML = `<img src="${filmScelto.Poster}" alt= "locandina">`;
//   document.getElementById("trailer").innerHTML = filmScelto.trailer;
// });

// // console.log(cercaFilm("tt4154796"));
// /* ESERCIZIO 15 (findIndex)
//   Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
// */
