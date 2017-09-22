//$img是真实的几张图，固定值
var $img = $('.imgs li'),
    $images = $('.imgs'),
    imgCount = $img.length,
    imgWidth = $img.width(),
    $bullet = $('.bullet li');

var isAnimate = false;
var	currentIndex = 0;

$images.width(imgCount*imgWidth)

//鼠标移入渐变停止
$images.on('mouseover',function(){
    stopAutoPlay()
})
//鼠标移出渐变动画开始
$images.on('mouseleave',function(){
    autoPlay()
})
$bullet.on('click',function(){
    var index = $(this).index();
    play(index);
})
autoPlay(0)
function playNext(){
    //当前currentIndex是最后一张图的序号的话，传值是0
    play((currentIndex+1)%imgCount)
}
function playPre(){
    //当前currentIndex是0的话，传值最后一张图的序号
    play((imgCount+currentIndex-1)%imgCount)
}
function play(index){
    if(isAnimate){
        return
    }
    //要在动画结束前加锁
    isAnimate = true
    $img.eq(currentIndex).fadeOut(300);
    //动画完成后执行解锁
    $img.eq(index).fadeIn(300,function(){
        isAnimate = false
    });
    currentIndex = index;
    bullet()
}
function autoPlay(){
    clock = setInterval(function(){
        playNext()
    },3000)
}
function stopAutoPlay(){
    clearInterval(clock)
}
function bullet(){
    $bullet.removeClass('active').eq(currentIndex).addClass('active')
}


$(".six-design-wrap li").bind("mouseenter mouseleave",
    function(e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        //var eventType = e.type;
        var dirName = new Array('top','right','bottom','left');

        if(e.type == 'mouseenter'){
            $(this).find('.img-box').attr('class','img-box enter-'+dirName[direction]);
            console.log($('#header .nav').height())
        }else{
            $(this).find('.img-box').attr('class','img-box leave-'+dirName[direction]);
        }
    })

//返回顶部
$("#header .back-top").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$(window).scroll(function() {
    if($(window).scrollTop() >= 672){
        $("#header .back-top").show()

    }else{
        $("#header .back-top").hide()
    }
});

//导航锚点
var navList = $('#header .nav-list li')
var sections = $('section')

navList.click(function(){
    var index = $(this).index()
    $("html,body").animate({scrollTop: $("#"+sections[index].id).offset().top}, 1000);
})

//submit
$('input[type="submit"]').click(function(e){
    e.preventDefault();
})