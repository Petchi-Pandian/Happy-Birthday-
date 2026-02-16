const confettiRoot = document.getElementById("confetti");

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetti(count = 65) {
  const colors = ["#ffffff", "#f6c1cf", "#d95d86", "#ffd3dd", "#f2f2f2"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confettiPiece";

    if (Math.random() > 0.55) piece.classList.add("square");

    const sizeW = rand(6, 12);
    const sizeH = piece.classList.contains("square") ? rand(8, 16) : rand(6, 12);

    piece.style.width = `${sizeW}px`;
    piece.style.height = `${sizeH}px`;
    piece.style.left = `${rand(0, 100)}%`;
    piece.style.background = colors[Math.floor(rand(0, colors.length))];

    const duration = rand(4.5, 9.0);
    const delay = rand(0, 2.5);
    const drift = rand(-60, 60);
    const rot = rand(180, 720);

    piece.style.setProperty("--drift", `${drift}px`);
    piece.style.setProperty("--rot", `${rot}deg`);
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.opacity = `${rand(0.55, 0.95)}`;

    confettiRoot.appendChild(piece);
  }
}

createConfetti();
