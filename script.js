window.onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const bgMusic = document.getElementById("bgMusic");
const showMessageBtn = document.getElementById("showMessageBtn");
const birthdayPopup = document.getElementById("birthdayPopup");

let musicStarted = false;
function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.2;
    bgMusic.play().catch((e) => {
      console.warn("Music play blocked:", e);
    });
    musicStarted = true;
  }
}

// You can keep or delete this function if it's unused
function autoScrollLetter() {
  const letterScroll = document.querySelector(".letter-scroll");
  const scrollStep = 1;
  const scrollInterval = 30;

  const interval = setInterval(() => {
    if (
      letterScroll.scrollTop + letterScroll.clientHeight >=
      letterScroll.scrollHeight
    ) {
      clearInterval(interval);
    } else {
      letterScroll.scrollTop += scrollStep;
    }
  }, scrollInterval);
}

openBtn.addEventListener("click", () => {
  startMusic();
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  // autoScrollLetter(); ❌ disable auto scroll
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
  // Optional: bgMusic.pause();
});

showMessageBtn.addEventListener("click", () => {
  birthdayPopup.style.display = "block";
});
