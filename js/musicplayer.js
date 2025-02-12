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
