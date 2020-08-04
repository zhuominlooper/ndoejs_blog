//引入模块
var Router=require('koa-router')
//实例化
var router=new Router()

//配置路由
router.get('/',async(ctx)=>{
      ctx.body='这是博客管理页面'//向浏览器返回数据
})
module.exports=router.routes()//返回路由启动