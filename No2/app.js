const koa = require('koa');
const app = new koa();
const router = require('koa-simple-router');
const convert = require('koa-convert');
const serve = require('koa-static');
const path  = require('path');
const render = require('koa-swig');
const co = require('co');
const axios = require('axios');
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  varControls:['[[',']]'],
  writeBody:true
}));
app.use(router(_ => {
    _.get('/', (ctx, next) => {
    });
    //需要变为 async 函数
    _.get('/index', async (ctx, next) => {
        ctx.body = await ctx.render('index.html')
    });
    _.get('/thumb', async(ctx,next)=>{
         ctx.body = await ctx.render('thumb.html')
    })
}));
app.use(convert(serve(path.join(__dirname,'./public'))))
app.listen(3000);