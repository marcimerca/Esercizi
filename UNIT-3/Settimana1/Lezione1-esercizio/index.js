var UserNew1 = /** @class */ (function () {
    function UserNew1(_nome, _cognome, _credito, _numeroChiamate) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.chiamata(this.numeroChiamate);
    }
    UserNew1.prototype.ricarica = function (soldi) {
        this.credito += soldi;
        console.log("Il credito aggiornato \u00E8 di ".concat(this.credito.toFixed(2), " euro."));
    };
    UserNew1.prototype.chiamata = function (numeroMin) {
        if (this.credito - numeroMin * 0.2 < 0) {
            console.log("Credito (".concat(this.credito.toFixed(2), " euro) non sufficiente per effettuare la chiamata."));
        }
        else {
            this.credito = this.credito - numeroMin * 0.2;
            this.numeroChiamate += numeroMin;
            console.log("Hai passato ".concat(numeroMin, " minuti in chiamata, il credito rimanente \u00E8 ").concat(this.credito.toFixed(2), " euro."));
        }
    };
    UserNew1.prototype.chiama404 = function () {
        return this.credito;
    };
    UserNew1.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    UserNew1.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return UserNew1;
}());
var utente1New1 = new UserNew1("Marcello", "Mercanzin", 1, 2);
console.log(utente1New1);
console.log(utente1New1.chiama404());
utente1New1.chiamata(2);
utente1New1.chiamata(3);
