import Provider from "../Provider/Provider.js";

export default class TaskObserver {
    taskProvider = new Provider("tasks");

    update() {
        // Update the UI or perform other actions when tasks change.
        console.log('Tasks updated!');
        const tasks = this.taskProvider.get();
        const list = document.getElementById("list");

        list.innerHTML = ``;

        tasks.forEach(task => {
            const item = document.createElement('div');
            item.classList.add('item');

            if (!task.completed) {
                item.classList.add('active');
            }
            item.innerHTML = `
                <div class="content">
                    <input  type="checkbox" id="check${task.id}">
                    <label for="check">${task.description}</label><br>
                </div>
                <div class="item-actions">
                    <!--<span class="edit" id="edit${task.id}"><i data-feather="edit"></i></span>-->
                    <span class="delete" id="delete${task.id}"><i data-feather="trash"></i></span>
                </div>
            `;

            const checkbox = item.querySelector('input[type="checkbox"]');

            checkbox.addEventListener('click', () => {
                console.log("click checkbox")
                if (checkbox.checked) {
                    const checkboxId = checkbox.id;

                    // Chama a função com o ID do checkbox
                    minhaFuncao(checkboxId);
                }
            });

            list.appendChild(item);
        });

        feather.replace();
    }

    verifyCheckbox() {
        const list = document.getElementById("list");
        const checkboxes = list.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                if (checkbox.checked) {
                    const checkboxId = checkbox.id;

                    // Chama a função com o ID do checkbox
                    minhaFuncao(checkboxId);
                }
            });
        });
    }
}