const menuBtn = document.querySelector(".ham");
const menuOverlay = document.getElementById("menu-overlay");
menuBtn.addEventListener("click", () => {
  console.log("dasd");
  menuOverlay.classList.toggle("open");
});
