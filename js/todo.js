const todoUl = document.querySelector("#todos");
const todoPanelEl = document.querySelector(".todo_panel");
export const addTodoArea = document.querySelector(".add_todo_area");

export const closetodoPanel = document.querySelector("#close_todo_panel");
export const inputTodo = document.querySelector("#input_todo");
export const addTodoBtn = document.querySelector("#add_todo");

const todos = JSON.parse(localStorage.getItem("todos"));
const todoArr = [];

export const TodoPanel = {
  show() {
    todoPanelEl.style.display = "block";
  },
  hide() {
    todoPanelEl.style.display = "none";
  },
};

export const Todo = {
  add(text) {
    let todo = {
      content: text,
    };
    todoArr.push(todo);

    window.localStorage.setItem("todos", JSON.stringify(todoArr));
    this.updateDOM();
  },

  delete(id) {
    todoArr.splice(id, 1);
    this.updateLS();
  },

  updateLS() {
    window.localStorage.setItem("todos", JSON.stringify(todoArr));
    this.updateDOM();
  },

  updateDOM() {
    if (todoUl.hasChildNodes()) {
      todoUl.replaceChildren();
    }
    todoArr.forEach((element) => {
      const node = document.createElement("div");
      const textnode = document.createTextNode(`${element.content}`);
      node.appendChild(textnode);
      todoUl.appendChild(node);
    });
  },
};

if (todos) {
  todos.forEach((element) => {
    todoArr.push(element);
  });
  Todo.updateDOM(todos);
}

todoUl.addEventListener("click", (event) => {
  let todo = todoArr.find(
    (element) => element.content == event.target.textContent
  );
  let todoId = todoArr.indexOf(todo);
  Todo.delete(todoId);
});
