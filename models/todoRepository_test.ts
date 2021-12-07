import { assertEquals } from "../deps.ts";
import { Todo } from "./todo.ts";
import TodoRepository from "./todoRepository.ts";

const { test } = Deno;

test({
  name: "all",
  fn() {
    const repo = new TodoRepository();
    (repo as any).todos = new Map<number, Todo>(
      [
        [1, { title: "test 1", isDone: false }],
        [2, { title: "test 2", isDone: true }],
      ],
    );

    const expected: Todo[] = [
      { title: "test 1", isDone: false },
      { title: "test 2", isDone: true },
    ];
    assertEquals(repo.all(), expected);
  },
});

test({
  name: "find",
  fn() {
    const repo = new TodoRepository();
    (repo as any).todos = new Map<number, Todo>(
      [
        [1, { title: "test 1", isDone: false }],
      ],
    );

    assertEquals(repo.find(1), { title: "test 1", isDone: false });
    assertEquals(repo.find(2), undefined);
  },
});

test({
  name: "add",
  fn() {
    const repo = new TodoRepository();
    assertEquals((repo as any).todos, [], "initial check");

    repo.add({ title: "test", isDone: false });

    const expected = new Map<number, Todo>(
      [
        [1, { title: "test", isDone: false }],
      ],
    );
    assertEquals((repo as any).todos, expected);
  },
});

test({
  name: "remove",
  fn() {
    const repo = new TodoRepository();
    (repo as any).todos = new Map<number, Todo>(
      [
        [1, { title: "test 1", isDone: false }],
        [2, { title: "test 2", isDone: true }],
      ],
    );

    repo.remove(2);
    const expected = new Map<number, Todo>(
      [
        [1, { title: "test 1", isDone: false }],
      ],
    );
    assertEquals((repo as any).todos, expected);
  },
});

test({
  name: "done",
  fn() {
    const repo = new TodoRepository();
    (repo as any).todos = new Map<number, Todo>(
      [
        [1, { title: "test", isDone: false }],
      ],
    );

    repo.done(1);
    const expected = new Map<number, Todo>(
      [
        [1, { title: "test", isDone: true }],
      ],
    );
    assertEquals((repo as any).todos, expected);
  },
});
