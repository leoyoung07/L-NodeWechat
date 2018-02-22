import wechat from 'co-wechat';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import config from '../config/config.json';
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

app.use(async (ctx, next) => {
  if (ctx.url.indexOf('/service/wx_callback') >= 0) {
    await wechat({
      appid: config.appid,
      encodingAESKey: config.encodingAESKey,
      token: config.token
    }).middleware(async (message, context) => {
      let response = '';
      if (typeof message === 'string') {
        response = message;
      } else if (message.MsgType === 'text') {
        response = message.Content;
      } else {
        response = JSON.stringify(message);
      }
      return {
        content: response,
        type: 'text'
      };
    })(ctx, next);
  } else {
    await next();
  }
});

app.use(async ctx => {
  // TODO: redirect /admin => /admin/
  ctx.type = 'text/html';
  ctx.body = '<h1>Hello, world</h1>';
});

const port = 3000;
app.listen(port);
console.log(`server listening on port ${port} ...`);
