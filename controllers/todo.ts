import { Context, Status } from "https://deno.land/x/oak/mod.ts";
import TodoRepository from "../models/todoRepository.ts";

export const TodoController = () => {
  const todoRepository = new TodoRepository();

  const index = (ctx: Context) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: Status.OK,
      data: todoRepository.all(),
    };
  };

  return {
    index,
  };
};
