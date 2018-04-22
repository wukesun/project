
$(()=>{
    $('.accordion').on('click','.title',function(){
        var $title=$(this);
        if($title.next().is(':not(.in)')){
            $title.next().addClass('in').siblings('.content').removeClass('in');
            $title.removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
            $title.siblings('.title').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right')
        }else {
            $title.next().removeClass('in');
            $title.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right')
        }
    })

    $('.img-1').on('click',function () {
        $(this).toggleClass('max')
    })
    $('.img-2').on('click',function () {
        $(this).toggleClass('max')
    })
//        音效图片暂停播放
    $('.vidio1').click(function() {
        var audio = $(this).next()[0];
        console.log(audio);
        if ($(this).attr('class') == 'vidio1 glyphicon glyphicon-play') {
            $(this).removeClass('glyphicon-play').addClass('glyphicon-pause');
            audio.play();
        } else {
            $(this).removeClass('glyphicon-pause').addClass('glyphicon-play');
            audio.pause();
        }
    })
//        音效模板显示
    $('.Music').on('click',function(e){
        e.preventDefault();
//            console.log($('.media-music').siblings());
        $('.media-music').siblings().css('display','none');
        $('.media-music').css('display','block');
        $('.Img').css('background','#313639');
        $('.Music').css('background','#d5001c');
    })
//        图片模板显示
    $('.Img').on('click',function (e) {
        e.preventDefault();
        $('.media-img').siblings().css('display','none');
        $('.media-img').css('display','block');

        $('.Img').css('background','#d5001c');
        $('.Music').css('background','#313639');
    })



//车样式的轮播变化

    var cartCarCount = 0;
    $('.cartChangeLeft').click(function () {
        cartCarCount--;
        if(cartCarCount<0)cartCarCount=5;
        cartChangeTab();
    });
    $('.cartChangeRight').click(function () {
        cartCarCount++;
        if(cartCarCount>5)cartCarCount=0;
        cartChangeTab();
    });

    function cartChangeTab() {
        $('.paginationVis2d').children(`span:nth-child(${cartCarCount+1})`).addClass('active').siblings().removeClass('active');
        $('.changeImg').children(`img:nth-child(${cartCarCount+1})`).addClass('active').siblings().removeClass('active');
    }
//后台改变数据
    var cartChange=['C0','W0','I0'];
    $('.cartColor').on('click','div',function () {
        var indexC = $('.cartColor').children().index(this);
        var data = 'C'+indexC;
        cartChange[0]=data;
        cartChangeImg();
    });
    $('.cartWheel').on('click','div',function () {
        var indexC = $('.cartWheel').children().index(this);
        var data = 'W'+indexC;
        cartChange[1]=data;
        cartChangeImg();
    });
    $('.cartTrim').on('click','div',function () {
        var indexC = $('.cartTrim').children().index(this);
        var data = 'I'+indexC;
        cartChange[2]=data;
        cartChangeImg();
    });
    function cartChangeImg() {
        var data = cartChange.join('');
        console.log(data);
        $.ajax({
            type:'get',
            url:'/Carrera/CarreraColor/'+data,
            success(data){
                var data = data.data;
                var html = '';
                html+=`
                    <img src=${'../..'+data.pic0} class="img-responsive cartPic fade"/>
                    <img src=${'../..'+data.pic1} class="img-responsive cartPic fade"/>
                    <img src=${'../..'+data.pic2} class="img-responsive cartPic fade"/>
                    <img src=${'../..'+data.pic3} class="img-responsive cartPic fade"/>
                    <img src=${'../..'+data.pic4} class="img-responsive cartPic fade"/>
                    <img src=${'../..'+data.pic5} class="img-responsive cartPic fade"/>
                    `;
                html+=`<div class="paginationVis2d">
                        <span class="swiper-pagination-switch"></span>
                        <span class="swiper-pagination-switch"></span>
                        <span class="swiper-pagination-switch"></span>
                        <span class="swiper-pagination-switch"></span>
                        <span class="swiper-pagination-switch"></span>
                        <span class="swiper-pagination-switch"></span>
                    </div>
                    <div class="glyphicon glyphicon-menu-left arrow left cartChangeLeft"></div>
                    <div class="glyphicon glyphicon-menu-right arrow right cartChangeRight"></div>`;
                $('.changeImg').html(html);
                $('.cartChangeLeft').click(function () {
                    cartCarCount--;
                    if(cartCarCount<0)cartCarCount=5;
                    cartChangeTab();
                });
                $('.cartChangeRight').click(function () {
                    cartCarCount++;
                    if(cartCarCount>5)cartCarCount=0;
                    cartChangeTab();
                });
                cartChangeTab();
            }
        })
        // console.log(cartCarCount)
    }
    cartChangeImg();

//资金计算js
    var carrear = 1318000;
    var caledMonth = 12;
    var caledFpay = 20;
    var caledLpay = 0;
    function calcuChange(jqspan) {
        // console.log(this);
        var $span = jqspan;
        var inStyle = $span.css('left');
        var leftStyle = $span.parent().children('.mark.left').css('left');
        // console.log(parseInt(leftStyle));
        var indexChange = parseInt(inStyle)-parseInt(leftStyle)+'px';
        $span.parent().children('.change').children('span').css('left',indexChange).prev().css('width',inStyle);
    }
    $('.calculate>.cal-left>.choice>span').click(function () {
        var calcuMonth = [12,24,36];
        var $span = $(this);
        calcuChange($span);
        var indexSpan = $('.calculate>.cal-left>.choice>span').index($span);
        caledMonth = calcuMonth[indexSpan];
        EveryMonthPay(caledMonth,caledFpay,caledLpay);
        calcuMonth = null;
    })
    function jisuan(jisuan,where) {
        var arr = parseInt(carrear*jisuan/100).toString().split('');
        // console.log(arr);
        arr.splice(-3,0,',');
        var html ='￥' + arr.join('');
        $(where).children('p').html(html);
    }
    jisuan(20,'.cal-middle');
    jisuan(0,'.cal-right');
    $('.calculate>.cal-middle>.choice>span').click(function () {
        var calcuFpay = [20,30,40];
        var $span = $(this);
        calcuChange($span);
        var indexSpan = $('.calculate>.cal-middle>.choice>span').index($span);
        // console.log(indexSpan);
        caledFpay = calcuFpay[indexSpan];
        jisuan(caledFpay,'.cal-middle');
        EveryMonthPay(caledMonth,caledFpay,caledLpay);
        calcuFpay = null;
    })
    $('.calculate>.cal-right>.choice>span').click(function () {
        var calcuLpay = [0,25];
        var $span = $(this);
        calcuChange($span);
        var indexSpan = $('.calculate>.cal-right>.choice>span').index($span);
        // console.log(indexSpan);
        caledLpay = calcuLpay[indexSpan];
        jisuan(caledLpay,'.cal-right');
        EveryMonthPay(caledMonth,caledFpay,caledLpay);
        calcuLpay = null;
    })
    function EveryMonthPay(month,Fpay,Lpay) {
        var everyToPay =parseInt((carrear*(1-Fpay/100-Lpay/100))/month);
        var arr = everyToPay.toString().split('');
        arr.splice(-3,0,',');
        everyToPay = arr.join('');
        // console.log(everyToPay);
        $('.summe').html(everyToPay);

    }



    new Vue({
        el:'#allocation',
        data:{
            allocationList:['概念',
                            '驱动装置',
                            '底盘',
                            '安全性',
                            '舒适性',
                            '音频和通信',
                            '保时捷智慧互联',
                            '个性化'
            ],
            record:[],
            concept:[
                [
                    {
                        pic:'./img/911Carrera/porsche-image.jpg',
                        title:'911',
                        msg:'往日辉煌再次焕发活力：树立全新标杆。这是一款前所未有的跑车，这是几代人心目中的梦幻跑车，这是一辆承载激情的跑车。它代表着 911 的未来。',
                    },
                    {
                        pic:'./img/911Carrera/porsche-preview.jpg',
                        title:'出色的工程技术设计',
                        msg:'发动机、底盘和车身。在 911 的每一个部件上，我们都倾注了多年的经验、成千上万的创意和无数个小时的辛勤开发。即使是最细微的创新介绍起来也能占满一整本书。只有各个零件协调一致才能构成一个和谐的整体理念...',
                    },
                    {
                        pic:'./img/911Carrera/porsche-preview (1).jpg',
                        title:'轻质结构',
                        msg:'想要与时间角逐并实现高效动力输出，车辆不能负担不必要的重量。因此，轻质结构可谓 911 的另一核心原则。',
                    }
                ],
                [
                    {
                        pic:'./img/911Carrera/_ drive_1.jpg',
                        title:'发动机',
                        msg:'保时捷从不固守常规。停止自由思考？绝对不行。我们经常考虑的一个问题是，如何能做得更好？换句话说，我们能否重新定义工程技术的极限？我们能否将看上去不可调和的矛盾融为一体？答案是完全可以，只需借助智造性能...'
                    },
                    {
                        pic:'./img/911Carrera/_ drive_2.jpg',
                        title:'后轮驱动和四轮驱动',
                        msg:'采用后轮驱动还是四轮驱动？对技术爱好者而言这是一个性能问题，而对 911 车迷而言这则关乎信仰。',
                    },
                    {
                        pic:'./img/911Carrera/_ drive_2.jpg',
                        title:'涡轮增压器',
                        msg:'为降低油耗，新款 911 车型的排量得到大幅降低。这是因为，我们不仅是一家跑车制造商，还要承担巨大的社会责任。尽管如此，新款发动机的功率输出仍得到显著增加。这是因为配备了专门为 911 完全从零开始研...',
                    }
                ],
                [
                    {
                        pic:'./img/911Carrera/_chassis_1.jpg',
                        title:'保时捷主动悬挂管理系统 (PASM)',
                        msg:'PASM 首次在所有 911 车型上作为标准配置提供。这款电子减震控制系统能根据当前的行驶条件和驾驶方式连续调节每个车轮的阻尼力。'
                    },
                    {
                        pic:'./img/911Carrera/_chassis_2.jpg',
                        title:'保时捷稳定管理系统 (PSM)',
                        msg:'所有 911 车型都标配增强版保时捷稳定管理系统 (PSM)，即使在动态行驶性能接近极限的情况下仍然能够保持车辆的稳定性。传感器能持续监控车辆的行驶方向、车速、摇摆速度和横向加速度。PSM 可以利用这...'
                    },
                    {
                        pic:'./img/911Carrera/_chassis_3.jpg',
                        title:'Sport Chrono 组件',
                        msg:'只需按下按钮，便可尽享肾上腺激素飙升的激情体验：选装的 Sports Chrono 组件能让底盘、发动机和变速箱的调校更富运动性能，让您尽享前所未有的运动体验。'
                    }
                ],
                [
                    {
                        pic:'./img/911Carrera/_safety_1.jpg',
                        title:'制动器',
                        msg:'我们渴望速度——。不仅包括前进速度，也包括制动速度。为了充分发掘制动系统的潜力，我们增大了新款 911 制动系统的尺寸，以匹配更高的功率输出。'
                    },
                    {
                        pic:'./img/911Carrera/_safety_2.jpg',
                        title:'保时捷陶瓷复合制动系统 (PCCB)',
                        msg:'久经赛场考验的保时捷陶瓷复合制动系统 (PCCB) 作为选装配置提供。新款 911 配备的陶瓷复合制动系统采用钻孔式陶瓷制动盘，前后轮制动盘直径分别为 410 mm 和 390 mm，能够提供更高的制...'
                    },
                    {
                        pic:'./img/911Carrera/_safety_3.jpg',
                        title:'安全气囊和保时捷侧撞保护系统 (POSIP)',
                        msg:'新款 911 车型配备了采用先进安全气囊技术的全尺寸驾驶员和前排乘客安全气囊，能够根据事故的严重程度和类型分两级充气。'
                    },
                ],
                [
                    {
                        pic:'./img/911Carrera/_amenity_1.jpg',
                        title:'内饰',
                        msg:'驾驶者必须始终知道如何获得领先优势，同时着眼全局。为此，内饰的方方面面都专注于前方：前方的车辆、下一个弯道、下一个驾驶动作。'
                    },
                    {
                        pic:'./img/911Carrera/_amenity_2.jpg',
                        title:'运动型方向盘',
                        msg:'标配运动型方向盘采用辐式造型，重量极轻且功能实用。小巧的中心垫块和保时捷盾徽周围的镀铬环源自 918 Spyder 的方向盘，进一步突出了它的运动特质。'
                    },
                    {
                        pic:'./img/911Carrera/_amenity_3.jpg',
                        title:'照明设计组件',
                        msg:'选装照明设计组件美观而又实用，其中包含顶置控制台、后排座椅、车门把手、车门储物箱以及前排脚坑的可调光 LED 指示灯。'
                    },
                ],
                [
                    {
                        pic:'./img/911Carrera/_audio_1.jpg',
                        title:'音响套装升级版',
                        msg:'音响套装升级版带 8 个音箱，总输出功率为 150 W，带给您绝佳的音响体验。集成到 PCM 中的放大器能够根据驾驶员和乘客的情况对乘客舱内的音响模式进行优化调节。'
                    },
                    {
                        pic:'./img/911Carrera/_audio_2.jpg',
                        title:'BOSE? 环绕声音响系统',
                        msg:'选装的 BOSE? 环绕声音响系统专门针对 911 车型开发，因此能够与车内特定声学特性完美匹配。这套音响系统带有 12 个完全有源音箱和放大器通道，包含一个获得专利且集成到车身壳体的 100 W 有...'
                    },
                    {
                        pic:'./img/911Carrera/_audio_3.jpg',
                        title:'高端环绕声音响系统',
                        msg:'公路可能是世界上能够让您不受干扰地倾听音乐的最后一方净土。那么您有充足的理由通过保时捷的方式升级您的享受。通过与德国最重要的高端音响系统制造商合作'
                    },
                ],
                [
                    {
                        pic:'./img/911Carrera/_internet_1.jpg',
                        title:'新款保时捷通讯管理系统(PCM)',
                        msg:'增强版保时捷通讯管理系统 (PCM) 是所有信息娱乐应用的集中控制单元，在所有车型上作为标准配置提供。这款 PCM 具有含集成距离传感器的高分辨率触摸显示屏，操作起来简单方便。'
                    },
                    {
                        pic:'./img/911Carrera/_internet_2.jpg',
                        title:'智慧互联模组升级版(Connect Plus)',
                        msg:'智慧互联模组升级版 (Connect Plus) 能够最大限度地为您的爱车确保联网功能。'
                    },
                    {
                        pic:'./img/911Carrera/_internet_3.jpg',
                        title:'服务',
                        msg:'您可以通过保时捷智慧互联和智慧互联模组升级版 (Connect Plus) 使用多项实用的服务，例如实时交通信息、在线兴趣点搜索、保时捷礼宾服务以及 Apple  CarPlay®。借助这些视觉上的辅助...'
                    }
                ],
                [
                    {
                        pic:'./img/911Carrera/_specific_.jpg',
                        title:'Porsche Exclusive  Manufaktur',
                        msg:'让一辆保时捷像您的指纹一样与众不同。这是保时捷独家配件 (Porsche Exclusive) 做出的承诺。'
                    },
                ],
            ],

        },
        created(){
            this.record.push(this.concept[0]);
        },
        methods:{
            changeItem(what){
                // console.log(what);
                this.record = [];
                this.record.push(this.concept[what]);
                console.log(this.record);
            },
        }
    })
})



