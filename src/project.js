//Project class

class Project {
    constructor(title, taskList) {
        this.title = title
        this.taskList = taskList
    }

    static startNewProject(title) {
        return new Project(title, []);
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTaskList() {
        return this.taskList;
    }

    setTaskList(taskList) {
        this.taskList = taskList;
    }

    addTodo(todo) {
        this.taskList.push(todo);
    }

    static fromStorage(plainObject) {
        return new Project(plainObject.title, plainObject.taskList);
    }
}

export {Project};