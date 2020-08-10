//引入模块
var Router=require('koa-router')
//实例化
var router=new Router()

//配置路由
router.get('/',async(ctx)=>{
    await ctx.render('home/home')
})
module.exports=router.routes()//返回路由启动