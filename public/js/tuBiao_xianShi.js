$(document).ready(
    function () {
        $("div.img_XFont>div.tuBiao>div.img_guoDong").hide();//打开页面隐藏下拉列表
        $("div.img_XFont>div.tuBiao>div").hover(//鼠标滑过导航栏时
            function () {
                $("div.img_XFont>div.tuBiao>div.img_guoDong").show();//显示下拉列表
                $(this).css({'background-color':'#313639'});//设置导航栏目样式，醒目
                $("#span_color>span").css({'border-bottom':'6px solid #950014'});
                $("div.img_XFont>div.tuBiao>div.img_guoDong>div>p:first-child").css({'background-color':'#950014'});
            },
            function () {
                $("div.img_XFont>div.tuBiao>div.img_guoDong").hide();//鼠标移开后隐藏下拉列表
                $("#span_color>span").css({'border-bottom':'6px solid #fff'});
                $(this).css({'background-color':'#950014'});
            }
        );
        $("div.img_XFont>div.tuBiao>div.img_guoDong").hover(//鼠标滑过下拉列表自身也要显示，防止无法点击下拉列表
            function () {
                $("div.img_XFont>div.tuBiao>div.img_guoDong").show();
                $("div.img_XFont>div.tuBiao>div").css({'background-color':'#313639'});
            },
            function () {
                $("div.img_XFont>div.tuBiao>div.img_guoDong").hide();
                //$("div.img_XFont>div.tuBiao>div").css({'background-color':'#950014'});//鼠标移开下拉列表后，导航栏目的样式也清楚

            }
        );
        $("div.img_XFont>div.tuBiao>div.img_guoDong>div>p:nth-child(2)").hover(
            function () {
                $(this).css({'background-color':'#950014'});
            },
            function () {
                $(this).css({'background-color':'#313639'});

            }
        );
        $("div.img_XFont>div.tuBiao>div.img_guoDong>div>p:nth-child(3)").hover(
            function () {
                $(this).css({'background-color':'#950014'});
            },
            function () {
                $(this).css({'background-color':'#313639'});
            }
        );
        $("div.img_XFont>div.tuBiao>div.img_guoDong>div>p:nth-child(4)").hover(
            function () {
                $(this).css({'background-color':'#950014'});
            },
            function () {
                $(this).css({'background-color':'#313639'});
            }
        );
    }
);
//字体的改变

$(document).ready(
    $("div.img_font_four>div:first-child").hover(
        function () {
            $("div.img_font_four>div:first-child div.four_i").css({'color':'red'});
        },
        function () {
            $("div.img_font_four>div:first-child div.four_i").css({'color':'#fff'});
        }
    ));
$(document).ready(
    $("div.img_font_four>div:nth-child(2)").hover(
        function () {
            $("div.img_font_four>div:nth-child(2) div.four_i").css({'color':'red'});
        },
        function () {
            $("div.img_font_four>div:nth-child(2) div.four_i").css({'color':'#fff'});
        }
    ));
$(document).ready(
    $("div.img_font_four>div:nth-child(3)").hover(
        function () {
            $("div.img_font_four>div:nth-child(3) div.four_i").css({'color':'red'});
        },
        function () {
            $("div.img_font_four>div:nth-child(3) div.four_i").css({'color':'#fff'});
        }
    ));
//index页面中footer部分字体的改变
$(document).ready(
    function () {
        $("div.find_more>div:first-child>img").hover(
            function () {
                $("#font1").css({'color':'red'});
                $("#font1>i").attr({'class':'underline_style'})
            },
            function () {
                $("#font1").css({'color':'#000'});
                $("#font1>i").removeClass("underline_style")
            }
        );
        $("div.find_more>#img1>img").hover(
            function () {
                $("#font2").css({'color':'red'});
                $("#font2>i").attr({'class':'underline_style'})
            },
            function () {
                $("#font2").css({'color':'#000'});
                $("#font2>i").removeClass("underline_style")
            }
        );
        $("div.find_more>#img2>img").hover(
            function () {
                $("#font3").css({'color':'red'});
                $("#font3>i").attr({'class':'underline_style'})
            },
            function () {
                $("#font3").css({'color':'#000'});
                $("#font3>i").removeClass("underline_style")
            }
        );
        $("div.find_more>#img3>img").hover(
            function () {
                $("#font4").css({'color':'red'});
                $("#font4>i").attr({'class':'underline_style'})
            },
            function () {
                $("#font4").css({'color':'#000'});
                $("#font4>i").removeClass("underline_style")
            }
        )
    }
);
///*<!--工具与服务-->*/
$(document).ready(
    function () {
        $("div.tool_serve>div>div:first-child>img").hover(
            function () {
                $("div.tool_serve>div>div:first-child>p").css({'color':'red'});
            },
            function () {
                $("div.tool_serve>div>div:first-child>p").css({'color':'#fff'})
            }
        );

        $("div.tool_serve>div>div:nth-child(2)>img").hover(
            function () {
                $("div.tool_serve>div>div:nth-child(2)>p").css({'color':'red'});
            },
            function () {
                $("div.tool_serve>div>div:nth-child(2)>p").css({'color':'#fff'});
            }
        );
        $("div.tool_serve>div>div:nth-child(3)>img").hover(
            function () {
                $("div.tool_serve>div>div:nth-child(3)>p").css({'color':'red'});
            },
            function () {
                $("div.tool_serve>div>div:nth-child(3)>p").css({'color':'#fff'});
            }
        );
        $("div.tool_serve>div>div:last-child>img").hover(
            function () {
                $("div.tool_serve>div>div:last-child>p").css({'color':'red'});
            },
            function () {
                $("div.tool_serve>div>div:last-child>p").css({'color':'#fff'});
            }
        );
    }
)
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>=500){
        $("#wrap .item3 img").css({"display":"block"});
        $("#wrap .item3 img").addClass("test");
        $("#wrap .item3 img").css({"top":"0"});
    }
    if(scrollTop<1500){
        $("div.tool_serve>div>div>p>b").css({"display":"none"});
        $("div.tool_serve>div>div>p").css({"display":"none"});


    }
    if(scrollTop>=1500){
        $("#load,#load1,#load2,#load3").css({"display":"block"});
        $("#load,#load1,#load2,#load3").addClass("test2");
        $("#load,#load1,#load2,#load3").css({"margin-top":"0"});
        $("div.tool_serve>div>div>p>b").css({"display":"inline-block"});
        $("div.tool_serve>div>div>p").css({"display":"block"});

    }
    if(scrollTop>=1500){
        // console.log("你好2");
        $("#load4,#load5,#load6,#load7").css({"display":"block"});
        $("#load4,#load5,#load6,#load7").addClass("test2");
        $("#load4,#load5,#load6,#load7").css({"margin-top":"0"});

    }
}
// 所有车
$(function(){
    $(".item3").hover(
        function(){
            var that=this;
            item3Timer=setTimeout(function(){
                $(that).find("div").animate({width:148,height:148},300,function(){
                    $(that).find("h2").fadeOut(200);
                    $(that).find("dl").fadeIn(200);
                });
            },100);

        },
        function(){
            var that=this;
            clearTimeout(item3Timer);
            $(that).find("dl").fadeOut(200);
            $(that).find("div").stop().animate({width:0,height:0},300);
            $(that).find("h2").fadeIn(200);
        }
    )
});
//轮播图
$("button.btn-left").css("display","none");
var ww=$(window).width();
var iw=$(".car-box>.cai-con>a>img").width();
var moved=0;
var LIWIDTH=1804,moved=0,interval=500,wait=4000,timer=null;
var $ul=$("[data-load=bannerImgs]");
var $btn=$("[data-load=bannerImgs]");
var $ulIdx=$("[data-load=bannerInds]");
var $div=$(".car-box>.cai-con");
function liCreate(){
    var ww=$(window).width();
    //生成小圆点
    if (ww>991)
        $ulIdx.html("<li></li>".repeat(3))
            .children().first().addClass("slick-active");
    else if (ww>=768 && ww<=991)
        $ulIdx.html("<li></li>".repeat(4))
            .children().first().addClass("slick-active");
    else if (ww<768)
        $ulIdx.html("<li></li>".repeat(5))
            .children().first().addClass("slick-active");
}
liCreate();
$(window).resize(liCreate);
//函数
function move(dir=1){

    moved += dir;
    console.log(moved);
    if(moved == 0){
        $("button.btn-left").css("display","none");
    }
    else{
        $("button.btn-left").css("display","block");
    }
    if(moved == 2){
        $("button.btn-right").css("display","none");
    }
    else{
        $("button.btn-right").css("display","block");
    }

    $(".car-box>.cai-con").animate({
        left:-iw*moved
    },interval,function(){
        if(moved==0 ) {//data.length
            moved = 0;
            $div.css("left", 0);
        }
    });
}
//小圆点单击事件
$ulIdx.on("click","li:not(.hover)",function(){
    var i=$(this).index();
    moved=i;
    if(moved == 0){
        $("button.btn-left").css("display","none");
    }
    else{
        $("button.btn-left").css("display","block");
    }
    if(moved == 2){
        $("button.btn-right").css("display","none");
    }
    else{
        $("button.btn-right").css("display","block");
    }

    $div.stop(true).animate({
        left:-iw*moved
    },interval,function(){
        $ulIdx.children(":eq("+moved+")").addClass("slick-active")
            .siblings().removeClass("slick-active");
    })
})
//左右箭头点击事件
$("button.btn-right").click(function () {

    if(!$ul.is(":animated")){
        move();
        $ulIdx.children(":eq("+moved+")").addClass("slick-active")
            .siblings().removeClass("slick-active");
    }
})
$("button.btn-left").click(function () {

    if(!$ul.is(":animated")){
        move(-1);
        $ulIdx.children(":eq("+moved+")").addClass("slick-active")
            .siblings().removeClass("slick-active");
    }
})