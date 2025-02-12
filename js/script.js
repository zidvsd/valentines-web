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

// music player section

// 10 seconds backward forward
const backDuration = 10;
const forwardDuration = 10;
// Audio elements
const lilyAudio = new Audio(
  "assets/audio/daniel-lily-of-the-valley_Lo6Dc6iV.mp3"
);
const likeAudio = new Audio(
  "assets/audio/Lauv - I Like Me Better [Official Audio].mp3"
);
const nothingAudio = new Audio(
  "assets/audio/Bruno Major - Nothing (Lyric & Chord Video).mp3"
);
const getYouAudio = new Audio(
  "assets/audio/Get You (feat. Kali Uchis) (1).mp3"
);

// lily valley audio player
// Audio elements for "Lily of the Valley"
const lilyBtn = document.getElementById("lily-btn");
const lilyPlayBtnImg = document.getElementById("lily-btn-img");
const lilyPauseBtn = document.getElementById("lily-pause-btn-img");

const lilyProgress = document.getElementById("lily-progress"); // For progress bar
const lilySeek = document.getElementById("lily-seek"); // For seek input
const lilyBackBtn = document.getElementById("lily-backward-btn");
const lilyFowardBtn = document.getElementById("lily-forward-btn");

// Play/Pause button for Lily audio
lilyBtn.addEventListener("click", () => {
  if (lilyAudio.paused) {
    lilyAudio.volume = 0.4;
    lilyAudio.play();
  } else {
    lilyAudio.pause();
  }
  lilyPauseBtn.classList.toggle("hidden", lilyAudio.paused);
  lilyPlayBtnImg.classList.toggle("hidden", !lilyAudio.paused);
});

lilyAudio.addEventListener("timeupdate", () => {
  const progress = (lilyAudio.currentTime / lilyAudio.duration) * 100;
  lilySeek.value = progress; // Update seek input
});

// Backward button
lilyBackBtn.addEventListener("click", () => {
  lilyAudio.currentTime = Math.max(0, lilyAudio.currentTime - backDuration);
});

// Forward button
lilyFowardBtn.addEventListener("click", () => {
  lilyAudio.currentTime = Math.max(0, lilyAudio.currentTime + forwardDuration);
});

// Seek to the new time when the user interacts with the range input
lilySeek.addEventListener("input", () => {
  const seekTime = (lilySeek.value / 100) * lilyAudio.duration; // Calculate time from range input
  lilyAudio.currentTime = seekTime; // Update audio time
});

// Reset on audio end
lilyAudio.addEventListener("ended", () => {
  lilyPauseBtn.classList.add("hidden");
  lilyPlayBtnImg.classList.remove("hidden");
  lilySeek.value = 0;
});

// Audio elements for "I Like Me Better"
const likeBtn = document.getElementById("like-btn");
const likePlayBtnImg = document.getElementById("like-btn-img");
const likePauseBtn = document.getElementById("like-pause-btn-img");

const likeProgress = document.getElementById("like-progress"); // For progress bar
const likeSeek = document.getElementById("like-seek"); // For seek input
const likeBackBtn = document.getElementById("like-backward-btn");
const likeFowardBtn = document.getElementById("like-forward-btn");

// Play/Pause button for Like Me Better audio
likeBtn.addEventListener("click", () => {
  if (likeAudio.paused) {
    likeAudio.volume = 0.3;
    likeAudio.play();
  } else {
    likeAudio.pause();
  }
  likePauseBtn.classList.toggle("hidden", likeAudio.paused);
  likePlayBtnImg.classList.toggle("hidden", !likeAudio.paused);
});

likeAudio.addEventListener("timeupdate", () => {
  const progress = (likeAudio.currentTime / likeAudio.duration) * 100;
  likeSeek.value = progress; // Update seek input
});

// Backward button
likeBackBtn.addEventListener("click", () => {
  likeAudio.currentTime = Math.max(0, likeAudio.currentTime - backDuration);
});

// Forward button
likeFowardBtn.addEventListener("click", () => {
  likeAudio.currentTime = Math.max(0, likeAudio.currentTime + forwardDuration);
});

// Seek to the new time when the user interacts with the range input
likeSeek.addEventListener("input", () => {
  const seekTime = (likeSeek.value / 100) * likeAudio.duration; // Calculate time from range input
  likeAudio.currentTime = seekTime; // Update audio time
});

// Reset on audio end
likeAudio.addEventListener("ended", () => {
  likePauseBtn.classList.add("hidden");
  likePlayBtnImg.classList.remove("hidden");
  likeSeek.value = 0;
});

// nothing audio player
const nothingBtn = document.getElementById("nothing-btn");
const nothingPlayBtnImg = document.getElementById("nothing-btn-img");
const nothingPauseBtn = document.getElementById("nothing-pause-btn-img");

const nothingProgress = document.getElementById("nothing-progress"); // Progress bar for nothing audio
const nothingSeek = document.getElementById("nothing-seek"); // Seek input for nothing audio
const nothingBackBtn = document.getElementById("nothing-backward-btn");
const nothingForwardBtn = document.getElementById("nothing-forward-btn");

nothingBtn.addEventListener("click", () => {
  if (nothingAudio.paused) {
    nothingAudio.volume = 0.5;
    nothingAudio.play();
  } else {
    nothingAudio.pause();
  }
  // Toggle the visibility of the play and pause buttons
  nothingPauseBtn.classList.toggle("hidden", nothingAudio.paused); // Show pause button when not playing
  nothingPlayBtnImg.classList.toggle("hidden", !nothingAudio.paused); // Show play button when paused
});

nothingAudio.addEventListener("timeupdate", () => {
  // Calculate the progress as a percentage
  const progress = (nothingAudio.currentTime / nothingAudio.duration) * 100;
  nothingSeek.value = progress; // Update the seek input value
});

// Backward button
nothingBackBtn.addEventListener("click", () => {
  nothingAudio.currentTime = Math.max(
    0,
    nothingAudio.currentTime - backDuration
  );
});

// Forward button
nothingForwardBtn.addEventListener("click", () => {
  nothingAudio.currentTime = Math.max(
    0,
    nothingAudio.currentTime + forwardDuration
  );
});

// Seek to the new time when the user interacts with the range input
nothingSeek.addEventListener("input", () => {
  const seekTime = (nothingSeek.value / 100) * nothingAudio.duration; // Calculate the time based on range input
  nothingAudio.currentTime = seekTime; // Update the audio's current time
});

nothingAudio.addEventListener("ended", () => {
  nothingPauseBtn.classList.add("hidden");
  nothingPlayBtnImg.classList.remove("hidden");
  nothingSeek.value = 0;
});

// Audio elements
const getAudio = new Audio("assets/audio/Get You (feat. Kali Uchis) (1).mp3");

// get audio player
const getBtn = document.getElementById("get-btn");
const getPlayBtnImg = document.getElementById("get-btn-img");
const getPauseBtn = document.getElementById("get-pause-btn-img");

const getProgress = document.getElementById("get-progress"); // Progress bar for get audio
const getSeek = document.getElementById("get-seek"); // Seek input for get audio
const getBackBtn = document.getElementById("get-backward-btn");
const getForwardBtn = document.getElementById("get-forward-btn");

getBtn.addEventListener("click", () => {
  if (getAudio.paused) {
    getAudio.volume = 0.4;
    getAudio.play();
  } else {
    getAudio.pause();
  }
  // Toggle the visibility of the play and pause buttons
  getPauseBtn.classList.toggle("hidden", getAudio.paused); // Show pause button when not playing
  getPlayBtnImg.classList.toggle("hidden", !getAudio.paused); // Show play button when paused
});

getAudio.addEventListener("timeupdate", () => {
  // Calculate the progress as a percentage
  const progress = (getAudio.currentTime / getAudio.duration) * 100;
  getSeek.value = progress; // Update the seek input value
});

// Backward button
getBackBtn.addEventListener("click", () => {
  getAudio.currentTime = Math.max(0, getAudio.currentTime - backDuration);
});

// Forward button
getForwardBtn.addEventListener("click", () => {
  getAudio.currentTime = Math.max(0, getAudio.currentTime + forwardDuration);
});

// Seek to the new time when the user interacts with the range input
getSeek.addEventListener("input", () => {
  const seekTime = (getSeek.value / 100) * getAudio.duration; // Calculate the time based on range input
  getAudio.currentTime = seekTime; // Update the audio's current time
});

getAudio.addEventListener("ended", () => {
  getPauseBtn.classList.add("hidden");
  getPlayBtnImg.classList.remove("hidden");
  getSeek.value = 0;
});

// memory lane section
new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
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
