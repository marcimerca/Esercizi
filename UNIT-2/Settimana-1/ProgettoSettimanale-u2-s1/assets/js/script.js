const header = document.getElementById("header");
const linkStarted = document.getElementById("linkStarted");

window.addEventListener("scroll", function () {
  if (window.matchMedia("(max-width: 576px)").matches) {
    if (window.scrollY > 290) {
      header.style.backgroundColor = "white";
      linkStarted.style.backgroundColor = "#1a8917";
    } else {
      header.style.backgroundColor = "#ffc017";
      linkStarted.style.backgroundColor = "#191919";
    }
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    if (window.scrollY > 295) {
      header.style.backgroundColor = "white";
      linkStarted.style.backgroundColor = "#1a8917";
    } else {
      header.style.backgroundColor = "#ffc017";
      linkStarted.style.backgroundColor = "#191919";
    }
  } else {
    if (window.scrollY > 450) {
      header.style.backgroundColor = "white";
      linkStarted.style.backgroundColor = "#1a8917";
    } else {
      header.style.backgroundColor = "#ffc017";
      linkStarted.style.backgroundColor = "#191919";
    }
  }
});
