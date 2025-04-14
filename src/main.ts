import { TodoList } from './todolist';
import { TodoHandler } from './todohandler';
//importera klasser TodoList och LocalStorageHandler

const todoHandler = new TodoHandler();
//skapa ny instans av todohandler

//visar listan när fönstret laddas

window.onload = () => {
  (renderTodos());
}

//skapa variabler

let inputTaskEl = document.getElementById("taskText") as HTMLInputElement;
let inputPrioEl = document.getElementById("priority") as HTMLInputElement;
let taskListEl = document.getElementById("taskList") as HTMLUListElement;
let submitBtnEl = document.getElementById("submitBtn") as HTMLButtonElement;

//skicka formulär med funktion addTodo istället för på defaultsättet

document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById("form")! as HTMLFormElement;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderTodos();
  })
})

//Skapa funktion för att lägga till uppgifter till listan om de klarar kontrollen
function addTodo(): void {
  let taskText = inputTaskEl.value;
  let prio = inputPrioEl.value;

  let trueOrNah = todoHandler.checkTodo(taskText, prio);
  if (trueOrNah === true) {
    const newTodo = new TodoList(taskText, false, prio);
    todoHandler.addTodo(newTodo);
    inputTaskEl.value = "";
    inputPrioEl.value = "";
    renderTodos();
  }
}

//Funktion för att skriva ut uppgifterna till webbplatsen med articleelement och formelement med checkbox
function renderTodos(): void {
  const todos = todoHandler.getTodos();
  if (taskListEl) {
    taskListEl.innerHTML = '';
    todos.forEach((todo, index) => {
      let newEl = document.createElement("article");
      newEl.innerHTML = `<h3>Uppgift: ${todo.task}<h3> <p>Prioritet: ${todo.priority}.
      Checka i som avklarad för att ta bort uppgiften från listan.</p>`;
      taskListEl.appendChild(newEl);
      newEl.className = "task";

      const checkForm = document.createElement('form') as HTMLFormElement;
      const label = document.createElement('label') as HTMLElement;
      const checkBox = document.createElement('input') as HTMLInputElement;
      checkForm.setAttribute("id", "checkForm");

      newEl.appendChild(checkForm);
      checkForm.appendChild(label);
      label.appendChild(checkBox);

      label.appendChild(document.createTextNode("Avklarad?"))
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("id", "checkbox");
      checkBox.checked = false;
      checkBox.className = "checkHere";

      checkBox.addEventListener('click', () => deleteTodo(index));
    })

  }
}

//funktion som aktivers vid klick i checkboxen, tar bort uppgiften

function deleteTodo(index: number): void {
  todoHandler.markTodoCompleted(index);
  renderTodos();
}

//skapa händelsehanterare

submitBtnEl.addEventListener("click", addTodo);

//hämtar element för meny

let openBtn = document.getElementById("openMenu");

let closeBtn = document.getElementById("closeMenu");

//skapar händelselyssnare för meny

if (openBtn) openBtn.addEventListener("click", toggleMenu);
if (closeBtn) closeBtn.addEventListener("click", toggleMenu);

//skapar funktion

/**Döljer och visar menyn när man klickar på knappen
 * 
 * function toggleMenu
 * @param void
 * @return void
 */

function toggleMenu() {
  let navMenuEl = document.getElementById("navMenu");

  if (navMenuEl) {
    let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
      navMenuEl.style.display = "block";
    } else {
      navMenuEl.style.display = "none";
    }
  }
}

