import { generateId } from "../utils/index.js";

export default class TaskFactory {
    createTask(description, category = undefined) {
        return { id: generateId(), description, completed: false, category };
    }
}