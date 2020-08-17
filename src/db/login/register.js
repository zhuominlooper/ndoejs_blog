var https = require('https');
var qs = require('querystring');
var apikey = 'e279a911806779698c61ffbe6129a86e';
var mobile = '';
var radomNum=''
//例子：var text = '【天天测试】感谢您的注册，您的验证码是'+verCode;
//verCode测试的时候可以直接写个数字

//这里我们不需要自定义模板和语音验证，国际和国内请求的短信验证是同一个url
//嫌麻烦的话这里可以直接定义为一个url
var sms_host = 'sms.yunpian.com';  //请求地址的url
send_sms_uri = '/v2/sms/single_send.json';  //请求地址的url

function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}
 function post(uri,content,host){  
    var options = {  
        hostname: host,
        port: 443,  
        path: uri,  
        method: 'POST',  
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
        }  
    };
    return new Promise((resolve,reject)=>{
        try{
            const req = https.request(options, function (res) {  
                res.setEncoding('utf8');  
                res.on('data', function (chunk) {  
                      let result=JSON.parse(chunk)
                      console.log('result',result)
                      if(result.msg!=="发送成功"){
                        reject(result.msg)
                      }
                      else{
                        resolve(radomNum) 
                      }              
                }) 
            })     
            req.write(content);  
            req.end();      
        }
        catch(err){
            reject(err)
        }
    })
}

module.exports=async function (mobile){
    radomNum=getRandom(1000,9999)
    var post_data = {  
    'apikey': apikey,  
    'mobile':mobile,
    'text':`【卓敏】您的验证码是${radomNum}。如非本人操作，请忽略本短信`,
    }; 
    console.log(post_data)
    var content = qs.stringify(post_data);  
    //把发送的数据解析为字符串发送
    return await post(send_sms_uri,content,sms_host);
}