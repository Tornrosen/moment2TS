import { TodoList}  from './todolist';
import { LocalStorageHandler } from './localstorage';
//importera klasser TodoList och LocalStorageHandler

//skapa en klass för att lägga till, hämta och ta bort objekt ur array

export class TodoHandler {
    private todos: TodoList[] = [];
  
    constructor() {
      this.todos = LocalStorageHandler.loadFromLocalStorage();
  }
  
  public checkTodo(task:string, priority:string):boolean {
    if(task.length>=1&&priority==="1"||priority==="2"||priority==="3")
        return true;
        return false;
    } 

  public addTodo(todo: TodoList): void {
          this.todos.push(todo);
          LocalStorageHandler.saveToLocalStorage(this.todos);
  }
  
  public markTodoCompleted(index: number): void {
    this.todos.splice(index, 1); 
    LocalStorageHandler.saveToLocalStorage(this.todos);
  }
  
    public getTodos(): TodoList[]{
      return this.todos;
    }
  }
  