import Provider from "../../Provider/Provider.js";
import TaskObserver from "../TaskObserver.js";

export default class GetTaskCommand {
    taskProvider = new Provider("tasks");
    taskObserver = new TaskObserver();

    constructor(task) {
        this.task = task;
    }

    execute() { 
        this.taskObserver.update();
    }
}