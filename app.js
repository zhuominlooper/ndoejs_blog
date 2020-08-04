//引入模块
const Chalk = require('chalk')
console.time(Chalk.yellow('启动耗时'))
const Koa=require('koa')
const Router=require('koa-router')

//引入静态资源模块
const Static = require('koa-static');

//引入模板引擎模块
const Render=require('koa-art-template')

//引入路由模块
const AdminRouter=require('./src/routers/admin')
const HomeRouter=require('./src/routers/home')

//实例化
const app=new Koa()
const router=new Router()

//配置模板引擎
Render(app,{
    root:__dirname+'/src/views/',//视图位置
    extname:'.html',//后缀名
    debug:process.env.NODE_ENV==='development'
})

//处理静态文件
console.log(111,__dirname)
app.use(Static(__dirname+'/src/static/'));

//配置一级路由
router.use('/home',AdminRouter)//配置admin模块路由
router.use('/admin',HomeRouter)//配置news模块路由

//配置信息
app.use(router.routes()).use(router.allowedMethods())

//监听端口
console.log(Chalk.red('nodejs服务器启动成功'))

//设置80端口，让浏览器使用默认80端口可以省略
app.listen(80)
console.timeEnd(Chalk.yellow('启动耗时'))