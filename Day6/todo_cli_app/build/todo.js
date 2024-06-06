"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const fs_1 = __importDefault(require("fs"));
console.log(figlet_1.default.textSync('Todo CLI App'));
// Add a todo item
const addTodo = (title) => {
    const todos = fetchTodos();
    const todo = {
        title,
    };
    const duplicatetodos = todos.filter((todo) => todo.title === title);
    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};
// Delete a todo item
const deleteTodo = (title) => {
    let todos = fetchTodos();
    let filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);
    return todos.length !== filteredtodos.length;
};
// Read a todo item
const readTodo = (title) => {
    let todos = fetchTodos();
    let filteredTodos = todos.filter((todo) => todo.title === title);
    return filteredTodos[0];
};
// List all todo items
const listTodos = () => {
    return fetchTodos();
};
// Utility functions
const fetchTodos = () => {
    try {
        let todosString = fs_1.default.readFileSync('tasks-data.json');
        return JSON.parse(todosString);
    }
    catch (e) {
        return [];
    }
};
const saveTodos = (todos) => {
    fs_1.default.writeFileSync('tasks-data.json', JSON.stringify(todos));
};
const logTodo = (todo) => {
    console.log('## ---## --- ##');
    console.log(`It's title is: ${todo.title}`);
};
// Exporting function
module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodo,
};
