import { RouterContext, Status } from "../deps.ts";
import { Todo } from "../models/todo.ts";
import TodoRepository from "../models/todoRepository.ts";

export const TodoController = () => {
  const todoRepository = new TodoRepository();

  const index = (ctx: RouterContext<"/todos">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: Status.OK,
      data: todoRepository.all(),
    };
  };

  const find = (ctx: RouterContext<"/todos/:id">) => {
    ctx.response.type = "json";

    const todo = todoRepository.find(+ctx.params.id);
    if (!todo) {
      ctx.response.status = Status.NotFound;
      ctx.response.body = {
        status: Status.NotFound,
      };
    } else {
      ctx.response.status = Status.OK;
      ctx.response.body = {
        status: Status.OK,
        data: todo,
      };
    }
  };

  const add = async (ctx: RouterContext<"/todos">) => {
    const body = ctx.request.body({ type: "json" });
    const todo: Todo = await body.value as Todo;

    todoRepository.add(todo);
    ctx.response.body = {
      status: Status.OK,
    };
  };

  const remove = (ctx: RouterContext<"/todos/:id">) => {
    todoRepository.remove(+ctx.params.id);

    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: Status.OK,
    };
  };

  const done = (ctx: RouterContext<"/todos/:id">) => {
    todoRepository.done(+ctx.params.id);

    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: Status.OK,
    };
  };

  return {
    index,
    find,
    add,
    remove,
    done,
  };
};
