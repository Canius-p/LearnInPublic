import figlet from 'figlet';
import fs from 'fs';

console.log(figlet.textSync('Todo CLI App'));

// Add a todo item
const addTodo = (title: any) => {
  const todos = fetchTodos();
  const todo = {
    title,
  };

  const duplicatetodos = todos.filter(
    (todo: { title: any }) => todo.title === title
  );

  if (duplicatetodos.length === 0) {
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }
};

// Delete a todo item
const deleteTodo = (title: any) => {
  let todos = fetchTodos();
  let filteredtodos = todos.filter(
    (todo: { title: any }) => todo.title !== title
  );
  saveTodos(filteredtodos);

  return todos.length !== filteredtodos.length;
};

// Read a todo item
const readTodo = (title: any) => {
  let todos = fetchTodos();
  let filteredTodos = todos.filter(
    (todo: { title: any }) => todo.title === title
  );
  return filteredTodos[0];
};

// List all todo items
const listTodos = () => {
  return fetchTodos();
};
// Utility functions
const fetchTodos = () => {
  try {
    let todosString: any = fs.readFileSync('tasks-data.json');
    return JSON.parse(todosString);
  } catch (e) {
    return [];
  }
};

const saveTodos = (todos: any) => {
  fs.writeFileSync('tasks-data.json', JSON.stringify(todos));
};

const logTodo = (todo: { title: any }) => {
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
