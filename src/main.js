"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todolist_1 = require("./todolist");
var todohandler_1 = require("./todohandler");
//importera klasser TodoList och LocalStorageHandler
var todoHandler = new todohandler_1.TodoHandler();
//skapa ny instans av todohandler
//visar listan när fönstret laddas
window.onload = function () {
    (renderTodos());
};
//skapa variabler
var inputTaskEl = document.getElementById("taskText");
var inputPrioEl = document.getElementById("priority");
var taskListEl = document.getElementById("taskList");
var submitBtnEl = document.getElementById("submitBtn");
//skicka formulär med funktion addTodo istället för på defaultsättet
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        renderTodos();
    });
});
//Skapa funktion för att lägga till uppgifter till listan om de klarar kontrollen
function addTodo() {
    var taskText = inputTaskEl.value;
    var prio = inputPrioEl.value;
    var trueOrNah = todoHandler.checkTodo(taskText, prio);
    if (trueOrNah === true) {
        var newTodo = new todolist_1.TodoList(taskText, false, prio);
        todoHandler.addTodo(newTodo);
        inputTaskEl.value = "";
        inputPrioEl.value = "";
        renderTodos();
    }
}
//Funktion för att skriva ut uppgifterna till webbplatsen med articleelement och formelement med checkbox
function renderTodos() {
    var todos = todoHandler.getTodos();
    if (taskListEl) {
        taskListEl.innerHTML = '';
        todos.forEach(function (todo, index) {
            var newEl = document.createElement("article");
            newEl.innerHTML = "<h3>Uppgift: ".concat(todo.task, "<h3> <p>Prioritet: ").concat(todo.priority, ".\n      Checka i som avklarad f\u00F6r att ta bort uppgiften fr\u00E5n listan.</p>");
            taskListEl.appendChild(newEl);
            newEl.className = "task";
            var checkForm = document.createElement('form');
            var label = document.createElement('label');
            var checkBox = document.createElement('input');
            checkForm.setAttribute("id", "checkForm");
            newEl.appendChild(checkForm);
            checkForm.appendChild(label);
            label.appendChild(checkBox);
            label.appendChild(document.createTextNode("Avklarad?"));
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute("id", "checkbox");
            checkBox.checked = false;
            checkBox.className = "checkHere";
            checkBox.addEventListener('click', function () { return deleteTodo(index); });
        });
    }
}
//funktion som aktivers vid klick i checkboxen, tar bort uppgiften
function deleteTodo(index) {
    todoHandler.markTodoCompleted(index);
    renderTodos();
}
//skapa händelsehanterare
submitBtnEl.addEventListener("click", addTodo);
//hämtar element för meny
var openBtn = document.getElementById("openMenu");
var closeBtn = document.getElementById("closeMenu");
//skapar händelselyssnare för meny
if (openBtn)
    openBtn.addEventListener("click", toggleMenu);
if (closeBtn)
    closeBtn.addEventListener("click", toggleMenu);
//skapar funktion
/**Döljer och visar menyn när man klickar på knappen
 *
 * function toggleMenu
 * @param void
 * @return void
 */
function toggleMenu() {
    var navMenuEl = document.getElementById("navMenu");
    if (navMenuEl) {
        var style = window.getComputedStyle(navMenuEl);
        if (style.display === "none") {
            navMenuEl.style.display = "block";
        }
        else {
            navMenuEl.style.display = "none";
        }
    }
}
