import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerSecs = document.querySelector("[data-seconds]");
const timerMins = document.querySelector("[data-minutes]");
const timerHours = document.querySelector("[data-hours]");
const timerDays = document.querySelector("[data-days]");
const startBtn = document.querySelector("[data-start]");

startBtn.setAttribute("disabled", true);

const options = {
  enableTime: true, 
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onValidateTime(selectedDates)
  },
};

flatpickr("#datetime-picker", options);

function onValidateTime(selectedDates) {
  if (selectedDates[0] < Date.now()) {
    Notiflix.Notify.failure("Please choose a date in the future",
    {
      width: "300px",
      position: "center-top",
      fontSize: "15px"
    });
    return;
  } else {
    startBtn.removeAttribute("disabled");
    startBtn.addEventListener("click", timerStart.bind(this, selectedDates[0]))
  };
};

let timer = 0;

function timerStart(selectedDates) {

  timeChange(selectedDates)

  timer = setInterval(timeChange, 1000, selectedDates);

}

function timeChange(selectedDates) {
  
  let time = selectedDates - Date.now();
  timerContentUpdate(convertMs(time));
  
  if (time < 0) {
    clearInterval(timer);
    timerSecs.textContent = `00`;
    timerMins.textContent = `00`;
    timerHours.textContent = `00`;
    timerDays.textContent = `00`;
    return;
  };
};

function timerContentUpdate({ days, hours, minutes, seconds }) {

  timerSecs.textContent = `${seconds}`;
  timerMins.textContent = `${minutes}`;
  timerHours.textContent = `${hours}`;
  timerDays.textContent = `${days}`;

};

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function pad(value) {
  return String(value).padStart(2, "0")
};

