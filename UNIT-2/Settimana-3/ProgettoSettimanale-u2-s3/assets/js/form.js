const baseURL = "https://striveschool-api.herokuapp.com/api/product/";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDlmMTJkN2IxMTAwMTkwZTZkZTkiLCJpYXQiOjE3MDk4OTAwMzMsImV4cCI6MTcxMTA5OTYzM30.nlFoZN0p7OwndW-mm88_HCFeqNH7IiKCSVW9yRhsFmU";
const params = new URLSearchParams(location.search);
const id = params.get("id"); //ottengo l'id della pagina
let product = {};

//parte params modifica, elimina

// Appena apri la pagina gli fai leggere gli url params
// const params = new URLSearchParams(location.search)
//     const id = params.get('id')
// if (id) scrivi il codice per fare la get dell'id che ti è arrivato, per popolare i campi del form con i valori dell'oggetto, per intercettare i nuovo valori del form e per fare la put con gli eventuali valori cambiati
// if (!id) scrivi il codice per intercettare i valori del form, creare l'oggetto che deve partire e fare la post

// const params = new URLSearchParams(location.search);
// const id = params.get("id");
window.addEventListener("load", init);
function init() {
  loadProduct();
}

const nameProduct = document.getElementById("nameProduct");
const brandProduct = document.getElementById("brand");
const priceProduct = document.getElementById("price");
const urlImageProduct = document.getElementById("urlImage");
const descriptionProduct = document.getElementById("description");
const btnPostPut = document.getElementById("btnPostPut");
const btnReset = document.getElementById("btnReset");
const form = document.getElementById("form");

const loadProduct = async () => {
  if (id) {
    try {
      const response = await fetch(baseURL + id, {
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
      });
      product = await response.json();
      console.log(product);
      fillForm();
    } catch (error) {
      console.log(error);
    }
  }
};

function fillForm() {
  nameProduct.value = product.name;
  brandProduct.value = product.brand;
  urlImageProduct.value = product.imageUrl;
  priceProduct.value = product.price;
  descriptionProduct.value = product.description;
  btnPostPut.innerText = "Modify";
  btnReset.style.display = "none";
  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger");
  btnDelete.innerText = "Delete";
  form.appendChild(btnDelete);
  btnDelete.addEventListener("click", function () {
    deleteProduct();
  });

  btnPostPut.addEventListener("click", function () {
    modifyProduct();
  });
}

async function modifyProduct() {
  try {
    const response = await fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify({
        name: nameProduct.value,
        brand: brandProduct.value,
        imageUrl: urlImageProduct.value,
        price: priceProduct.value,
        description: descriptionProduct.value,
      }),
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// funzione per la post nuova
if (!id) {
  btnPostPut.addEventListener("click", function () {
    postNewProduct();
  });

  async function postNewProduct() {
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify({
          name: nameProduct.value,
          brand: brandProduct.value,
          imageUrl: urlImageProduct.value,
          price: priceProduct.value,
          description: descriptionProduct.value,
        }),
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
  }
}

async function deleteProduct() {
  try {
    const response = await fetch(baseURL + id, {
      method: "DELETE",
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
