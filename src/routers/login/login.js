//引入模块
var Router=require('koa-router')
var ParsePostData=require('../../model/common/parsepostdata')
var SendEmail=require('../../db/login/register')
//实例化
var router=new Router()

//配置路由
router.get('/', async(ctx)=>{    
     await ctx.render('login/login')
})
router.post('/getverificat', async (ctx,next) => {//采用原生的nodejs实现post请求
   let postData =JSON.parse( await ParsePostData(ctx)) ;
   let result={
      code:'200',
      data:null
   }
    try{
       
       result.data =await SendEmail(postData.userPhone)
       console.log('成功')
       result.code='200'
    }catch(err){
      console.log('失败')
      result.data=err
      result.code='500'
    }
   ctx.body=result
 })
module.exports=router.routes()//返回路由启动