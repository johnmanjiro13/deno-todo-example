import { Router } from "https://deno.land/x/oak/mod.ts";
import { TodoController } from "../controllers/todo.ts";

const router = new Router();
const todoController = TodoController();

router
  .get("/todos", todoController.index)
  .post("/todos", todoController.add);

export default router;
