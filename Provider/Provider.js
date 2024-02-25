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
    }

    deleteItem(itemId) {
        const existing = this.get();
        const updatedList = existing.filter(item => item.id !== itemId);
        this.set(JSON.stringify(updatedList));
        this.name === "tasks" && this.log({ id: itemId }, "Remove");
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