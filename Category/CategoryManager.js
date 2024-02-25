import AddCategoryCommand from "./Command/AddCategoryCommand.js";
import GetCategoryCommand from "./Command/GetCategoryCommand.js";
import GetTaskCommand from "../Task/Command/GetTaskCommand.js";
import CategoryFactory from "./CategoryFactory.js";
import Mediator from "../Mediator/Mediator.js";
import TaskManager from "../Task/TaskManager.js";

export default class CategoryManager {
    taskManager = new TaskManager();

    constructor() {
        if (!CategoryManager.instance) {
            this.mediator = new Mediator();
            CategoryManager.instance = this;
        }

        return CategoryManager.instance;
    }

    getCategories() {
        const getCategoryCommand = new GetCategoryCommand(this);
        this.mediator.addCommand(getCategoryCommand);
        const getTaskCommand = new GetTaskCommand(this.taskManager);
        this.mediator.addCommand(getTaskCommand);
        this.mediator.executeCommands();
    }

    addCategory(name) {
        const categoryFactory = new CategoryFactory();
        const category = categoryFactory.setCategory(name);

        const addCategoryCommand = new AddCategoryCommand(category);
        this.mediator.addCommand(addCategoryCommand);
        this.mediator.executeCommands();
    }
}