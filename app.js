const koa = require('koa')
const Router = require('koa-router')

//实例化koa对象
const app = new koa()
const router = new Router()

router.get('/', async (ctx,next)=> {
  ctx.body = {msg: "Hello Koa interfaces"}
})

//配置路由
app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000 ;

app.listen(port,()=> {
  console.log(`server started on ${port}`)
})