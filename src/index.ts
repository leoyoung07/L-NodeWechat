import Koa from 'koa';
const app: Koa = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.url);
  await next();
});

app.use(async (ctx, next) => {
  console.log('begin: ' + new Date().getTime());
  await next();
  console.log('end: ' + new Date().getTime());
});

app.use(async ctx => {
  ctx.type = 'text/html';
  ctx.body = '<h1>Hello, world</h1>';
});

const port = 3000;
app.listen(port);
console.log(`server listening on port ${port} ...`);
