//TO-DO class and functions
class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.isDone = false; //Default false because why else is it on todo list?
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getdueDate() {
        return this.dueDate;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    getIsDone() {
        return this.isDone;
    }

    setIsDone(isDone) {
        this.isDone = isDone;
    }

    static fromStorage(plainObject) {
        return new Todo(plainObject.title, plainObject.description, plainObject.dueDate, plainObject.priority, plainObject.notes)
    }
}

export {Todo};