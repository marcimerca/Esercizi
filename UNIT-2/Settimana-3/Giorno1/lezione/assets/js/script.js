// esercizio 1
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confronta(altroUtente) {
    if (this.age > altroUtente.age) {
      console.log(
        `${this.firstName} ha ${this.age} anni ed è più vecchio di ${altroUtente.firstName}, che ha ${altroUtente.age} anni. `
      );
    } else if (this.age < altroUtente.age) {
      console.log(
        `${altroUtente.firstName} ha ${altroUtente.age} anni ed è vecchio di ${this.firstName}, che ha ${this.age} anni. `
      );
    } else {
      console.log(
        `${altroUtente.firstName} e ${this.firstName}  hanno  la stessa età, ${altroUtente.age} anni.`
      );
    }
  }
}
const user1 = new User("Marcello", "Mercanzin", 27, "Vicenza");
console.log(user1);
const user2 = new User("Zlatan", "Ibrahimovic", 42, "Milano");
const user3 = new User("Brad", "Pitt", 60, "USA");
const user4 = new User("John", "Dave", 60, "USA");
user1.confronta(user2);
user2.confronta(user3);
user3.confronta(user4);

// esercizio 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  confrontaPadrone(altroPet) {
    if (this.ownerName == altroPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const listaPets = document.getElementById("listaPets");
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const btnAggiungi = document.getElementById("aggiungiPet");

btnAggiungi.addEventListener("click", function () {
  const newPet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  let listItem = document.createElement("li");
  listItem.innerText = `Pet Name: ${newPet.petName}, Owner Name: ${newPet.ownerName}, Species: ${newPet.species}, Breed: ${newPet.breed}`;
  listaPets.appendChild(listItem);
});

const pet1 = new Pet("axel", "marcello", "cane", "golden");
const pet2 = new Pet("tortuga", "marcello", "tartaruga", "d'acqua");

console.log(pet1.confrontaPadrone(pet2));
