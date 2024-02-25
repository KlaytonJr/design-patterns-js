import Provider from "../../Provider/Provider.js";
import TaskObserver from "../TaskObserver.js";

export default class AddTaskCommand {
    taskProvider = new Provider("tasks");
    taskObserver = new TaskObserver();

    constructor(task) {
        this.task = task;
    }

    execute() { 
        console.log("execute TaskCommand")
        console.log(this.task);
        this.taskProvider.addItem(this.task);

        this.taskObserver.update();
    }
}