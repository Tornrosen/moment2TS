import { TodoList}  from './todolist';
import { TodoHandler } from './todohandler';
//importera klasser TodoList och LocalStorageHandler

const todoHandler = new TodoHandler();
//skapa ny instans av todohandler

//skapa variabler

let inputTaskEl = document.getElementById("taskText") as HTMLInputElement;
let inputPrioEl = document.getElementById("priority") as HTMLInputElement;
let taskListEl = document.getElementById("taskList") as HTMLUListElement;
let submitBtnEl = document.getElementById("submitBtn") as HTMLButtonElement;

//skicka formulär med funktion addTodo istället för på defaultsättet

window.onload =  init;

document.addEventListener('DOMContentLoaded',() => {
  let form = document.getElementById("form")! as HTMLFormElement;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderTodos();
  })
})

function addTodo():void {
  let taskText = inputTaskEl.value;
  let prio = inputPrioEl.value;

  let trueOrNah = todoHandler.checkTodo(taskText, prio);
 if(trueOrNah===true) {
  const newTodo = new TodoList(taskText, false, prio);
  todoHandler.addTodo(newTodo); 
    inputTaskEl.value = "";
    inputPrioEl.value = "";
    renderTodos();
  }
}

function renderTodos(): void {
  const todos = todoHandler.getTodos();
  if (taskListEl) {
    taskListEl.innerHTML='';
    todos.forEach((todo) => {
      let newEl = document.createElement("article");
      let newTextNode = document.createTextNode(`Uppgift: ${todo.task}. Prioritet: ${todo.priority}. 
    Avklarad?`);
      newEl.appendChild(newTextNode);
      taskListEl.appendChild(newEl);
      newEl.className = "task";

      const checkBox = document.createElement('checkbox') as HTMLInputElement;
            checkBox.checked = false;
    })

    }
}

//skapa händelsehanterare

submitBtnEl.addEventListener("click", addTodo);

//hämtar element för meny

let openBtn = document.getElementById("openMenu");

let closeBtn = document.getElementById("closeMenu");

//skapar händelselyssnare för meny

if(openBtn)openBtn.addEventListener("click", toggleMenu);
if(closeBtn)closeBtn.addEventListener("click", toggleMenu);

//skapar funktion

/**Döljer och visar menyn när man klickar på knappen
 * 
 * function toggleMenu
 * @param void
 * @return void
 */

function toggleMenu() {
    let navMenuEl = document.getElementById("navMenu");

    if(navMenuEl) {let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }}
}

