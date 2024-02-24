# Singleton Pattern

Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto.

```js
// Singleton para gerenciar o estado da lista de tarefas
class TodoListManager {
  constructor() {
    if (!TodoListManager.instance) {
      this.tasks = [];
      TodoListManager.instance = this;
    }

    return TodoListManager.instance;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

// Uso do Singleton Pattern
const todoListManager1 = new TodoListManager();
const todoListManager2 = new TodoListManager();

console.log(todoListManager1 === todoListManager2); // Saída: true (mesma instância)

// Adicionando tarefas
todoListManager1.addTask('Estudar JavaScript');
todoListManager2.addTask('Fazer compras');

// Obtendo tarefas de ambas as instâncias
console.log(todoListManager1.getTasks()); // Saída: ['Estudar JavaScript', 'Fazer compras']
console.log(todoListManager2.getTasks()); // Saída: ['Estudar JavaScript', 'Fazer compras']

```