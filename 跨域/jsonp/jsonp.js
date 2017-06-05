function jsonp(opts){
	var settings={
		url:'',					//地址
		data:{},				//要发送的数据
		callBack:'callback',	//url里存储回调函数名字的变量
		fnName:'jsonp_'+new Date().getTime(),		//回调函数的名字           时间戳，每一秒钟都是不一样的
		success:function(){}		//请求成功的回调函数
	};
	
	for(var attr in opts){
		settings[attr]=opts[attr];
	}
	
	//创建一个script标签
	var script=document.createElement("script");
	script.className='sc';
	settings.data[settings.callBack]=settings.fnName;
	
	var head=document.getElementsByTagName('head')[0];
	
	
	//把要传的数据拼起来，把数组通过join('&')连接成字符串，然后赋给data
	var arr=[];			//['wd=sds','cb=jQuery1']
	for(var attr in settings.data){
		arr.push(attr+'='+settings.data[attr]);
	}
	settings.data=arr.join('&');
	script.src=settings.url+'?'+settings.data;
	
	head.appendChild(script);				//把script标签放到head里面
	
	//把回调函数挂载到window身上
	window[settings.fnName]=function(data){
		//当调用这个函数的时候，先把页面中所有的已经请求过的script删掉
		var scripts=head.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++){
			if(scripts[i].className=='sc'){
				head.removeChild(scripts[i]);
			}
		}
		
		settings.success(data);
	};
}
