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

const todoUl = document.querySelector('#todos')
const addTodoArea = document.querySelector('.add_todo_area');
const todoPanelEl = document.querySelector('.todo_panel');

const closetodoPanel = document.querySelector('#close_todo_panel');
const inputTodo = document.querySelector('#input_todo')
const addTodoBtn = document.querySelector('#add_todo');

const todos = JSON.parse(localStorage.getItem('todos'));



const todoPanel = {
    show() {
        todoPanelEl.style.display = 'block';
    },
    hide() {
        todoPanelEl.style.display = 'none';
    }
}

let todoArr = []

if (todos) {
    todos.forEach(element => {
        todoArr.push(element)
    });
    update(todos);
}

function updateLS(){
    window.localStorage.setItem('todos', JSON.stringify(todoArr));

}

function addTodo(todo) {
    window.localStorage.setItem('todos', JSON.stringify(todo));
    update();
}

function deleteTodo(id) {
    todoArr.splice(id, 1)
    updateLS()
    console.log(todoArr);
    update();
}


function update() {
    if (todoUl.hasChildNodes()) {
        todoUl.replaceChildren();
    }
    todoArr.forEach(element => {
        const node = document.createElement("div");
        const textnode = document.createTextNode(`${element.content}`);
        node.appendChild(textnode);
        todoUl.appendChild(node);
    })
}

todoUl.addEventListener('click', function (e) {
    let todo = todoArr.find(element => element.content == e.target.textContent);
    todoId = todoArr.indexOf(todo)
    console.log(todoId);
    deleteTodo(todoId)
});

addTodoArea.addEventListener('click', todoPanel.show)
closetodoPanel.addEventListener('click', todoPanel.hide)
addTodoBtn.addEventListener('click', function () {
    if (inputTodo.value && inputTodo.value != '') {
        let todo = {
            content: inputTodo.value,
            completed: ''
        }
        todoArr.push(todo)

        addTodo(todoArr);
        inputTodo.value = '';
    } else {
        inputTodo.placeholder = 'Enter content!';
    }
});

// addTodoBtn.addEventListener('click', function () {
//     if (!inputTodo.velue && inputTodo.value != '') {
//         todo.add(inputTodo.value);
//         inputTodo.value = '';
//     } else {
//         inputTodo.placeholder = 'Enter content!';
//     }
// })
