import { TodoList } from './todolist';
//importera klass TodoList

//skapa klass för att spara och hämta objekt från local storage

export class LocalStorageHandler {
   static saveToLocalStorage(todos:TodoList[]): void {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }
  
  static loadFromLocalStorage() : TodoList[] {
      const savedTodos = localStorage.getItem("todos"); 
      if (savedTodos) {
        const objTodos = JSON.parse(savedTodos);
        return objTodos.map((todo: {task:string; completed:boolean; priority:string})=>
        new TodoList(todo.task, todo.completed, todo.priority));
} else {
            return []; 
        } 
        }
      };
   