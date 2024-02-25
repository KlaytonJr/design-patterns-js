import Provider from "../../Provider/Provider.js";
import CategoryObserver from "../CategoryObserver.js";

export default class AddCategoryCommand {
    categoryProvider = new Provider("categories");
    categoryObserver = new CategoryObserver();

    constructor(category) {
        this.category = category;
    }

    execute() { 
        console.log("execute categoryCommand")
        console.log(this.category);
        // set all active to false
        const categories = this.categoryProvider.get();
        categories.forEach((categoryItem) => this.categoryProvider.updateItem({ ...categoryItem, active: false }));
        
        this.categoryProvider.addItem(this.category);

        this.categoryObserver.update();
    }
}