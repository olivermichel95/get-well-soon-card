window.onload = function () {
  let cardSrc = localStorage.getItem("selectedCard");
  let message = localStorage.getItem("message");

  if (cardSrc || message) {
    document.getElementById("cardImage").src = cardSrc;
    document.getElementById("cardMessage").textContent = message;
  }
};
