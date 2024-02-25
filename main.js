import CategoryManager from "./Category/CategoryManager.js";
import TaskManager from "./Task/TaskManager.js";

// Pills
const categoryManager = new CategoryManager();
categoryManager.getCategories();

// Task
const taskManager = new TaskManager();
taskManager.getTasks();
