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
    colCard.classList.add("col");
    colCard.innerHTML = `<div class="card" style="width: 18rem;">
    
  <img src="${productsList[i].imageUrl}" class="card-img-top" alt="...">
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

// // parte relativa al form

// const nameProduct = document.getElementById("nameProduct");
// const brandProduct = document.getElementById("brand");
// const priceProduct = document.getElementById("price");
// const urlImageProduct = document.getElementById("urlImage");
// const descriptionProduct = document.getElementById("description");
// // post con bottone su form

// btnPost.addEventListener("click", function () {
//   postNewProduct();
// });

// async function postNewProduct() {
//   try {
//     const response = await fetch(baseURL, {
//       method: "POST",
//       body: JSON.stringify({
//         name: nameProduct.value,
//         brand: brandProduct.value,
//         imageUrl: urlImageProduct.value,
//         price: priceProduct.value,
//         description: descriptionProduct.value,
//       }),
//       headers: {
//         Authorization: auth,
//         "Content-Type": "application/json",
//       },
//     });
//     const newProduct = await response.json();
//     productsList.push(newProduct);
//   } catch (error) {
//     console.log(error);
//   }
// }

//parte params modifica, elimina

// Appena apri la pagina gli fai leggere gli url params
// const params = new URLSearchParams(location.search)
//     const id = params.get('id')
// if (id) scrivi il codice per fare la get dell'id che ti è arrivato, per popolare i campi del form con i valori dell'oggetto, per intercettare i nuovo valori del form e per fare la put con gli eventuali valori cambiati
// if (!id) scrivi il codice per intercettare i valori del form, creare l'oggetto che deve partire e fare la post

// const params = new URLSearchParams(location.search);
// const id = params.get("id");

// parte aggiunta da script form

// const params = new URLSearchParams(location.search);
// const id = params.get("id"); //ottengo l'id della pagina
// const nameProduct = document.getElementById("nameProduct");
// const brandProduct = document.getElementById("brand");
// const priceProduct = document.getElementById("price");
// const urlImageProduct = document.getElementById("urlImage");
// const descriptionProduct = document.getElementById("description");
// const btnPostPut = document.getElementById("btnPostPut");

// const loadProduct = async () => {
//   if (id) {
//     try {
//       const response = await fetch(baseURL + id, {
//         headers: {
//           Authorization: auth,
//           "Content-Type": "application/json",
//         },
//       });
//       product = await response.json();
//       console.log(product);
//       fillForm();
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
