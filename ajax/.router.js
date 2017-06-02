function setRouter(app){ 
 var router = app; 

// 服务端 router.js



app.get('/loadMore', function(req, res){

    var news = ["小范甘迪看好勇士建王朝 他们连续8年进总决赛",
        "詹皇入选ESPN百大知名运动员 宁泽涛马龙均入围",
        "尼克斯兜售甜瓜新选项曝光 禅师瞄准活塞12号签",
        "最篮点：骑勇第三年交锋！总决赛观察+专家预测",
        "徐济成暗示总决赛绝杀？ 央名嘴：四铁锁斗詹皇",
        "杜少前队友力挺骑士夺冠 莱利看轻詹皇不送祝福",
        "媒体专家多数看好骑士 ESPN一边倒预测引发争论",
        "勇士前方：前两战很关键 金州4-1骑士拿总冠军",
        "骑士前方:相信克利夫兰卫冕成功 预测总比分4-2",
        "皮蓬称库里不具有统治力 真理批杜兰特加盟勇士",
        "布朗恢复+纳什现身 勇士16连胜夺冠?KD摇了摇头",
        "詹皇透露野心:希望退役后成为1支NBA球队老板！",
        "富尔茨和绿军总裁已聊过几次 期待成为今年状元",
        "步行者侧翼试水自由市场 今夏将追求一份大合同",
        "马刺内线铁闸跳出合同 场均5+6能拿多大合同？",
        "科尔：惊讶勇士夺冠更被看好 格林已会控制情绪",
        "新疆董事长：管理曾是伪专业 10年内球队本土化",
        "晋媒:福建与范斌新约最少2年 球队盼严师出高徒",
        "邹雨宸选秀排名首进前百 赴美之行或助排名再涨",
        "男篮亚洲杯赛制沿用亚锦赛 小组前三晋级打复赛"]

    var index = req.query.index;
    var len = req.query.length;
    var data = [];
    var lastIndex = parseInt(index)+parseInt(len);

    if(lastIndex<=20){
        for(var i= index; i< lastIndex; i++){
        data.push(news[i]);
        } 
    }

    res.send(data);

})
}
 module.exports.setRouter = setRouter