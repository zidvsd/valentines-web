const menuBtn = document.querySelector(".ham");
const menuOverlay = document.getElementById("menu-overlay");
const typeEffect = document.getElementById("type-effect");
const loveLetter = document.getElementById("love-letter-text");
var text =
  "Lorem ipsum typing effect! Lorem ipsum typing effect!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor eu ipsum ultrices, sit amet tincidunt ipsum sagittis. Nunc tortor nunc, sollicitudin et orci convallis, ullamcorper egestas eros. Cras imperdiet lobortis nulla a sodales. Proin a risus nec justo dignissim maximus in et velit. In blandit odio metus, eu dignissim mauris finibus quis. Phasellus porta magna eget fermentum ullamcorper. Donec a congue nibh. Sed urna ex, commodo sit amet justo eget, cursus dictum urna. Mauris in ligula sit amet lacus mollis ullamcorper. Sed fringilla ipsum eu condimentum eleifend. Pellentesque commodo, nisl at sagittis laoreet, augue quam laoreet mi, eget rutrum quam nibh vitae felis. Aliquam tincidunt congue velit, eget scelerisque enim volutpat sed. Praesent sit amet massa nec nisl sollicitudin auctor sed tristique dolor. Nunc vitae nisi eget sem ultrices cursus. Donec ac ipsum vitae eros imperdiet cursus eget sit amet ipsum.Sed magna libero, mollis ullamcorper laoreet commodo, elementum faucibus augue. Mauris sed efficitur diam. Suspendisse mattis leo id sem porttitor mattis. Quisque dignissim metus at tortor accumsan aliquam. In sodales molestie augue sed aliquam. Morbi ornare enim nunc, nec faucibus ligula pulvinar non. Donec pharetra velit ut ante feugiat bibendum. Pellentesque semper ullamcorper orci dictum pellentesque. Vivamus ullamcorper posuere imperdiet. Cras auctor faucibus tellus a sodales. Mauris molestie tempor nisl eu pharetra. Nulla luctus hendrerit eros sed interdum. Aenean nibh elit, tempus non tortor eget, molestie iaculis purus.Nulla eget tortor a eros cursus dapibus non vitae libero. Phasellus malesuada semper mauris sit amet pulvinar. Fusce quam purus, luctus quis diam sagittis, faucibus finibus arcu. Nulla rutrum neque vel risus dictum malesuada ac porta est. Donec nibh enim, varius sed mi ut, tempor accumsan elit. Aenean sed metus vestibulum, rutrum eros eu, vestibulum nulla. Vestibulum aliquam mauris eu velit ullamcorper, cursus pretium dolor ultricies. Curabitur nulla libero, hendrerit et suscipit in, volutpat ut nunc. Mauris ut ex id dui sollicitudin lacinia. Morbi vel ultricies justo. Phasellus vitae vehicula ante, rhoncus vehicula mi. Nulla tristique lectus ac leo suscipit posuere. Nam condimentum ante sit amet quam finibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus odio ut magna dignissim, id ornare augue congue. Mauris eget magna non enim semper laoreet quis nec libero.";
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

menuBtn.addEventListener("click", () => {
  console.log("dasd");
  menuOverlay.classList.toggle("open");
});

const audioPlayer = document.getElementById("audioPlayer");

// Set volume to a lower value when the audio starts playing
audioPlayer.volume = 0.3;

new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  fadeEffect: {
    crossFade: true, // Smooth transition between slides
  },

  // Navigation arrows
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
  // And if we need scrollbar
});
const balloons = document.querySelectorAll(".balloon");

// Function to position the balloons randomly
function randomPosition() {
  return {
    left: `${Math.random() * 90}%`, // Random left between 0% and 90%
    top: `${Math.random() * 80}%`, // Random top between 0% and 80%
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

// note generator
const noteText = document.getElementById("note-text");
const noteBtn = document.getElementById("note-generator-btn");
let phrasesData = [];

fetch("assets/phrases_and_reminders.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    phrasesData = obj;
  })
  .catch(function (error) {
    console.error("Something went wrong with retrieving the data");
    console.log(error);
  });
noteBtn.addEventListener("click", () => {
  const randomNum = Math.round(Math.random() * 30) + 1;
  noteText.innerText = phrasesData[randomNum].content;
});

// music player

// camera

// Fetch random picture from JSON file
fetch("assets/pictures.json")
  .then((response) => response.json())
  .then((data) => {
    // Listen for the camera button click
    document
      .getElementById("camera-btn")
      .addEventListener("click", function () {
        // Create a new photo div
        const newPhoto = document.createElement("div");
        newPhoto.classList.add("photo");

        // Create an image element inside the div
        const randomPicture =
          data.pictures[Math.floor(Math.random() * data.pictures.length)];
        const img = document.createElement("img");
        img.src = randomPicture.url; // Use the random image URL from the fetched JSON
        newPhoto.appendChild(img);

        // Append the photo div to the photo container
        const photoContainer = document.getElementById("photo-container");
        photoContainer.appendChild(newPhoto);

        // Add the active class to trigger the photo animation
        setTimeout(() => {
          newPhoto.classList.add("active");
        }, 100);

        // Optionally, add a print-out sound (can use an audio file or Web Audio API)
        const printSound = new Audio(
          "assets/audio/Camera Shutter Sound Effect.mp3"
        );
        printSound.play();

        // Add a small delay and remove the photo after a few seconds to simulate printing
        setTimeout(() => {
          newPhoto.classList.remove("active");
          setTimeout(() => {
            photoContainer.removeChild(newPhoto);
          }, 500); // Wait for the animation to finish before removing it
        }, 10000); // After 10 seconds, remove the image to simulate the photo print-out
      });
  })
  .catch((error) => console.error("Error loading pictures:", error));
