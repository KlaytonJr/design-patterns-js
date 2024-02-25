import AddCategoryCommand from "./Command/AddCategoryCommand.js";
import GetCategoryCommand from "./Command/GetCategoryCommand.js";
import CategoryFactory from "./CategoryFactory.js";
import Mediator from "../Mediator/Mediator.js";

export default class CategoryManager {

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