import CategoryFactory from "../Category/CategoryFactory.js";
import AddTaskCommand from "./Command/AddTaskCommand.js";
import GetTaskCommand from "./Command/GetTaskCommand.js";
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

    getTasks() {
        const getTaskCommand = new GetTaskCommand();
        this.mediator.addCommand(getTaskCommand);
        this.mediator.executeCommands();
    }

    addTask(description) {
        const taskFactory = new TaskFactory();
        const task = taskFactory.createTask(description);

        const addTaskCommand = new AddTaskCommand(task);
        this.mediator.addCommand(addTaskCommand);
        this.mediator.executeCommands();
    }

    addCategory(name) {
        categoryFactory.setCategory(name);
    }
}