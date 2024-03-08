const baseURL = "https://striveschool-api.herokuapp.com/api/product/";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDlmMTJkN2IxMTAwMTkwZTZkZTkiLCJpYXQiOjE3MDk4OTAwMzMsImV4cCI6MTcxMTA5OTYzM30.nlFoZN0p7OwndW-mm88_HCFeqNH7IiKCSVW9yRhsFmU";
const mainRowDetails = document.getElementById("main-details-row");
const params = new URLSearchParams(location.search);
const id = params.get("id"); //ottengo l'id della pagina
console.log(id);
let productDetails = {};

window.addEventListener("load", init);

function init() {
  loadProductDetails();
}

const loadProductDetails = async () => {
  try {
    const response = await fetch(baseURL + id, {
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
    });
    productDetails = await response.json();
    console.log(productDetails);
    displayProductDetails();
  } catch (error) {
    console.log(error);
  }
};

function displayProductDetails() {
  let col = document.createElement("div");
  col.classList.add(
    "col",
    "d-flex",
    "justify-content-around",
    "align-items-top"
  );
  col.innerHTML = ` <img  src="${productDetails.imageUrl}" class="card-img-top img-fluid w-50 p-4 border-end border-black" alt="${productDetails.name}">
  <div class=" d-flex flex-column align-items-start gap-2 ms-4">
  <p>${productDetails.brand}</p>
  <h2>${productDetails.name}</h2>
  <span class="badge rounded-pill text-bg-dark text-warning">${productDetails.price} &euro;</span>
  <p>${productDetails.description}</p>
  </div>`;
  mainRowDetails.append(col);
}
