import Provider from "../../Provider/Provider.js";
import CategoryObserver from "../CategoryObserver.js";

export default class GetCategoryCommand {
    categoryProvider = new Provider("categories");
    categoryObserver = new CategoryObserver();

    constructor(categoryManager) {
        this.categoryManager = categoryManager;
    }

    execute() { 
        const categoryModal = document.getElementById("category");

        const cancelCategoryModalBtn = document.getElementById("cancel-modal-btn");
        const addCategoryModalBtn = document.getElementById("add-modal-btn");
        const CategoryModalInput = document.getElementById("modal-input");

        cancelCategoryModalBtn.addEventListener("click", () => categoryModal.style.display = "none");
        addCategoryModalBtn.addEventListener("click", () => {
            this.categoryManager.addCategory(CategoryModalInput.value);
            categoryModal.style.display = "none";
        });

        this.categoryObserver.update();
    }
}