import { Todo } from "./todo.ts";

export default class TodoRepository {
  private todos: Map<number, Todo>;

  constructor() {
    this.todos = new Map<number, Todo>();
  }

  all() {
    return this.todos;
  }

  find(id: number) {
    return this.todos.get(id);
  }

  create() {}

  update() {}

  delete() {}
}
