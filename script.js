const noBtn = document.getElementById("no");

let moveX = 0;
let moveY = 0;

noBtn.addEventListener("mouseover", () => {
  moveX += Math.random() * 40 - 20;
  moveY += Math.random() * 30 - 15;

  moveX = Math.max(-120, Math.min(120, moveX));
  moveY = Math.max(-80, Math.min(80, moveY));

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

