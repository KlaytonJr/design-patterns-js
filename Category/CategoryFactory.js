import { Category } from "./Category";

export default class CategoryFactory {
    constructor() {
      this.categories = {};
    }
  
    getCategory(name) {
      const key = name.toLowerCase();
      
      if (!this.categories[key]) {
        this.categories[key] = new Category(name);
      }
  
      return this.categories[key];
    }
  }