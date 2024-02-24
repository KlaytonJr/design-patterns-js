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