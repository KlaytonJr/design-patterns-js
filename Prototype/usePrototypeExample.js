import TaskObserver from "../TaskObserver.js";
import CommandPrototype from "./CommandPrototype.js";

export default class AddTaskCommand extends CommandPrototype {
    taskObserver = new TaskObserver();

    constructor(item, name) {
        super(item, name);
    }

    execute() { 
        this.provider.addItem(this.item);
        this.taskObserver.update();
    }
}