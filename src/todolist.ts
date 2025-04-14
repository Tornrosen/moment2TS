import { Todo } from './todo';
//importera interface Todo

//skapa klass TodoList med constructor 

export class TodoList implements Todo {
  
    task:string;
    completed:boolean;
    priority:string;
  
    
    constructor(task:string, completed: boolean, priority:string) {
      this.task=task;
      this.completed=completed;
      this.priority=priority;
    }}