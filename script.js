const clockEl = document.querySelector('.clock')
const startClockBtn = document.querySelector('#start-clock-btn')
const stopClockBtn = document.querySelector('#stop-clock-btn');

const DEFAULT_TIME = 1;


class Clock {
    constructor() {
        this.startingMinutes = DEFAULT_TIME;
        this.time = this.startingMinutes * 60;
        this.minutes = Math.floor(this.time / 60);
        this.seconds = this.time % 60;
    }

    update() {

        if (this.time >= 0) {
            this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
            this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

            clockEl.innerHTML = `${this.minutes}:${this.seconds}`;
        } else {
            stopInterval();
        }
        this.time--;
    }

    showTime() {
        clockEl.innerHTML = `${this.minutes}:${this.seconds}`;
    }


}


const clock = new Clock();

function startInterval() {
    if (!startInterval) {
        setInterval(startInterval(), 1000);

    }
}

function stopInterval() {
    clearInterval(startInterval(), 1000);
}

startClockBtn.addEventListener('click', startInterval)
stopClockBtn.addEventListener('click', stopInterval)

