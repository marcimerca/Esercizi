let books = []; // mio array

//faccio fetch per recuperare dati
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore di rete");
    }
    return response.json();
  })
  .then((data) => {
    books = data;
    console.log(books);
    showBooks();
  })
  .catch((error) => {
    console.log("C'è stato un errore", error);
  });

const mainRow = document.getElementById("main-row");

function showBooks() {
  mainRow.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    mainRow.innerHTML += `<div class="col-md-6 col-lg-4 my-3">
          <div class="card h-100" style="max-width: 18rem">
            <img class="card-img-top" src="${books[i].img}" />
            <div class="card-body d-flex flex-column justify-content-end align-items-start">
              <h5 class="card-title">${books[i].title}</h5>
              <span class="badge rounded-pill text-bg-dark">${books[i].category}</span>
              <p>${books[i].price} &euro;</p>
              <div class="d-flex gap-1"><button type="button" class="btn btn-success">Compra Ora</button>
              <button type="button" onclick="scarta(${i})" class="btn btn-danger">Scarta</button>
              </div>
            </div>
          </div>
        </div>`;
  }
}
function scarta(index) {
  books.splice(index, 1);
  showBooks();
}
let otherBooks = [];
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore");
    }
    return response.json();
  })
  .then((data) => {
    otherBooks = data;
    console.log(otherBooks);
  })
  .catch((err) => {
    console.log("errore", err);
  });
