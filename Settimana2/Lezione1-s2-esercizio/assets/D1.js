/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Una variabile in JS è come una scatola che può contenere vari giochi. Questi giochi posso usarli in vari modi e possono essere di vario tipo:
- stringa: si usa di solito per le parole e le frasi. Si indicano fra " ".  Es: const nome = "Marcello"; const frasePreferita = "Nel blu dipinto di blu";
- numero: si usa per i numeri. Es: const numero = 4; const numero2 = 9.8;
- boolean: può avere valore true(vero) oppure valore false(falso). Es: const sonoAlto = true; const sonoViola = false;
- null: è come se nella scatola non mettessi nessun gioco, e voglio proprio che non ci sia niente. Es: const scatola = null;
- undefined: è come se nella scatola dei giochi ora non ci fosse niente, però è la scatola è pronta, se voglio, per ricevere dei giochi.
 Es: let scatola; (ora la scatola è vuota) ---> let scatola = "Piena di giochi"; (ora la scatola non è più undefined)


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Marcello";
console.log(myName);
document.getElementById("esercizio2").innerHTML = myName;
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);
let number1 = 12;
let number2 = 20;

document.getElementById("esercizio3").innerHTML = number1 + number2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

document.getElementById("esercizio4").innerHTML = x;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Mercanzin";
document.getElementById("esercizio5a").innerHTML = myName;
console.log(myName);

const myAge = 27;
console.log(myAge);
//myAge = 18;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);
document.getElementById("esercizio6").innerHTML = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);
document.getElementById("esercizio7a").innerHTML = name1 !== name2;

console.log(name1 !== name2.toLowerCase());
document.getElementById("esercizio7b").innerHTML =
  name1 !== name2.toLocaleLowerCase();
