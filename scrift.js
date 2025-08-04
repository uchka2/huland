const title = document.getElementById("title");
const heartRain = document.getElementById("heartRain");

title.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    // Random position & animation
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 20 + Math.random() * 20 + "px";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heart.style.opacity = Math.random().toFixed(1);
    heart.style.color = getRandomColor();

    heartRain.appendChild(heart);

    // Clean up after animation
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
});

function getRandomColor() {
  const colors = ["#ff4da6", "#ff66cc", "#ff99cc", "#ff1a75", "#ffcce6"];
  return colors[Math.floor(Math.random() * colors.length)];
}
