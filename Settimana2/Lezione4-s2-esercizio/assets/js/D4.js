/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");

function area(l1, l2) {
  return l1 * l2;
}

console.log("L'area del rettangolo è " + area(9, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2");

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  }
  return num1 + num2;
};

console.log("La somma dei numeri è " + crazySum(2, 5));
console.log("La somma dei numeri è " + crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");

function crazyDiff(param1, param2 = 19) {
  if (param1 > param2) {
    return Math.abs((param1 - param2) * 3);
  }
  return Math.abs(param1 - param2);
}

console.log("La differenza assoluta fra parametri è " + crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.   (altrimenti retuna false)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");

boundary = (n) => {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
};

console.log(boundary(50));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");

epify = (stringa) => {
  if (stringa.indexOf("EPICODE") === 0) {
    return stringa;
  }
  return stringa.concat("EPICODE ");
};

console.log(epify("Ciao a te "));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6");

check3and7 = (n) => {
  if (n % 3 === 0) {
    console.log("Il numero " + n + " è un multiplo di 3");
  } else if (n % 7 === 0) {
    console.log("Il numero " + n + "  è un multiplo di 7");
  } else {
    console.log("Il numero " + n + " NON è un multiplo di 3 o 7");
  }
};

check3and7(19);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7");

reverseString = (stringa) => {
  console.log(
    "La stringa iniziale è " +
      stringa +
      ", invertita diventa " +
      stringa.split("").reverse().join("")
  );
};

reverseString("camaleonte");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8");

// upperFirst = (stringa) => {
//   let stringaDivisa = stringa.split(" ");
//   for (let i = 0; i < stringaDivisa.length; i++) {

//   }
// };

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("Esercizio 9");

/* SCRIVI QUI LA TUA RISPOSTA */

cutString = (stringa) => {
  stringa = stringa.slice(1, stringa.length - 1);
  console.log(stringa);
};
cutString("Ciao a tutti quanti i presenti");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10");
