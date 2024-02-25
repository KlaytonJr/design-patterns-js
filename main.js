import TaskManager from "./Task/TaskManager.js";

const addTaskBtn = document.getElementById("add-btn");
const addTaskInput = document.getElementById("add-input");

const taskManager = new TaskManager();

taskManager.getTasks();

addTaskBtn.addEventListener("click", () => taskManager.addTask(addTaskInput.value))