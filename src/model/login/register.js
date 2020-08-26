
const USER_NAME = 1;
const USER_PWD = 2;
const USER_CONFPWD = 3;
const USER_PHONE = 4;
const USER_VERIFICAT = 5;

//请求体
let registerRequest = {
    userName: '',
    userPwd: null,
    confUserPwd: null,
    userPhone: null,
    verificatCode:null
}

//返回的验证码
let code='111'

function inputOnblur(value) {
    switch (value) {
        case USER_NAME:
            registerRequest.userName= document.getElementById('name').value
            registerRequest.userName=registerRequest.userName?registerRequest.userName.trim()?registerRequest.userName.trim():'':''
            if(!registerRequest.userName){
                document.getElementById('name').style.border='1px solid red'
            }
            else{
                document.getElementById('name').style.border='1px solid #d4d0d0'   
            }
            break
        case USER_PWD:
            registerRequest.userPwd= document.getElementById('pwd').value
            registerRequest.userPwd=registerRequest.userPwd?registerRequest.userPwd.trim()?registerRequest.userPwd.trim():'':''
            if(!registerRequest.userPwd){
                document.getElementById('pwd').style.border='1px solid red'
            }
            else{
                document.getElementById('pwd').style.border='1px solid #d4d0d0'   
            }
            break
        case USER_CONFPWD:
            registerRequest.confUserPwd= document.getElementById('confpwd').value
            registerRequest.confUserPwd=registerRequest.confUserPwd?registerRequest.confUserPwd.trim()?registerRequest.confUserPwd.trim():'':''
            if(!registerRequest.confUserPwd){
                document.getElementById('confpwd').style.border='1px solid red'
            }
            else{
                document.getElementById('confpwd').style.border='1px solid #d4d0d0'   
            }
            break
        case USER_PHONE:
            registerRequest.userPhone= document.getElementById('phone').value.toString()
            if(registerRequest.userPhone.length!==11){
                document.getElementById('phone').style.border='1px solid red'
            }
            else{
                document.getElementById('phone').style.border='1px solid #d4d0d0'   
            }
            break
        case USER_VERIFICAT:
            registerRequest.verificatCode= document.getElementById('verificat').value.toString()
            if(registerRequest.verificatCode.length!==4){
                document.getElementById('verificat').style.border='1px solid red'
            }
            else{
                document.getElementById('verificat').style.border='1px solid #d4d0d0'
            }
            break
        default:
            break
    }
}
function getVerificat() {
    if(!registerRequest.userPhone||registerRequest.userPhone.length!==11){      
        toastrWarning("请输入正确的手机号")
        return
    }
     let timeControl=60 
     document.getElementById('btn_verificat').disabled=true
     timer=setInterval(()=>{
         document.getElementById('btn_verificat').innerHTML=`${timeControl} (s)`
         timeControl--
         if(timeControl===0){
             clearInterval(timer)
             document.getElementById('btn_verificat').innerHTML="获取验证码"
             document.getElementById('btn_verificat').disabled=false
             //时间到了之后充值验证码
             code='111'
         }
     },1000)
     ajaxPost('http://localhost:3000/login/getverificat',registerRequest).then(res=>{
         let result=JSON.parse(res)
         if(result.code==='200'){
            code=result.data.toString()
            toastrSucess("验证码已经发送到您的手机")
         }else{
            clearInterval(timer)
            document.getElementById('btn_verificat').disabled=false
            document.getElementById('btn_verificat').innerHTML="获取验证码"
            toastrError("验证码发送失败:"+result.data)
         }

     }).catch(err=>{
        toastrError(err)
        
     })
}


function onRegister(){
  if(!registerRequest.userName){
    toastrWarning("请输入昵称")
    return 
  }
  if(!registerRequest.userPwd){
    toastrWarning("请输入密码")
    return 
  }
//   if(!registerRequest.confUserPwd){
//     toastrWarning("请再次输入密码")
//     return 
//   }
//   if(registerRequest.userPwd!==registerRequest.confUserPwd){
//     toastrWarning("两次输入的密码不相等，请重新输入")
//     return   
//   }
//   if(!registerRequest.userPhone||registerRequest.userPhone.length!==11){
//     toastrWarning("请输入正确的手机号码")
//     return 
//   } 
//   console.log(code)
//   if(!registerRequest.verificatCode||registerRequest.verificatCode!==code){
//     toastrWarning("请输入正确有效的验证码")
//     return 
//   }
  clearInterval(timer)
  document.getElementById('btn_verificat').disabled=true
  document.getElementById('btn_verificat').innerHTML="获取验证码"

   //向数据库插入值
   let saveRegisterRequest=JSON.parse(JSON.stringify(registerRequest))
   saveRegisterRequest=new Date()
   ajaxPost('http://localhost:3000/login/register',registerRequest).then(res=>{
       console.log(333,result)
    let result=JSON.parse(res)
       toastrSucess("注册成功")
}).catch(err=>{
   toastrError(err)  
})

}