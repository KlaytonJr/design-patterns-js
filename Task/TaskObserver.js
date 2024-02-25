import Provider from "../Provider/Provider.js";

export default class TaskObserver {
    taskProvider = new Provider("tasks");
    categoryProvider = new Provider("categories");
    list = document.getElementById("list");

    update() {
        // Update the UI or perform other actions when tasks change.
        const tasks = this.taskProvider.get();

        const categories = this.categoryProvider.get();
        const categoryActive = categories.find((category) => category.active === true);

        list.innerHTML = ``;
        tasks.forEach(task => {
            task.category === categoryActive.name && this.updateItem(task);
        });

        feather.replace();
    }

    updateItem(task) {
        const item = document.createElement('div');
        item.classList.add('item');

        if (!task.completed) {
            item.classList.add('active');
        }
        item.innerHTML = `
            <div class="content">
                <input  type="checkbox" id="check${task.id}" ${task.completed && "checked"} />
                <label for="check">${task.description}</label><br>
            </div>
            <div class="item-actions">
                <!--<span class="edit" id="edit${task.id}"><i data-feather="edit"></i></span>-->
                <span class="delete" id="delete${task.id}"><i data-feather="trash"></i></span>
            </div>
        `;

        const checkbox = item.querySelector('input[type="checkbox"]');

        checkbox.addEventListener('click', () => {
            this.taskProvider.updateItem({ ...task, completed: checkbox.checked});
            this.update();
        });

        const deleteBtn = item.querySelector('span.delete');

        deleteBtn.addEventListener('click', () => {
            this.taskProvider.deleteItem(task.id, () => this.update());
            this.update();
        });

        list.appendChild(item);
    }
}