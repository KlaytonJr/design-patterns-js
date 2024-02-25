import Provider from "../../Provider/Provider.js";
import TaskObserver from "../TaskObserver.js";

export default class GetTaskCommand {
    taskProvider = new Provider("tasks");
    taskObserver = new TaskObserver();

    constructor(taskManager) {
        this.taskManager = taskManager;
    }

    execute() { 
        this.taskObserver.update();
    }
}