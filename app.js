const koa = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')

//实例化koa对象
const app = new koa()
const router = new Router()

router.get('/', async (ctx,next)=> {
  ctx.body = {msg: "Hello Koa interfaces"}
})

//链接数据库
mongoose.connect('mongodb://localhost/studentmanagement')


//配置路由
app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000 ;

app.listen(port,()=> {
  console.log(`server started on ${port}`)
})