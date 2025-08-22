document.addEventListener("DOMContentLoaded", function () {
  // XP Progress
  let xp = 0;
  const xpBar = document.getElementById("xp-bar");
  function updateXP(amount) {
    xp += amount;
    xpBar.style.width = Math.min(xp, 100) + "%";
    document.getElementById("xp-label").textContent = xp + " XP";
  }

  // Quest Tracker
  document.querySelectorAll(".quest").forEach((quest) => {
    quest.addEventListener("change", function () {
      if (this.checked) {
        updateXP(10);
        this.parentElement.classList.add("completed");
      } else {
        updateXP(-10);
        this.parentElement.classList.remove("completed");
      }
      checkBadges();
    });
  });

  // Badge Unlocks
  function checkBadges() {
    const badge = document.getElementById("badge");
    if (xp >= 50) {
      badge.textContent = "🏅 Novice Dev";
    }
    if (xp >= 100) {
      badge.textContent = "🎖️ Pro Dev";
    }
  }

  // Music Toggle
  const music = new Audio("music.mp3");
  const musicToggle = document.getElementById("music-toggle");
  musicToggle.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      this.textContent = "🔊 Music On";
    } else {
      music.pause();
      this.textContent = "🔇 Music Off";
    }
  });

  // Motivational Quote Rotator
  const quotes = [
    "Start where you are. Use what you have. Do what you can.",
    "Every expert was once a beginner.",
    "Progress, not perfection.",
    "You’re not behind. You’re on your own path.",
    "Small steps lead to big changes."
  ];
  const quoteBox = document.getElementById("quote-box");
  let quoteIndex = 0;
  function rotateQuote() {
    quoteBox.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }
  rotateQuote();
  setInterval(rotateQuote, 30000); // every 30 seconds
});
