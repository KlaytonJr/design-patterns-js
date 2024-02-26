import { LoggingMixin } from "../Log/LoggingMixin.js";
import { generateId } from "../utils/index.js";

export default class Provider {
    constructor(name) {
        Object.assign(this, LoggingMixin);
        this.name = name; 
    }

    get() {
        return JSON.parse(localStorage.getItem(this.name)) || [];
    }
    
    set(value) {
        localStorage.setItem(this.name, value);
    }

    addItem(newItem) {
        const existing = this.get() || [];
        existing.push(newItem);
        this.set(JSON.stringify(existing));
        this.name === "tasks" && this.log(newItem, "Add");

        new Toast({
            message: 'Added successfully',
            type: 'success',
            timeout: 5000
        });
    }

    updateItem(updatedItem) {
        const existing = this.get();
        const index = existing.findIndex(item => item.id === updatedItem.id);

        if (index !== -1) {
            const oldItem = existing[index];
            existing[index] = updatedItem;
            this.set(JSON.stringify(existing));

            this.name === "tasks" && this.log({
                id: updatedItem.id,
                old: { ...oldItem },
                new: { ...updatedItem }
            }, "Update");
        }

        new Toast({
            message: 'Updated successfully',
            type: 'warning',
            timeout: 5000
        });
    }

    deleteItem(itemId, callback = () => {}) {
        const existing = this.get();
        const updatedList = existing.filter(item => item.id !== itemId);
        this.set(JSON.stringify(updatedList));
        this.name === "tasks" && this.log({ id: itemId }, "Remove");
        new Toast({
            message: "Are you sure you want to delete the task?",
            type: 'danger',
            customButtons: [
              {
                text: 'undo',
                onClick: () => {
                    this.set(JSON.stringify(existing));
                    this.name === "tasks" && this.log({ id: itemId }, "Undo");
                    callback();
                }
              }
            ],
            timeout: 5000
        });
    }

    logItem(item, verb) {
        return new Promise((resolve) => {
            const history = JSON.parse(localStorage.getItem('logs')) || [];
            history.unshift({ id: generateId(), item, date: new Date(), verb });
            localStorage.setItem('logs', JSON.stringify(history));
            resolve("finish");
        })
    }
}