
//验证码
var myCanvas=document.getElementById('myCanvas')//获取主键实例
var context = myCanvas.getContext("2d");//获取到canvas画图的环境
var canvas_width = myCanvas.clientWidth;
var canvas_height = myCanvas.clientHeight;
var initCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";//需要显示的验证码字符，自定义
var arrayCode = initCode.split(",");
var showNum=[]

function onLoadPage(){
    onInitdraw()
}

function onInitdraw(){  
    context.clearRect(0,0,canvas_width,canvas_height);//每次清空画布，重新绘制,必须步骤  
       getRandomText()//获取验证码显示的随机值
       getRandomLine()//获取验证码上的随机线条
       getRandomPoint()//获取验证码的模糊点 
    return showNum
}

function getRandomText(){
    for (var i = 0; i <=3; i++) {
        var randomIndex = Math.floor(Math.random() * arrayCode.length);//获取到随机的索引值
        showNum[i] = arrayCode[randomIndex];//得到随机的一个内容
        var deg = Math.random() * 40 * Math.PI / 180;//产生0~40之间的随机弧度     
        var x = 10 + i * 25;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 24px 微软雅黑";
        context.translate(x, y);//当再次绘图时候出现的位置
        context.rotate(deg);//倾斜当前的值
        context.fillStyle = randomColor();
        context.fillText(showNum[i] , 0, 0);
        //以下这两步是关键，恢复原来的位置和倾斜
        context.rotate(-deg);
        context.translate(-x, -y);
    }
}

function getRandomLine(){
    for (var i = 0; i <=4; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
}

function getRandomPoint(){
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}

function  randomColor() {//得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
onInitdraw()


//注册

//忘记密码

//记住密码
  function inputChange(){
     //判断是否记住密码
     let isChecked= document.getElementById('checkbox').checked
     if(isChecked){

     }
     else{

     }
  }
//登录










