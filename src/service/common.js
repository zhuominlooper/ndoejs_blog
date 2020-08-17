

function ajaxPost(url,data) {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest(); //创建ajax的实例
		req.open('POST', url, true);//打开一个post请求，并且是异步
        req.setRequestHeader ("content-type", "application/x-www-form-urlencoded" );//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）       
		req.onload = function () {
		if (req.status === 200&&req.readyState == 4) { 
				resolve(req.responseText);
			} else {
				reject(req.statusText);
			} 
		};//返回readyState 状态码为4时候调用
		req.onerror = function () {
			reject(req.statusText);
		};
		req.send(JSON.stringify(data)); //发送请求
	});
}

function ajaxGet(url) {
	console.log(111,url)
	return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest(); //创建ajax的实例
        req.open('GET',url, true);//打开一个get请求，并且是异步      
		req.onload = function () {
		if (req.status === 200&&req.readyState == 4 ) { 
				resolve(req.responseText);
			} else {
				reject(new Error(req.statusText));
			} 
		};//返回readyState 状态码为4时候调用
		req.onerror = function () {
			reject(new Error(req.statusText));
		};
		req.send(); //发送请求
	});
}