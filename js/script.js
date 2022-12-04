import * as pomodoro from './pomodoro.js';


pomodoro.pomodoroMode.addEventListener('click', function () {
    pomodoro.breakMode.classList.remove('active');
    pomodoro.pomodoroMode.classList.add('active');
    pomodoro.timer.changeMode(pomodoroMode);
});
pomodoro.breakMode.addEventListener('click', function () {
    pomodoro.pomodoroMode.classList.remove('active');
    pomodoro.breakMode.classList.add('active');
    pomodoro.timer.changeMode(pomodoroMode); pomodoro.timer.changeMode(breakMode)
});

pomodoro.openSettingsBtn.addEventListener('click', pomodoro.settingsPopUp.show);
pomodoro.closeSettingsBtn.addEventListener('click', pomodoro.settingsPopUp.hide);
window.addEventListener('click', pomodoro.settingsPopUp.outsideClick);
pomodoro.submitSettingsBtn.addEventListener('click', pomodoro.timer.set);
pomodoro.startClockBtn.addEventListener('click', pomodoro.startInterval);
pomodoro.stopClockBtn.addEventListener('click', pomodoro.stopInterval);

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
