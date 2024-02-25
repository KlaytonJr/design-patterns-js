export default class Provider {
    constructor(name) {
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
    }

    updateItem(updatedItem) {
        const existing = this.get();
        const index = existing.findIndex(item => item.id === updatedItem.id);

        if (index !== -1) {
            existing[index] = updatedItem;
            this.set(JSON.stringify(existing));
        }
    }

    deleteItem(itemId) {
        const existing = this.get();
        const updatedList = existing.filter(item => item.id !== itemId);
        this.set(JSON.stringify(updatedList));
    }
}