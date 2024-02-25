import { generateId } from "../utils/index.js";

export default class TaskFactory {
    createTask(description) {
        return { id: generateId(), description, completed: false };
    }
}