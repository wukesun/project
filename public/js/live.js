/**
 * 游戏主程序 main.js
 */

//1:创建很多变量保存游戏所有角色
//1.1:创建二个变量保存画布
var can1 = null; //前面画布
//1.2:创建二个变量保存画笑声
var ctx1 = null; //前面画布对应画笔
//1.3:创建二个变量保存画布高度宽度
var canWidth = 0;
var canHeight = 0;


var lastTime = 0;
var deltaTime = 0;

var point;

//弹幕绘制对象
var pointObj = function(){
    this.list = [];
};
pointObj.prototype.appandNewMsg = function(dx,dy,msg){
    this.list.push({x:dx,y:Math.random()*dy,text:msg,speed:Math.random()+200*50});
}
pointObj.prototype.init = function(dx,dy){
    this.list.push({x:dx,y:50,text:'欢迎来到保时捷交流中心',speed:Math.random()+200*50});
};
pointObj.prototype.draw = function(){
    ctx1.save();
    ctx1.fillStyle = "#ff1822";
    ctx1.strokeStyle = 'yellow';
    ctx1.font = '18px Arial';

    for(var i=0;i<this.list.length;i++){
        ctx1.fillText(this.list[i].text,this.list[i].x--,this.list[i].y);
    }
    ctx1.restore();
};
pointObj.prototype.clearItem = function () {
    this.list.forEach((item,index,arr)=>{
        if(item.x < -1000){
            arr.splice(index,1);
            return;
        }
    })
}

//  2.1：分别调用init函数和 gameloop 函数
function game(){
   init();      //初始化游戏函数
   lastTime = Date.now();  //赋初始值上一帧执行时间
   deltaTime = 0;          //赋初始值二帧之间时间差
   gameloop();  //使用定时器绘制游戏不同角色函数
}

document.body.onload = game;

function init(){


    let $v = $('#liveVideo');
    $v.attr({
        src:"src/porsche-video.mp4",
        controls:'true',
    });
    $v.on('canplaythrough',function () {
        this.play();
    });



    //3.1:初始化画布
    can1 = document.getElementById("canvas1");
    //3.2:初始化画笔
    ctx1 = can1.getContext("2d");
    //3.3:初始化画布宽度和高度
    canWidth = can1.width;
    canHeight = can1.height;

    point = new pointObj();
    point.init(canWidth,canHeight);

   //init chat
    let socket = io.connect();

    new Vue({
        el:'#chatMain',
        methods:{
            sendMsg:function () {
                let data = {msg: this.msg};
                // if(this.chatList.length >= 5)
                //     this.chatList.shift();
                console.log(this.msg);
                // this.chatList.push(this.msg);
                this.msg = '';

                //添加新消息后滚动到最后一条消息
                console.log($('#showbox')[0].scrollHeight + 50);
                $('#showbox').scrollTop($('#showbox')[0].scrollHeight + 50);

                socket.emit('sendMsg', data);
            }
        },
        data:function () {
            return {
                msg:'',
                chatList : []
            }
        },
        created(){
            socket.on('receiveMsg', (data) => {
                console.log('receiveMsgreceiveMsg');
                this.chatList.push(data.msg);
                point.list.push({x:300,y:Math.random()*240,text:data.msg,speed:Math.random()+200*50});
                console.log(point.list);
            })
        }
    })



}

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();
//4:创建gameloop 函数:负责使用定时器绘制游戏不同角色
function gameloop(){
    //console.log(5);
    //4.1 创建智能定时器调用gameloop
    requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime; //二帧之间时间差
    lastTime = now;

    ctx1.clearRect(0,0,canWidth,canHeight);
    point.draw();

    point.clearItem();
}
//页面加载时判断用户是否登录
$(()=>{
    $.ajax({
        type:'get',
        url:'/user/isLogin',
        success(res){
            // console.log(res);
            if(res.code==1){
                $('.LoginRegi').css('display','none').siblings().css('display','block').children('.isLoginName').html('欢迎您：'+res.msg);
            }else{
                $('.LoginRegi').css('display','block').siblings().css('display','none');
            }
        }
    })
})
//评论显示区
$(()=>{
    new Vue({
        el:'#com',
        data:{
            msgList:[{name:'',comment:''}],
            pageNum:0,
            pageCount:1,
            uname:'',
            msg:'',
        },
        methods:{
            pageClick:function (page) {
                let pn = 1;
                if(page == 'pre'){
                    if(this.pageNum != 1)
                        pn = --this.pageNum;
                    else
                        return;
                }else if(page == 'next'){
                    if(this.pageNum < this.pageCount)
                        pn = ++this.pageNum;
                    else
                        return;
                }else{
                    pn = page;
                }

                //发送请求
                this.requirePage(pn);

            },
            requirePage:function (pn) {
                // console.log(this);
                var vue = this;
                $.ajax({
                    type:'get',
                    url:'/live/comments',
                    data:{pno:pn,pageSize:10},
                    success(res){
                        // console.log(this);
                        vue.msgList=res.data;
                        vue.pageNum=res.pno;
                        vue.pageCount=res.pageCount;
                    }
                })
            },
            sendMsg:function () {
                var vue = this;
                var msg = vue.msg;
                var uname = vue.uname;
                if(uname==''||uname==undefined){
                    return
                }
                $.ajax({
                    type:'get',
                    url:'/live/addComment',
                    data:{uname:uname,msg:msg},
                    success(data){
                        console.log(data);
                        if(data.code==1){
                            vue.requirePage(1);
                            vue.msg=''
                        }
                    }
                })
            },
            isLogin:function () {
                var vue = this;
                $.ajax({
                    type:'get',
                    url:'/user/isLogin',
                    success(res){
                        // console.log(res);
                        if(res.code==1){
                            $('.LoginRegi').css('display','none').siblings().css('display','block').children('.isLoginName').html('欢迎您：'+res.msg);
                            vue.uname=res.msg;
                        }
                    }
                })
            }

        },
        created(){//在渲染之前先请求数据
            this.requirePage(1);
            this.isLogin();
        }
    })
})
//登出
$('.loginOut').on('click','a',function (e) {
    e.preventDefault();
    $.ajax({
        type:'get',
        url:'/user/loginOut',
        success(res){
            console.log(res);
            if(res.code==1){
                $('.LoginRegi').css('display','block').siblings().css('display','none');
                window.location.reload();

            }
        }
    })
})




