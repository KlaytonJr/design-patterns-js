import Provider from "../Provider/Provider.js";
import { generateId } from "../utils/index.js";

export default class TaskFactory {
    categoryProvider = new Provider("categories");

    createTask(description) {
        const categories = this.categoryProvider.get();
        const categoryFinded = categories.find((category) => category.active === true);
        return { id: generateId(), description, completed: false, category: categoryFinded.name };
    }
}