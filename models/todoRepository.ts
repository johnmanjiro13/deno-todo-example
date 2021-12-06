import { Todo } from "./todo.ts";

export default class TodoRepository {
  private todos: Map<number, Todo>;

  constructor() {
    this.todos = new Map<number, Todo>();
  }

  all() {
    return Array.from(this.todos.values());
  }

  find(id: number) {
    return this.todos.get(id);
  }

  add(todo: Todo) {
    if (this.todos.size == 0) {
      this.todos.set(1, todo);
      console.log(this.todos);
      return;
    }

    const id = Array.from(this.todos.keys()).reduce((prev, current) => {
      return (prev > current) ? prev : current;
    });
    this.todos.set(id, todo);
  }

  delete() {}
}
