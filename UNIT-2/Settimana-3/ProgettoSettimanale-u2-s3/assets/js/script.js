const mainRow = document.getElementById("main-row");
const baseURL = "https://striveschool-api.herokuapp.com/api/product/";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDlmMTJkN2IxMTAwMTkwZTZkZTkiLCJpYXQiOjE3MDk4OTAwMzMsImV4cCI6MTcxMTA5OTYzM30.nlFoZN0p7OwndW-mm88_HCFeqNH7IiKCSVW9yRhsFmU";

let startProduct = {
  name: "Latitude 3540 Notebook",
  brand: "Dell",
  imageUrl:
    "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-15-3540-laptop/media-gallery/notebook-latitude-15-3540-gray-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
  price: 1080,
  description:
    "Processore: Intel® Core™ i7-1355U di 13a generazione;OS: Windows 11 Pro; Scheda video: Scheda grafica integrata Intel® Iris® Xe o UHD per processore i7-1355U; Memoria: 16 GB (2x8 GB), DDR4, 3.200 MT/s;Display: 15.6 pollici, display Full HD (1920x1080)",
};
let productsList = [];
const btnPost = document.getElementById("btnPost");

window.addEventListener("load", init);
async function init() {
  await postProducts();
  await loadProducts();
}

const postProducts = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(startProduct),
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
    });
    const newProduct = await response.json();
    productsList.push(newProduct);
  } catch (error) {
    console.log(error);
  }
};

const loadProducts = async () => {
  try {
    const response = await fetch(baseURL, {
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
    });
    productsList = await response.json();

    console.log(productsList);
    displayProducts();
  } catch (error) {
    console.log(error);
  }
};

function displayProducts() {
  for (let i = 0; i < productsList.length; i++) {
    let colCard = document.createElement("div");
    colCard.classList.add("col-4");
    colCard.innerHTML = `<div class="card h-100 d-flex flex-column" style="width: 18rem;">
    
  <img src="${productsList[i].imageUrl}" class="card-img-top img-fluid alt="...">
  <div class="card-body">
    <h5 class="card-title">${productsList[i].name}</h5>
    <p class="card-text">${productsList[i].description}</p>
    <a href="./form.html?id=${productsList[i]._id}" class="btn btn-warning">Modifica</a>
    <a href="./details.html?id=${productsList[i]._id}" class="btn btn-primary">Scopri di più</a>
  </div>
  
</div>`;
    mainRow.appendChild(colCard);
  }
}
