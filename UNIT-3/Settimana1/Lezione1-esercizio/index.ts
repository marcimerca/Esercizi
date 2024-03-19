interface Phone {
  credito: number;
  numeroChiamate: number; //numero di minuti
}

class UserNew1 implements Phone {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;
  constructor(
    _nome: string,
    _cognome: string,
    _credito: number,
    _numeroChiamate: number
  ) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
    this.chiamata(this.numeroChiamate);
  }
  ricarica(soldi: number) {
    this.credito += soldi;
    console.log(`Il credito aggiornato è di ${this.credito.toFixed(2)} euro.`);
  }
  chiamata(numeroMin: number) {
    if (this.credito - numeroMin * 0.2 < 0) {
      console.log(
        `Credito (${this.credito.toFixed(
          2
        )} euro) non sufficiente per effettuare la chiamata.`
      );
    } else {
      this.credito = this.credito - numeroMin * 0.2;
      this.numeroChiamate += numeroMin;
      console.log(
        `Hai passato ${numeroMin} minuti in chiamata, il credito rimanente è ${this.credito.toFixed(
          2
        )} euro.`
      );
    }
  }
  chiama404() {
    return this.credito.toFixed(2);
  }
  getNumeroChiamata() {
    return this.numeroChiamate;
  }
  azzeraChiamate() {
    this.numeroChiamate = 0;
  }
}

let utente1New1 = new UserNew1("Marcello", "Mercanzin", 1, 2);
console.log(utente1New1);
console.log(utente1New1.chiama404());
utente1New1.chiamata(2);
utente1New1.azzeraChiamate();
console.log(utente1New1);
