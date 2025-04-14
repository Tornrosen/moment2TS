"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageHandler = void 0;
var todolist_1 = require("./todolist");
//importera klass TodoList
//skapa klass för att spara och hämta objekt från local storage
var LocalStorageHandler = /** @class */ (function () {
    function LocalStorageHandler() {
    }
    LocalStorageHandler.saveToLocalStorage = function (todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos);
    };
    LocalStorageHandler.loadFromLocalStorage = function () {
        var savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            var objTodos = JSON.parse(savedTodos);
            return objTodos.map(function (todo) {
                return new todolist_1.TodoList(todo.task, todo.completed, todo.priority);
            });
        }
        else {
            return [];
        }
    };
    return LocalStorageHandler;
}());
exports.LocalStorageHandler = LocalStorageHandler;
;
