import CategoryManager from "./Category/CategoryManager.js";
import TaskManager from "./Task/TaskManager.js";

// Pills
const categoryManager = new CategoryManager();
categoryManager.getCategories();

// Task
const taskManager = new TaskManager();
taskManager.getTasks();

const addTaskBtn = document.getElementById("add-btn");
const addTaskInput = document.getElementById("add-input");

addTaskBtn.addEventListener("click", () => {
    taskManager.addTask(addTaskInput.value);
    addTaskInput.value = "";
});