/**
 * Created by web-01 on 2018/3/28.
 */

$(()=>{
    //轮播生成代码
    // 图片
    var imgs = ["img/banner/banner1.jpg","img/banner/banner2.jpg","img/banner/banner3.jpg","img/banner/banner4.jpg"];
    //z-index的值
    var z = 999;
    //显示第几张图片
    var index = 0;
    var $box = $('#box');

    var $preParentNode = null,
        $parentNode = null;

    var timer = 0;
//		boom(10,10);
    //l 传进来几行；t传进来几列;
    function createBoomImg(l,t) {
        var $parentNode = $('<div></div>');
        $parentNode.css('zIndex',z);
        z--;
        $parentNode.appendTo($box);

        var x = l,y = t;

        var dx = Math.round($box[0].clientWidth / x - 1);
        var lastDx = $box[0].clientWidth - dx*(x-1);
        var dy = Math.round($box[0].clientHeight / y - 1);
        var lastDy = $box[0].clientHeight - dy*(y-1);

        var dWidth = dx,
            dHeight = dy;
        var	posX = 0,
            posY = 0;

        for(var i = 0; i < y;i++){
            if(i == 0){
                dHeight = lastDy;
                posY = 0;
            }else{
                dHeight = dy;
                posY = -dy*(i - 1) - lastDy;
            }

            for(var j = 0;j<x;j++){
                if(j == 0){
                    dWidth = lastDx;
                    posX = 0;
                }else{
                    dWidth = dx;
                    posX = -dx*(j - 1) - lastDx;
                }
                //创建碎片
                var $oDiv = $('<div></div>');
                //添加背景图片
                $oDiv.css({
                    'background':"url("+imgs[index]+")",
                    'backgroundSize':`${$box.css('clientWidth')}px ${$box.css('clientHeight')}px`,
                    'width':dWidth + 'px',
                    'height':dHeight + 'px',
                    'left':dWidth * j +'px',
                    'top':dHeight * i +'px',
                    'backgroundPositionX':posX + 'px',
                    'backgroundPositionY':posY + 'px',
                    'transition':(Math.random()*1+0.5)+"s"
                });

                $oDiv.appendTo($parentNode);
            }
        };
        return $parentNode;
    }

    function goNext() {
        index++;
        index == imgs.length && (index = 0);

        $preParentNode = $parentNode;
        $parentNode = createBoomImg(10,10);

        var c = $preParentNode.children();
        for(var i= 0;i < c.length;i++){
            c[i].style.transform = 'perspective(800px) rotateX('+ (Math.random()*500-250)+'deg) rotateY('+(Math.random()*500-250)+'deg) translateX('+(Math.random()*500-250)+'px) translateY('+(Math.random()*500-250)+'px) translateZ('+(Math.random()*1000-500)+'px)';
            c[i].style.opacity = 0;
        };

        setTimeout(function(){
            $preParentNode.remove();
        },1500);
    }

    function runBanner() {
        return setInterval(()=>{
            goNext()
        },3000);
    }

    $parentNode = createBoomImg(10,10);
    timer = runBanner();

    $box.hover(
        function (e) {
            e.preventDefault();
            clearInterval(timer);
        },
        function (e) {
            e.preventDefault();
            timer = runBanner();
        },
    )
})