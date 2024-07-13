let count = 0;
const sheepSounds = [
  "./resources/sounds/Sheep1.mp3",
  "./resources/sounds/Sheep2.mp3",
  "./resources/sounds/Sheep3.mp3",
];

const sheepImages = [
  "./resources/images/sheep1.webp",
  "./resources/images/sheep2.webp",
  "./resources/images/sheep3.webp",
  "./resources/images/sheep4.webp",
  "./resources/images/sheep5.webp",
  "./resources/images/sheep6.webp",
  "./resources/images/sheep7.webp",
  "./resources/images/sheep8.webp",
  "./resources/images/sheep9.webp",
  "./resources/images/sheep10.webp",
  "./resources/images/sheep11.webp",
  "./resources/images/sheep12.webp",
  "./resources/images/sheep13.webp",
  "./resources/images/sheep14.webp",
  "./resources/images/sheep15.webp",
  "./resources/images/sheep16.webp",
];

const youtubeSongs = [
  "https://youtu.be/TlRv2CmIngw?si=6HJC9llol1m75RfY",
  "https://youtu.be/q26OmWO8ccg?si=9-CDZbxDehMr8Ish",
  "https://youtu.be/Aaf7N_wfUMM?si=IOoddfoAyGhlnY_O",
];

function addSheep(event) {
  count++;
  document.getElementById("sheepCount").innerText = count;
  playRandomSheepSound();

  // 10% chance to redirect to a random YouTube song
  if (Math.random() < 0.1) {
    const randomSong =
      youtubeSongs[Math.floor(Math.random() * youtubeSongs.length)];
    window.open(randomSong, "_blank");
  }

  event.target.remove(); // Remove the clicked sheep from the DOM
  saveSheepState();
}

function createSheep(top, left, width, src) {
  let sheepImage = document.createElement("img");
  sheepImage.src =
    src ||
    "./resources/images/sheep" +
      ((parseInt(Math.random() * 100) % 16) + 1) +
      ".webp"; // Use the URL of the downloaded sheep image
  sheepImage.className = "sheep";

  // Randomize the position of the sheep
  sheepImage.style.top = top || Math.random() * 100 + "%";
  sheepImage.style.left = left || Math.random() * 100 + "%";

  // Randomize the size of the sheep
  let sizeValue = width || Math.random() * 50 + 30; // Size between 30px and 80px
  sheepImage.style.width = sizeValue + "px";

  sheepImage.style.animationDuration = Math.random() * 5 + 5 + "s";
  sheepImage.onclick = addSheep;
  document.getElementById("sheepContainer").appendChild(sheepImage);
}

function playRandomSheepSound() {
  const randomSound =
    sheepSounds[Math.floor(Math.random() * sheepSounds.length)];
  const audio = new Audio(randomSound);
  audio.play();
}

function saveSheepState() {
  const sheepContainer = document.getElementById("sheepContainer");
  const sheepState = Array.from(sheepContainer.children).map((sheep) => ({
    src: sheep.src,
    top: sheep.style.top,
    left: sheep.style.left,
    width: sheep.style.width.replace("px", ""), // Remove 'px' before saving
  }));
  localStorage.setItem("sheepState", JSON.stringify(sheepState));
  localStorage.setItem("sheepCount", count);
}

function loadSheepState() {
  const sheepState = JSON.parse(localStorage.getItem("sheepState"));
  const savedCount = localStorage.getItem("sheepCount");

  if (sheepState) {
    sheepState.forEach((sheep) => {
      createSheep(sheep.top, sheep.left, parseFloat(sheep.width), sheep.src);
    });
  }

  if (savedCount) {
    count = parseInt(savedCount);
    document.getElementById("sheepCount").innerText = count;
  }
}

function resetSheep() {
  
    if (Math.random() < 0.1) {
      document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <h1 style="font-size: 3rem; text-align: center;">
          Go to sleep, little sheep...
        `;
    
    return;
    }
  count = 0;
  document.getElementById("sheepCount").innerText = count;
  const sheepContainer = document.getElementById("sheepContainer");
  sheepContainer.innerHTML = "";
  localStorage.removeItem("sheepState");
  localStorage.removeItem("sheepCount");


  // Load the saved state of the sheep
  loadSheepState();

  // Create new sheep if there is no saved state
  if (!localStorage.getItem("sheepState")) {
    for (let i = 0; i < 1000; i++) {
      createSheep();
    }
  }
}

// Load the saved state of the sheep
loadSheepState();

// Create new sheep if there is no saved state
if (!localStorage.getItem("sheepState")) {
  for (let i = 0; i < 1000; i++) {
    createSheep();
  }
}

// Add event listener for reset button
document.getElementById("resetButton").addEventListener("click", resetSheep);
