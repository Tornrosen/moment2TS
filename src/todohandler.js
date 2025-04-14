"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var localstorage_1 = require("./localstorage");
//importera klasser TodoList och LocalStorageHandler
//skapa en klass för att lägga till, hämta och ta bort objekt ur array
var TodoHandler = /** @class */ (function () {
    function TodoHandler() {
        this.todos = [];
        this.todos = localstorage_1.LocalStorageHandler.loadFromLocalStorage();
    }
    TodoHandler.prototype.checkTodo = function (task, priority) {
        if (task.length >= 1 && priority === "1" || priority === "2" || priority === "3")
            return true;
        return false;
    };
    TodoHandler.prototype.addTodo = function (todo) {
        this.todos.push(todo);
        localstorage_1.LocalStorageHandler.saveToLocalStorage(this.todos);
    };
    TodoHandler.prototype.markTodoCompleted = function (index) {
        this.todos.splice(index, 1);
        localstorage_1.LocalStorageHandler.saveToLocalStorage(this.todos);
    };
    TodoHandler.prototype.getTodos = function () {
        return this.todos;
    };
    return TodoHandler;
}());
exports.TodoHandler = TodoHandler;
