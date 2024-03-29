# Flyweight Pattern

é um padrão de projeto de software apropriado quando vários objetos devem ser manipulados em memória sendo que muitos deles possuem informações repetidas.

```js
import CategoryFactory from './CategoryFactory'

export default class Task {
    constructor(description, category) {
      this.description = description;
      this.category = category; // Referência para uma instância compartilhada de CategoryFlyweight
    }
  
    display() {
      console.log(`[${this.category.name}] ${this.description}`);
    }
}

// Uso do Flyweight Pattern
const categoryFactory = new CategoryFactory();

const workCategory = categoryFactory.getCategory('Work', 'blue');
const personalCategory = categoryFactory.getCategory('Personal', 'green');

const task1 = new Task('Complete project', workCategory);
const task2 = new Task('Buy groceries', personalCategory);

task1.display();  // Saída: [Work] Complete project
task2.display();  // Saída: [Personal] Buy groceries
```