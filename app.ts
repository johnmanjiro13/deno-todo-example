import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

app.use(async (ctx, next) => {
  await next();
  console.log(`${ctx.request.method}: ${ctx.request.url.pathname}`);
});

router
  .get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  });

app.use(router.routes());

await app.listen({ port: 8080 });
