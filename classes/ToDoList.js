import Task from './Task.js';

class TodoList {
    constructor() {
        this.tasks = [];
        this.loadFromStorage();
    }

    addTask(text) {
        if (!text.trim()) return;
        const id = Date.now();
        const task = new Task(id, text);
        this.tasks.push(task);
        this.saveToStorage();
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveToStorage();
    }

    getAllTasks() {
        return this.tasks;
    }

    sortByDate() {
        this.tasks.sort((a, b) => a.createdAt - b.createdAt);
        this.saveToStorage();
    }

    reverseOrder() {
        this.tasks.reverse();
        this.saveToStorage();
    }

    saveToStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('tasks');
        if (stored) {
            const data = JSON.parse(stored);
            this.tasks = data.map(t => new Task(t.id, t.text, t.createdAt));
        }
    }
}

export default TodoList;