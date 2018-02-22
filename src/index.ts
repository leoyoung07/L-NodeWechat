import wechat from 'co-wechat';
import Koa from 'koa';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import config from '../config/config.json';

const app: Koa = new Koa();
const router: Router = new Router();

const wechatCallback = wechat({
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
});

router.all(/\/admin.*/gi, KoaStatic(__dirname, {format: false, index: 'index.html'}));

router.all('/service/wx_callback', wechatCallback);

router.all(/\/.*/gi, ctx => {
  ctx.type = 'text/html';
  ctx.body = '<h1>Hello, world</h1>';
});

app.use(async (ctx, next) => {
  console.log(ctx.url);
  await next();
});

app.use(async (ctx, next) => {
  console.log('begin: ' + new Date().getTime());
  await next();
  console.log('end: ' + new Date().getTime());
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
app.listen(port);
console.log(`server listening on port ${port} ...`);
