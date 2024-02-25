import Provider from "../../Provider/Provider.js";
import TaskObserver from "../TaskObserver.js";

export default class GetTaskCommand {
    taskProvider = new Provider("tasks");
    taskObserver = new TaskObserver();

    constructor(taskManager) {
        this.taskManager = taskManager;
    }

    execute() { 
        const addTaskBtn = document.getElementById("add-btn");
        const addTaskInput = document.getElementById("add-input");

        addTaskBtn.addEventListener("click", () => this.taskManager.addTask(addTaskInput.value));

        this.taskObserver.update();
    }
}