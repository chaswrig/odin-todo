// src/index.js
import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { Persistence } from "./persistence.js";

//TO DO APP
// Persistence.saveProject(petProject); Disable to test persistence between sessions.
if(localStorage.length == 0) {
    const petProject = Project.startNewProject("Pets");
    const firstTodo = new Todo("First", "do thing", "2026-10-05", "high", "notes");
    const secondTodo = new Todo("second", "other thing", "2026-11-05", "low", "something something");
    petProject.addTodo(firstTodo);
    petProject.addTodo(secondTodo);
}


//Update display on load
const display = document.getElementById("content");
const projectList = Persistence.loadProjects();
projectList.forEach((project) => {
    const currentProject = Project.fromStorage(project);
    const projectDisplay = document.createElement("div");
    projectDisplay.textContent = currentProject.getTitle();
    display.appendChild(projectDisplay);
    console.log(currentProject);
    currentProject.getTaskList().forEach((todo) => {
        const currentTodo = Todo.fromStorage(todo);
        console.log(currentTodo);
        const taskDisplay = document.createElement("div");
        taskDisplay.textContent = currentTodo.getTitle() + currentTodo.getDescription();
        projectDisplay.appendChild(taskDisplay);
    });
});

//Add Item Button
const addBtn = document.getElementById("add-task");
addBtn.addEventListener("click", () => {
    const nextTodo = new Todo("Added by button", "yep", "now", "low", "just filling in data");
    const buttonProject = Project.startNewProject("ButtonProject");
    buttonProject.addTodo(nextTodo);
    Persistence.saveProject(buttonProject); // Yes this is ugly, but I'm just getting the idea here. The world does not need another todo app.
})
