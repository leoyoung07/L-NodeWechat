import Koa from 'koa';
import KoaStatic from 'koa-static';
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

app.use(KoaStatic(__dirname, {format: false, index: 'index.html'}));

app.use(async ctx => {
  // TODO: redirect /admin => /admin/
  ctx.type = 'text/html';
  ctx.body = '<h1>Hello, world</h1>';
});

const port = 3000;
app.listen(port);
console.log(`server listening on port ${port} ...`);
