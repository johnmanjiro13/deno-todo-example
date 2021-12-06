import { RouterContext, Status } from "https://deno.land/x/oak/mod.ts";
import { Todo } from "../models/todo.ts";
import TodoRepository from "../models/todoRepository.ts";

export const TodoController = () => {
  const todoRepository = new TodoRepository();

  const index = (ctx: any) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: Status.OK,
      data: todoRepository.all(),
    };
  };

  const add = async (ctx: any) => {
    const body = ctx.request.body({ type: "json" });
    const todo: Todo = await body.value as Todo;

    todoRepository.add(todo);
    ctx.response.body = {
      status: Status.OK,
    };
  };

  return {
    index,
    add,
  };
};
