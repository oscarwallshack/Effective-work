const clockEl = document.querySelector('.clock');
const startClockBtn = document.querySelector('#start-clock-btn');
const stopClockBtn = document.querySelector('#stop-clock-btn');

const openSettingsBtn = document.querySelector('#settings-btn');
const settingsPopupEl = document.querySelector('.settings');
const closeBtn = document.querySelector('.close');
const submitSettingsBtn = document.querySelector('#submit-settings');
const breakTime = document.querySelector('#break-time');

const giventimerTime = document.querySelector('#timer-time');
const startingMinutes = parseInt(clockEl.textContent);
let time = startingMinutes * 60;

const clock = {
    update() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (time >= 0) {
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            clockEl.innerHTML = `${minutes}:${seconds}`;
        } else {
            stopInterval();
        }
        time--;
    },

    set() {
        timerTime = giventimerTime.value < 10 ? "0" + giventimerTime.value : giventimerTime.value;
        clockEl.innerHTML = `${timerTime}:00`;
        settingsPopUp.hide();
        time = timerTime * 60;
    }
}

const settingsPopUp = {
    show() {
        settingsPopupEl.style.display = 'block';
    },

    hide() {
        settingsPopupEl.style.display = 'none';
    },

    outsideClick(e) {
        if (e.target == settingsPopupEl) {
            settingsPopUp.hide();
        }
    },


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



openSettingsBtn.addEventListener('click', settingsPopUp.show);
closeBtn.addEventListener('click', settingsPopUp.hide);
window.addEventListener('click', settingsPopUp.outsideClick);
submitSettingsBtn.addEventListener('click', clock.set);
startClockBtn.addEventListener('click', startInterval);
stopClockBtn.addEventListener('click', stopInterval);

