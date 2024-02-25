import Provider from "../Provider/Provider.js";
import TaskManager from "../Task/TaskManager.js";

export default class CategoryObserver {
    taskManager = new TaskManager();
    categoryProvider = new Provider("categories");
    pills = document.getElementById("pills");
    categoryModal = document.getElementById("category");

    update() {
        // Update the UI or perform other actions when category change.
        console.log('Category updated!');
        const categories = this.categoryProvider.get();

        this.pills.innerHTML = ``;
        categories.forEach(category => {
            this.updateItem(category);
        });

        // Add btn
        const add = document.createElement('button');
        add.innerText = `+`;
        add.classList.add("pill", "add");
        add.setAttribute("id", "add-category-btn");
        add.addEventListener("click", () => this.categoryModal.style.display = "flex");
        this.pills.appendChild(add);
    }

    updateItem(category) {
        const item = document.createElement('button');
        item.classList.add('pill');

        if (category.active) {
            item.classList.add('active');
        }

        item.innerText = `${category.name}`;

        item.addEventListener('click', () => this.handlePill(category, item));

        this.pills.appendChild(item);
    }

    handlePill(category, item) {
        const allItems = document.querySelectorAll('.pill');
        allItems.forEach((pill) => {
            pill.classList.remove('active');
        });
        const categories = this.categoryProvider.get();
        categories.forEach((categoryItem) => {
            this.categoryProvider.updateItem({ ...categoryItem, active: categoryItem.name === category.name ? true : false })
        })

        item.classList.add('active');

        this.taskManager.getTasks();
    }
}