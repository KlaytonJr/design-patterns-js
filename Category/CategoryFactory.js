import { Category } from "./Category.js";

export default class CategoryFactory {
    constructor() {
      this.categories = {};
    }
  
    setCategory(name) {
      const key = name.toLowerCase();
      
      if (!this.categories[key]) {
        this.categories[key] = new Category(name);
      }
  
      return this.categories[key];
    }
  }