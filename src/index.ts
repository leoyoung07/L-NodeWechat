import * as Koa from 'koa';
const app: Koa = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const port = 3000;
app.listen(port);
console.log(`server listening on port ${port} ...`);
