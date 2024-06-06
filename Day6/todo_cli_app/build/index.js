"use strict";
console.log('index.js is running');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const tasks = require('./todo');
const argv = yargs.argv;
const command = argv._[0];
console.log('Running Command is :', command);
if (command === 'addTodo') {
    tasks.addTodo(argv.title);
}
else if (command === 'deleteTodo') {
    let todoDeleted = tasks.deleteTodo(argv.title);
    let message = todoDeleted ? 'Todo was deleted' : 'Todo can not found';
    console.log(message);
}
else if (command === 'readTodo') {
    let todo = tasks.readTodo(argv.title);
    if (todo) {
        console.log('yahoo! The todo was found.');
        tasks.logTodo(todo);
    }
    else {
        console.log('Oops! The todo was not found.');
    }
}
else if (command === 'listTodos') {
    let allTodos = tasks.listTodos();
    console.log(`${allTodos.length} tasks available`);
    allTodos.forEach((todo) => tasks.logTodo(todo));
}
else {
    console.log('It is a Invalid command.');
}
