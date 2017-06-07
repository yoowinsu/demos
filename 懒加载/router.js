app.get('/getData', function(req, res) {

	var products = [
		{
			img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
			name: '珂兰 黄金手 猴哥款',
			price: '￥1405.00'
		},{
			img: 'https://img10.360buyimg.com/n1/s150x150_jfs/t5701/316/1779850788/253540/d01563e/592951ffNcbac24c7.jpg',
			name: '玺爵 冰种翡翠观音吊坠男款玉观音',
			price: '￥1100.00'
		},{
			img: 'https://img13.360buyimg.com/n2/g14/M0A/00/13/rBEhV1KEgdEIAAAAAADv-pDZsGgAAFnHwEDPeUAAPAS142.jpg',
			name: '玺爵 冰种翡翠观音',
			price: '￥1145.00'
		},{
			img: 'https://img14.360buyimg.com/n2/jfs/t946/342/855432716/207368/a61f8b2a/5552b66aN5c24c5ab.jpg',
			name: '吊坠男款玉观音',
			price: '￥4015.00'
		},{
			img: 'https://img14.360buyimg.com/n2/jfs/t151/243/669882714/78475/7dd5cb05/53952d11N842d4221.jpg',
			name: '玺爵 冰种翡翠观音吊坠男款玉观音',
			price: '￥1100.00'
		},{
			img: 'https://img13.360buyimg.com/n2/jfs/t3094/364/2787440720/269203/102b9f90/57e64780N518a212e.jpg',
			name: '珂兰 黄金手链 3D猴哥款',
			price: '￥1145.00'
		},{
			img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t3805/101/3141352558/225801/21b9a6d/5878898fN3e5e3347.jpg',
			name: '玺爵 冰种翡翠观音吊坠男款玉观音',
			price: '￥1405.00'
		},{
			img: 'https://img12.360buyimg.com/n1/s150x150_jfs/t2638/105/4018868113/141083/ecf153d5/579f0dfcNd97005e0.jpg',
			name: '珂兰 吊坠男款玉观音',
			price: '￥1100.00'
		},{
			img: 'https://img13.360buyimg.com/n1/s150x150_jfs/t2731/315/3081076977/238435/739e3f6e/577e2f4aN99ab54c8.jpg',
			name: '吊坠男款玉观音',
			price: '￥425.00'
		},{
			img: 'https://img11.360buyimg.com/n1/s150x150_g13/M05/0F/0D/rBEhVFLCiHYIAAAAAADEIbo1mA0AAHetQECPu4AAMQ5235.jpg',
			name: '珂兰 黄金手 猴哥款',
			price: '￥475.00'
		},{
			img: 'https://img11.360buyimg.com/n1/s150x150_g13/M05/0F/0D/rBEhVFLCiHYIAAAAAADEIbo1mA0AAHetQECPu4AAMQ5235.jpg',
			name: '珂兰 吊坠男款玉观音',
			price: '￥1020.00'
		},{
			img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t3805/101/3141352558/225801/21b9a6d/5878898fN3e5e3347.jpg',
			name: '珂兰 黄金手链 3D猴哥款',
			price: '￥445.00'
		},{
			img: 'https://img11.360buyimg.com/n1/s150x150_jfs/t6034/213/1647604696/166901/9ca68745/5935328fNa6b427df.jpg',
			name: '珂兰 黄金手 猴哥款',
			price: '￥475.00'
		},{
			img: 'https://img11.360buyimg.com/n1/s150x150_jfs/t6034/213/1647604696/166901/9ca68745/5935328fNa6b427df.jpg',
			name: '珂兰 吊坠男款玉观音',
			price: '￥1020.00'
		},{
			img: 'https://img12.360buyimg.com/n1/s150x150_jfs/t3517/159/1363206593/72815/5beb48b1/5823d60cN5f849792.jpg',
			name: '珂兰 黄金手链 3D猴哥款',
			price: '￥445.00'
		},{
			img: 'https://img13.360buyimg.com/n1/s150x150_jfs/t3601/185/757437473/75274/47345cc6/5812bf7aNa6991853.jpg',
			name: '珂兰 黄金手 猴哥款',
			price: '￥475.00'
		},{
			img: 'https://img11.360buyimg.com/n1/s150x150_jfs/t2230/162/1776628614/81756/ffc36871/5680fa74N482cbcf2.jpg',
			name: '珂兰 吊坠男款玉观音',
			price: '￥1020.00'
		},{
			img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t5953/161/1742963313/247761/9411c164/593536f6N6e084a15.jpg',
			name: '珂兰 黄金手链 3D猴哥款',
			price: '￥445.00'
		}
	];

	var index = req.query.index;
	var len = 3;
	var data = [];
    var lastIndex = parseInt(index)+parseInt(len);

    if(lastIndex<=20){
        for(var i= index; i< lastIndex; i++){
        data.push(products[i]);
        } 
    }

    res.send(data);
});