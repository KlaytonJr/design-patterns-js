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
}