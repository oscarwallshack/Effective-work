const clockEl = document.querySelector('.clock')
const startClockBtn = document.querySelector('#start-clock-btn')
const stopClockBtn = document.querySelector('#stop-clock-btn');

const DEFAULT_TIME = 1;


// class Clock {
//     constructor() {
//         this.startingMinutes = DEFAULT_TIME;
//         this.time = this.startingMinutes * 60;
//         this.minutes = Math.floor(this.time / 60);
//         this.seconds = this.time % 60;
//     }

//     update() {
//         if (this.time >= 0) {
//             this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
//             this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

//             clockEl.innerHTML = `${this.minutes}:${this.seconds}`;
//             console.log('działa')
//         } else {
//             stopInterval();
//         }
//         this.time--;
//     }

//     showTime() {
//         clockEl.innerHTML = `${this.minutes}:${this.seconds}`;
//     }


// }

let startingMinutes = DEFAULT_TIME;
let time = startingMinutes * 60;

function update() {


    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (time >= 0) {
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds;

        clockEl.innerHTML = `${minutes}:${seconds}`;
    } else {
        stopInterval();
    }
    time--;
}

function showTime() {
    clockEl.innerHTML = `${minutes}:${seconds}`;
}

let interval;

function startInterval() {
    if (!interval) {
        interval = setInterval(update, 1000);
    }
}

function stopInterval() {
    clearInterval(interval);
    interval = null;
}


startClockBtn.addEventListener('click', startInterval);
stopClockBtn.addEventListener('click', stopInterval)

