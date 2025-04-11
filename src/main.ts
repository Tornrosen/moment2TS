"use strict";
//hämtar element

let openBtn = document.getElementById("openMenu");

let closeBtn = document.getElementById("closeMenu");

//skapar händelselyssnare

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

//skapa variabler

let inputTaskEl = document.getElementById("taskText") as HTMLInputElement;
let inputPrioEl = document.getElementById("priority") as HTMLInputElement;
let taskListEl = document.getElementById("taskList") as HTMLUListElement;
let submitBtnEl = document.getElementById("submitBtn") as HTMLButtonElement;
let i;


//skapar interface för todo

interface Todo {
  task:string,
  completed:boolean,
  priority:string,
}[]

//skapa klass med array, constructor och metoder

class TodoList implements Todo {

  todos: Todo[] = [
    { task: inputTaskEl.value, completed: false, priority: inputPrioEl.value }
  ];

  task:string;
  completed:boolean;
  priority:string;

  
  constructor(task:string, completed: boolean, priority:string) {
    this.task=task;
    this.completed=completed;
    this.priority=priority;
    this.getTodos();
  }
 
  addToDo(task:string, priority:string):boolean {
if(task.length>=1&&priority==="1"||priority==="2"||priority==="3")
   {
    return true
  }
  else {
    return false
  }
}
/*markToDoCompleted(todoIndex:number):void {
 if(this.todos.indexOf) this.todos.indexOf=todoIndex;

  let checkBox = document.getElementById("checkbox") as HTMLInputElement;
  if (checkBox.checked=true) {
  this.completed=true;
  }
  else {this.completed=false}
}*/

//get todos - se get och set
getTodos(){
  return "Här är vi!"
}

saveToLocalStorage(): void {
  let tasks = document.getElementsByClassName("task");
  let tempArr = [];

  for (i = 0; i < tasks.length; i++) {
    tempArr.push(tasks[i].innerHTML);
  }

  let jsonStr = JSON.stringify(tempArr);  

  localStorage.setItem("tasks", jsonStr);
  console.log(tasks);
}

loadFromLocalStorage() : void {
  if (localStorage) {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      let objTasks = JSON.parse(savedTasks);

      if (taskListEl) {
        for (i = 0; i < objTasks.length; i++) {
          let newEl = document.createElement("article");
          let newTextNode = document.createTextNode(objTasks[i]);
          newEl.appendChild(newTextNode);
          newEl.className = "task";
          taskListEl.appendChild(newEl);
        }
      }
    };
  }
}
}

function addTodo():void {
  //köra metoden i klassen, addToDo, syntax?
  if (taskListEl) {
    let newEl = document.createElement("article");
    let newTextNode = document.createTextNode(`Uppgift: Förstå TypeScript. Prioritet: 1. 
  Avklarad?`);
    newEl.appendChild(newTextNode);
    taskListEl.appendChild(newEl);
    newEl.className = "task";
    inputTaskEl.value = "";
    inputPrioEl.value = "";
  }
}

//skapa händelsehanterare

submitBtnEl.addEventListener("click", addTodo);



