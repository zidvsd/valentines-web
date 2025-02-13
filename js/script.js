// menu button and overlay
const menuBtn = document.querySelector(".ham");
const menuOverlay = document.getElementById("menu-overlay");

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.toggle("open");
});
// love letter section
const typeEffect = document.getElementById("type-effect");
const loveLetter = document.getElementById("love-letter-text");
var text =
  "Happy Valentine's, loveee!! This is our first Valentine's together, and it makes my heart raceee. I hope you're having fun browsing through this website this was the least I could do, huhu. I just want to remind you how much I appreciate you and everything you do for meeee. You have no idea how much you mean to me, and I honestly feel so greatful to have you in my life. " +
  "Despite our long-distance relationship, you never fail to make me feel loved every day. Istg, even though we're miles apart, you still make me feel like you're right beside me. The way you cheer me up whenever I'm feeling down, how you reassure me when I'm filled with uncertainty, and the way you love me it's everything I could ever ask for. " +
  +"Tbh, I didn't expect our relationship to work out at first, not because I doubted us, but because I never thought I'd be able to find something this special. But you proved me wrong. You made me realize that love isn't just about being physically together; it's about our bond, our effort, and our  cute little moments that make everything worth it. " +
  "The day I first saw you, I was in awe. I never thought being as beautiful as you was humanly possible. And every time we're together, I catch myself staring at you, completely mesmerized by your gorgeous smile, your kind eyes, and just... you. I swear, you're like a dream I never want to wake up from. " +
  "Of course, like everyone else, we have our own share of dilemmas. There are moments when we get frustrated, when things don't go as planned, and when words come out wrong. But what I love most is how we always find a way back to each other. No matter how small or big the issue is, we talk it out and choose to understand each other. And through it all, you never fail to remind me that we're in this together, that no matter what, we'll always find our way out. " +
  "No matter how far we are from each other right now, I want you to know that you are always in my heart. I can't wait to see you and get to spend Valentine's together irl, where I can hold you close and tell you all of this f2f. Until then, just know that I love you more than words can ever express.";

var speed = 50;
var i = 0;
typeEffect.addEventListener("click", () => {
  const typeWriter = () => {
    if (i < text.length) {
      loveLetter.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  typeWriter();
  typeEffect.style.cursor = "default";
});

// memory lane section
new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  fadeEffect: {
    crossFade: true,
  },

  // navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const balloons = document.querySelectorAll(".balloon");

// function to position the balloons randomly
function randomPosition() {
  return {
    left: `${Math.random() * 90}%`, // random left between 0% and 90%
    top: `${Math.random() * 80}%`, // random top between 0% and 80%
  };
}

// Assign random positions to each balloon
balloons.forEach((balloon, index) => {
  const position = randomPosition();
  balloon.style.left = position.left;
  balloon.style.top = position.top;

  const popMessage = document.getElementById(`popMessage${index + 1}`);

  balloon.addEventListener("click", function () {
    balloon.style.animation = "none"; // Stop floating
    balloon.style.display = "none"; // Hide balloon

    // Position the message exactly where the balloon was
    popMessage.style.left = position.left;
    popMessage.style.top = position.top;

    // Show the pop message at the balloon's position
    popMessage.style.display = "block"; // Show pop message
    const popSound = new Audio("assets/audio/Pop sound effect.mp3");
    popSound.play();
  });
});

// note genrator
const noteText = document.getElementById("note-text");
const noteBtn = document.getElementById("note-generator-btn");
let phrasesData = [];
let availableIndexes = []; // To keep track of available indexes

fetch("assets/phrases_and_reminders.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    phrasesData = obj;
    availableIndexes = [...Array(phrasesData.length).keys()]; // Initialize with all indexes
  })
  .catch(function (error) {
    console.error("Something went wrong with retrieving the data");
    console.log(error);
  });

noteBtn.addEventListener("click", () => {
  if (availableIndexes.length === 0) {
    // Reset when all notes are used
    availableIndexes = [...Array(phrasesData.length).keys()];
  }

  // Get a random index from availableIndexes
  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  const selectedNoteIndex = availableIndexes[randomIndex];

  // Remove the used index from availableIndexes
  availableIndexes.splice(randomIndex, 1);

  // Display the content of the selected note
  noteText.innerText = phrasesData[selectedNoteIndex].content;
});

fetch("assets/pictures.json")
  .then((response) => response.json())
  .then((data) => {
    let availableIndexes = [...Array(data.pictures.length).keys()]; // Create an array of indexes [0,1,2,...]

    document
      .getElementById("camera-btn")
      .addEventListener("click", function () {
        if (availableIndexes.length === 0) {
          // Reset when all pictures are used
          availableIndexes = [...Array(data.pictures.length).keys()];
        }

        // Get a random index from the availableIndexes
        const randomIndex = Math.floor(Math.random() * availableIndexes.length);
        const selectedPictureIndex = availableIndexes[randomIndex];
        availableIndexes.splice(randomIndex, 1); // Remove the used index

        // Create a new photo div
        const newPhoto = document.createElement("div");
        newPhoto.classList.add("photo");

        // Create an image element inside the div
        const img = document.createElement("img");
        img.src = data.pictures[selectedPictureIndex].url;
        newPhoto.appendChild(img);

        // Append the photo div to the photo container
        const photoContainer = document.getElementById("photo-container");
        photoContainer.appendChild(newPhoto);

        // Add the active class to trigger the photo animation
        setTimeout(() => {
          newPhoto.classList.add("active");
        }, 100);

        // Play camera shutter sound
        const printSound = new Audio(
          "assets/audio/Camera Shutter Sound Effect.mp3"
        );
        printSound.play();

        // Remove the photo after 10 seconds
        setTimeout(() => {
          newPhoto.classList.remove("active");
          setTimeout(() => {
            photoContainer.removeChild(newPhoto);
          }, 500);
        }, 10000);
      });
  })
  .catch((error) => console.error("Error loading pictures:", error));
