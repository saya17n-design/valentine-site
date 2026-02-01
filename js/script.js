const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});