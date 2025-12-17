class Task {
    constructor(id, text, createdAt = new Date()) {
        this.id = id;
        this.text = text;
        this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    }
}

export default Task;