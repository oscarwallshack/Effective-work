import * as pomodoro from './pomodoro.js';
import * as todo from './todo.js';

// Pomodoro 

pomodoro.pomodoroMode.addEventListener('click', function () {
    pomodoro.breakMode.classList.remove('active');
    pomodoro.pomodoroMode.classList.add('active');
    pomodoro.timer.changeMode(pomodoroMode);
});
pomodoro.breakMode.addEventListener('click', function () {
    pomodoro.pomodoroMode.classList.remove('active');
    pomodoro.breakMode.classList.add('active');
    pomodoro.timer.changeMode(pomodoroMode); pomodoro.timer.changeMode(breakMode);
});

pomodoro.openSettingsBtn.addEventListener('click', pomodoro.settingsPopUp.show);
pomodoro.closeSettingsBtn.addEventListener('click', pomodoro.settingsPopUp.hide);
window.addEventListener('click', pomodoro.settingsPopUp.outsideClick);
pomodoro.submitSettingsBtn.addEventListener('click', pomodoro.timer.set);
pomodoro.startClockBtn.addEventListener('click', pomodoro.startInterval);
pomodoro.stopClockBtn.addEventListener('click', pomodoro.stopInterval);

// Todo

todo.addTodoArea.addEventListener('click', todo.TodoPanel.show);
todo.closetodoPanel.addEventListener('click', todo.TodoPanel.hide);
todo.addTodoBtn.addEventListener('click', function () {
    if (todo.inputTodo.value && todo.inputTodo.value != '') {
        todo.Todo.add(todo.inputTodo.value);
        todo.inputTodo.value = '';
    } else {
        todo.inputTodo.placeholder = 'Enter content!';
    }
});
