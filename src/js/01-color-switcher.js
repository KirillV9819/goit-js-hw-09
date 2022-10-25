const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

stopBtn.disabled = true;

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
     timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }
       , 1000);
  return;
  });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

