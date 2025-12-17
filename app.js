import TodoList from './TodoList.js';

const todoList = new TodoList();

const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const sortButton = document.getElementById('sort-button');
const reverseButton = document.getElementById('reverse-button');
const taskListElement = document.getElementById('task-list');

function createTaskCard(task) {
    const card = document.createElement('li');
    card.className = 'task-card';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        todoList.removeTask(task.id);
        renderTasks();
    };

    card.append(text, deleteButton);
    return card;
}

function renderTasks() {
    taskListElement.innerHTML = '';
    todoList.getAllTasks().forEach(task => {
        taskListElement.appendChild(createTaskCard(task));
    });
}

addButton.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        todoList.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
});

sortButton.addEventListener('click', () => {
    todoList.sortByDate();
    renderTasks();
});

reverseButton.addEventListener('click', () => {
    todoList.reverseOrder();
    renderTasks();
});

renderTasks();