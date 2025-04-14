"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
//importera interface Todo
//skapa klass TodoList med constructor 
var TodoList = /** @class */ (function () {
    function TodoList(task, completed, priority) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
    return TodoList;
}());
exports.TodoList = TodoList;
