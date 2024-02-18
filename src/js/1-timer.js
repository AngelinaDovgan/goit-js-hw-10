

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector("button");
const dateInput = document.getElementById("datetime-picker");
const clockface = document.querySelector(".timer");
startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
    iziToast.success({
    title: 'Error',
    message: 'Please choose a date in the future',
        closeOnEscape: true,
    color: "red",
    position: 'topRight',
});
        } else {
            startBtn.disabled = false;
        }
    },
};

flatpickr(dateInput, options);

class Timer {
    constructor({ onTick }) {
        this.onTick = onTick;
        this.interval = null;
    }

    start(startTime) {
        this.interval = setInterval(() => {
            const currentTime = Date.now();
            const delta = currentTime - startTime;
            const time = this.convertMs(delta);

            this.onTick(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        const time = this.convertMs(0);
        this.onTick(time);
    }

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }
}

const userTimer = new Timer({
    onTick: updateClockface,
});

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
    const convertedDays = addLeadingZero(days);
    const convertedHours = addLeadingZero(hours);
    const convertedMinutes = addLeadingZero(minutes);
    const convertedSeconds = addLeadingZero(seconds);

    clockface.textContent = `${convertedDays}:${convertedHours}:${convertedMinutes}:${convertedSeconds}`;
}

startBtn.addEventListener("click", () => {
    const selectedDate = new Date(dateInput.value).getTime(); 
    userTimer.start(selectedDate); 
    startBtn.disabled = true;
    dateInput.disabled = true;
});













 



