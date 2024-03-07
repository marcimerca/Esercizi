const btnLoad = document.getElementById("load");
const btnLoadSecondary = document.getElementById("loadSecondary");
const baseURL = "https://api.pexels.com/v1/search?query=";
let loadedImages = [];
let secondaryImages = [];
const mainRow = document.getElementById("main-row");
const btnSearch = document.getElementById("btnSearch");
const searchInput = document.getElementById("searchInput");

async function loadImages() {
  try {
    const response = await fetch(baseURL + "mountains", {
      headers: {
        Authorization:
          "TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5",
      },
    });
    loadedImages = await response.json();
    console.log(loadedImages);
    displayImages();
  } catch (error) {
    console.log(error);
  }
}

btnLoad.addEventListener("click", function () {
  loadImages();
});

btnLoadSecondary.addEventListener("click", function () {
  loadSecondaryImages();
});

function displayImages() {
  let photos = loadedImages.photos;
  mainRow.innerHTML = "";
  photos.forEach((element, index) => {
    let colCard = document.createElement("div");
    colCard.classList.add("col-md-4");

    colCard.innerHTML = `<div class="card mb-4 shadow-sm">
                <img onclick="location.href = 'dettaglio.html'"
                  src='${element.src.small}'
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button" onclick="hideCard(${index})"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${element.id}</small>
                  </div>
                </div>
              </div>`;
    mainRow.appendChild(colCard);
  });
}

function hideCard(index) {
  let photos = loadedImages.photos;
  photos.splice(index, 1);
  displayImages();
}

// funzione per immagini secondary

async function loadSecondaryImages() {
  try {
    const response = await fetch(baseURL + "sunsets", {
      headers: {
        Authorization:
          "TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5",
      },
    });
    loadedImages = await response.json();
    console.log(loadedImages);
    displayImages();
  } catch (error) {
    console.log(error);
  }
}

// mi occupo del search

btnSearch.addEventListener("click", function () {
  displayNewImages();
});

async function displayNewImages() {
  try {
    const response = await fetch(baseURL + searchInput.value, {
      headers: {
        Authorization:
          "TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5",
      },
    });
    loadedImages = await response.json();
    console.log(loadedImages);
    displayImages();
  } catch (error) {
    console.log(error);
  }
}
