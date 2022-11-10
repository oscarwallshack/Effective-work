const clockEl = document.querySelector('.clock')
const startClockBtn = document.querySelector('#start-clock-btn')
const stopClockBtn = document.querySelector('#stop-clock-btn');

const settingsBtn = document.querySelector('#settings-btn')
const settingsPopup = document.querySelector('.settings')
const closeBtn = document.querySelector('.close');

const DEFAULT_TIME = 0.2;

let startingMinutes = DEFAULT_TIME;
let time = startingMinutes * 60;

const clock = {
    startingMinutes: DEFAULT_TIME,
    time: startingMinutes * 60,


    update() {
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
}

let interval;

function startInterval() {
    if (!interval) {
        interval = setInterval(clock.update, 1000);
    }
}

function stopInterval() {
    clearInterval(interval);
    interval = null;
}

function hideSettings() {
    settingsPopup.style.display = 'none'
}

function showSettings(){
    settingsPopup.style.display = 'block'
}

function outsideClick(e) {
    if(e.target == settingsPopup){
        hideSettings()
    }
}


settingsBtn.addEventListener('click', showSettings)
closeBtn.addEventListener('click', hideSettings)
window.addEventListener('click', outsideClick)

startClockBtn.addEventListener('click', startInterval);
stopClockBtn.addEventListener('click', stopInterval)

