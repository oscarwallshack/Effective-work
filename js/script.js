const clockEl = document.querySelector('.clock');
const startClockBtn = document.querySelector('#start-clock-btn');
const stopClockBtn = document.querySelector('#stop-clock-btn');

const openSettingsBtn = document.querySelector('#settings-btn');
const settingsPopupEl = document.querySelector('.settings');
const closeSettingsBtn = document.querySelector('#close-settings');
const submitSettingsBtn = document.querySelector('#submit-settings');

const settingsBreakTime = document.querySelector('#break-time');
const settingsPomodoroTime = document.querySelector('#timer-time');

const pomodoroMode = document.querySelector('#pomodoroMode');
const breakMode = document.querySelector('#breakMode');

const startingMinutes = parseInt(clockEl.textContent);

const timer = {
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
        timerTime = settingsPomodoroTime.value < 10 ? "0" + settingsPomodoroTime.value : settingsPomodoroTime.value;
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
        interval = setInterval(timer.update, 1000);
    }
}
function stopInterval() {
    clearInterval(interval);
    interval = null;
}

let time = startingMinutes * 60;

pomodoroMode.addEventListener('click', function () {
    breakMode.classList.remove('active');
    pomodoroMode.classList.add('active');
    timer.changeMode(pomodoroMode);
});
breakMode.addEventListener('click', function () {
    pomodoroMode.classList.remove('active');
    breakMode.classList.add('active');
    timer.changeMode(pomodoroMode); timer.changeMode(breakMode)
});

openSettingsBtn.addEventListener('click', settingsPopUp.show);
closeSettingsBtn.addEventListener('click', settingsPopUp.hide);
window.addEventListener('click', settingsPopUp.outsideClick);
submitSettingsBtn.addEventListener('click', timer.set);
startClockBtn.addEventListener('click', startInterval);
stopClockBtn.addEventListener('click', stopInterval);

// Todo section

import { addTodoArea, closetodoPanel, inputTodo, addTodoBtn,  TodoPanel, Todo} from './todo.js';


addTodoArea.addEventListener('click', TodoPanel.show)
closetodoPanel.addEventListener('click', TodoPanel.hide)
addTodoBtn.addEventListener('click', function () {
    if (inputTodo.value && inputTodo.value != '') {
        Todo.add(inputTodo.value)
        inputTodo.value = '';
    } else {
        inputTodo.placeholder = 'Enter content!';
    }
});
