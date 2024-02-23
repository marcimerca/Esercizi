const header = document.getElementById("header");
const linkStarted = document.getElementById("linkStarted");

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    header.style.background = "white";
    linkStarted.style.backgroundColor = "#1a8917";
  } else {
    header.style.background = "#ffc017";
    linkStarted.style.backgroundColor = "#191919";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    header.style.background = "white";
    linkStarted.style.backgroundColor = "#1a8917";
  } else {
    header.style.background = "#ffc017";
    linkStarted.style.backgroundColor = "#191919";
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    if (window.scrollY > 310) {
      header.style.background = "white";
      linkStarted.style.backgroundColor = "#1a8917";
    } else {
      header.style.background = "#ffc017";
      linkStarted.style.backgroundColor = "#191919";
    }
  }
});
