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

// Logs
const logsBtn = document.getElementById("activity-icon");
const closeLogsBtn = document.getElementById("close-log");
const logsModal = document.getElementById("log");

logsBtn.addEventListener("click", () => logsModal.style.display = "flex");
closeLogsBtn.addEventListener("click", () => logsModal.style.display = "none");