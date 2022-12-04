const clockEl = document.querySelector('.clock');
export const startClockBtn = document.querySelector('#start-clock-btn');
export const stopClockBtn = document.querySelector('#stop-clock-btn');

export const openSettingsBtn = document.querySelector('#settings-btn');
const settingsPopupEl = document.querySelector('.settings');
export const closeSettingsBtn = document.querySelector('#close-settings');
export const submitSettingsBtn = document.querySelector('#submit-settings');

const settingsBreakTime = document.querySelector('#break-time');
const settingsPomodoroTime = document.querySelector('#timer-time');

export const pomodoroMode = document.querySelector('#pomodoroMode');
export const breakMode = document.querySelector('#breakMode');

const startingMinutes = parseInt(clockEl.textContent);

let time = startingMinutes * 60;

export const timer = {
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
        let timerTime = settingsPomodoroTime.value < 10 ? "0" + settingsPomodoroTime.value : settingsPomodoroTime.value;
        clockEl.innerHTML = `${timerTime}:00`;
        settingsPopUp.hide();
        time = timerTime * 60;
    },

    changeMode(mode) {
        if (mode.name === "pomodoro") {
            time = settingsPomodoroTime.value * 60;
        } else if (mode.name === "break") {
            time = settingsBreakTime.value * 60;
        }
        timer.update();
    }
}

export const settingsPopUp = {
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
export function startInterval() {
    if (!interval) {
        interval = setInterval(timer.update, 1000);
    }
}
export function stopInterval() {
    clearInterval(interval);
    interval = null;
}
