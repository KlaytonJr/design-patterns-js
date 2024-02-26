# Design Patterns

[X] Command Pattern
[X] Factory Pattern
[X] Flyweight Pattern
[X] Mediator/Middleware Pattern
[X] Mixin Pattern
[X] Module Pattern
[X] Observer Pattern
[X] Prototype Pattern
[X] Provider Pattern
[X] Proxy Pattern
[X] Singleton Pattern
[X] Static Import

All in one

```js
// Command Pattern
class AddTaskCommand {
    constructor(task) {
        this.task = task;
    }

    execute() {
        tasks.push(this.task);
    }
}

// Factory Pattern
class TaskFactory {
    createTask(description) {
        return { id: generateId(), description, completed: false };
    }
}

// Flyweight Pattern
// Not applicable for this scenario.

// Mediator/Middleware Pattern
class TaskMediator {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        this.commands.forEach(command => command.execute());
        this.commands = [];
    }
}

// Mixin Pattern
const LoggingMixin = {
    log(message) {
        console.log(message);
    }
};

// Module Pattern
// Not explicitly shown in this example.

// Observer Pattern
class TaskObserver {
    update() {
        // Update the UI or perform other actions when tasks change.
        console.log('Tasks updated!');
    }
}

// Prototype Pattern
// Not explicitly shown in this example.

// Provider Pattern
class TaskProvider {
    static getTasks() {
        return tasks;
    }
}

// Proxy Pattern
class TaskProxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    getTasks() {
        // Perform additional logic if needed before returning tasks.
        return this.realSubject.getTasks();
    }
}

// Singleton Pattern
class TaskManager {
    constructor() {
        if (!TaskManager.instance) {
            this.mediator = new TaskMediator();
            TaskManager.instance = this;
        }

        return TaskManager.instance;
    }

    addTask(description) {
        const taskFactory = new TaskFactory();
        const task = taskFactory.createTask(description);

        const addTaskCommand = new AddTaskCommand(task);
        this.mediator.addCommand(addTaskCommand);
        this.mediator.executeCommands();
    }
}

// Static Import
// Not explicitly shown in this example.

// Helper function to generate unique IDs
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Initial data
const tasks = [];

// Instantiate Task Manager
const taskManager = new TaskManager();

// UI rendering function
function renderTasks() {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('todo-item');
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.textContent = task.description;

        // Add click event to toggle completion status
        taskElement.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        appElement.appendChild(taskElement);
    });
}

// Example of how to add a task using the Task Manager
taskManager.addTask('Complete Design Patterns project');

// Example of how to get tasks using the Task Proxy
const taskProxy = new TaskProxy(TaskProvider);
const tasksList = taskProxy.getTasks();

// Example of how to use the Logging Mixin
class Logger {
    // Use the LoggingMixin to add logging capabilities
    constructor() {
        Object.assign(this, LoggingMixin);
    }
}

const logger = new Logger();
logger.log('Logging example');

// Render initial tasks
renderTasks();
```