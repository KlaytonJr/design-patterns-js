import { generateId } from "../utils/index.js";

export class Category {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.active = true;
    }
}