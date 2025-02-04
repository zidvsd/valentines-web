const menuBtn = document.querySelector(".ham");
const menuOverlay = document.getElementById("menu-overlay");
menuBtn.addEventListener("click", () => {
  console.log("dasd");
  menuOverlay.classList.toggle("open");
});

const audioPlayer = document.getElementById("audioPlayer");

// Set volume to a lower value when the audio starts playing
audioPlayer.volume = 0.3;
