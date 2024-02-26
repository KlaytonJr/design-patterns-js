import Provider from "../../Provider/Provider.js";

export default class CommandPrototype {
    constructor(item, name) {
        this.provider = new Provider(name);
        this.item = item;
    }

    execute() { 
        // override with your code
    }
}