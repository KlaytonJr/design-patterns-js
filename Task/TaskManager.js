import CategoryFactory from "../Category/CategoryFactory.js";
import TaskCommand from "./TaskCommand.js";
import TaskFactory from "./TaskFactory.js";
import TaskMediator from "./TaskMediator.js";

export default class TaskManager {
    categoryFactory = new CategoryFactory();

    constructor() {
        if (!TaskManager.instance) {
            this.mediator = new TaskMediator();
            TaskManager.instance = this;
        }

        return TaskManager.instance;
    }

    addTask(description) {
        const taskFactory = new TaskFactory();
        const task = taskFactory.createTask(description);

        const taskCommand = new TaskCommand(task);
        this.mediator.addCommand(taskCommand);
        this.mediator.executeCommands();
    }

    addCategory(name) {
        categoryFactory.setCategory(name);
    }
}