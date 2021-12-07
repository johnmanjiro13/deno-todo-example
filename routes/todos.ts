import { Router } from "https://deno.land/x/oak/mod.ts";
import { TodoController } from "../controllers/todo.ts";

const router = new Router();
const todoController = TodoController();

router
  .get("/todos", todoController.index)
  .get("/todos/:id", todoController.find)
  .post("/todos", todoController.add)
  .delete("/todos/:id", todoController.remove);

export default router;
