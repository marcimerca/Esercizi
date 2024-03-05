const stampaCounter = document.getElementById("stampaCounter");
let counter = sessionStorage.getItem("counterValue") || 0;

window.addEventListener("load", init);

function init() {
  stampaCounter.innerText = counter;
  setInterval(incrementaCounter, 1000);
}

function incrementaCounter() {
  counter++;
  sessionStorage.setItem("counterValue", counter);
  let counterAggiornato = sessionStorage.getItem("counterValue");
  stampaCounter.innerText = counterAggiornato;
}

// versione prof

// let timePassed = sessionStorage.getItem("count")
//   ? parseInt(sessionStorage.getItem("count"))
//   : 0;

// const conta = () => {
//   timePassed++;
//   document.getElementById("stampaCounter").innerText =
//    timePassed + " secondi di sessione aperta";
//   sessionStorage.setItem("count", timePassed);
// };

// setInterval(conta, 1000);
