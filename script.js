let selectedCard = null;
let images = document.querySelectorAll("img");

for (let i = 1; i < 7; i++) {
  let card = document.getElementById("card" + i);
  let image = document.getElementById("img" + i);

  card.onclick = function () {
    borderClear();
    image.style.borderStyle = "solid";
    image.style.borderColor = "red";
    image.style.borderWidth = "2px";
    selectedCard = image.src;
  };
}

function borderClear() {
  for (let i = 1; i < 7; i++) {
    let image = document.getElementById("img" + i);
    image.style.border = "none";
  }
}

function generateCard() {
  if (!selectedCard) {
    alert("Select an image");
  }
  let comment = document.getElementById("comment").value;

  localStorage.setItem("selectedCard", selectedCard);
  localStorage.setItem("message", comment);

  window.open("new_card.html", "_blank", "width=600,height=600");
}
