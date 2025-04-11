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

//skapar interface för todo

interface Todo {
  task:string,
  completed:boolean,
  priority:number,
  addToDo():boolean
}[]

//skapa klass med array, constructor och metoder

class TodoList implements Todo {

  todos: Todo = {
    task: inputTaskEl.value,
    completed: false,
    priority: inputPrioEl.value
  } 

  task:string = inputTaskEl.value;
  completed:boolean = false;
  priority:number = inputPrioEl.value;
  
  constructor(task:string, completed: boolean, priority:number) {
    this.task=task;
    this.completed=completed;
    this.priority=priority;
  }

  addToDo():boolean {
if(this.task.length>=1&&this.priority===1||this.priority===2||this.priority===3)
   {
    return true;
  }
  else {
    return false
  }
}}
