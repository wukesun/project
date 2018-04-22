/**
 * Created by web-01 on 2018/3/21.
 */
$.ajax({
    type:'get',
    url:'./header.html',
    success(data){
        var html = ``;
        html+=data;
        $('#header-box').html(html);
        $(()=>{

            Vue.component('typeDetial',{
                template:`
            <div id="select_main" v-if="detail.length > 0">
                <div class="select_right">
                    <div>
                        <div class="select_rt_top">
                            <ul>
                                <li v-for="(list,index) in detail" @mouseenter="msenter(index)"> 
                                    <a v-if="list.title == '911 Carrera 车型'" href="911-carrera-models.html">{{list.title}}</a>
                                     <a v-else href="">{{list.title}}</a>
                                </li>
                            </ul>
                            <div>
                                <img :src="this.detailInf.bcImg" class="img-responsive"/>
                                <img :src="this.detailInf.carIcon" class="img-responsive"/>
                            </div>
                        </div>
                        <div class="select_lt_bottom">
                            <ul class="clear">
                                <li><b>{{this.detailInf.price}}</b><b id="line_between1"></b><b>制造商建议零售价（含增值税）</b></li>
                                <li><b>{{this.detailInf.power}}</b><b id="line_between2"></b><b>最大功率（hp）/最大功率（kW）</b></li>
                                <li><b>{{this.detailInf.speed}}</b><b>0 - 100 km/h 加速时间</b></li>
                            </ul>
                            <div>
                                <p><a href=""><b>€</b><b>车辆配置</b></a></p>
                                <p><a href=""><b>↣↢</b><b>比较</b></a></p>
                                <p><a href=""><b>»</b><b>探索</b></a></p>
                            </div>
                            <p>* 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华
                                小汽车加征消费税有关事项的通知》所要求加征的消费税。请向授权经销商咨询具体的价格信息。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,
                data:function () {
                    return {
                        detailInf:{}
                    }
                },
                props:['detail'],
                methods:{
                    msenter:function (index) {
                        this.detailInf = this.detail[index].inf;
                    }
                },
                watch:{
                    detail:function (newData) {
                        if(newData[0] != null){
                            this.detailInf = newData[0].inf;
                        }
                    }
                },
                mounted(){

                }
            })
            Vue.component('carTypeList',{
                template:`
            <ul class="dropD-menu">
                <li v-for="(list,index) in lists">{{list.title}}</li>
            </ul>
        `,
                data:function () {
                    return {
                        ind:0
                    }
                },
                mounted(){
                    let that = this;
                    //给主导航菜单加hover事件
                    $('.nav li.dropD').hover(
                        function () {
                            $(this).children('ul.dropD-menu').addClass('hover');
                            $('#ff_mask').show();
                        },
                        function () {
                            $(this).children('ul.dropD-menu').removeClass('hover');
                            that.$emit('clear-detail');
                            $('#ff_mask').hide();
                        }
                    );
                    //给所有车型列表绑定hover事件
                    let $lis = $('.nav li.dropD').first().children('ul.dropD-menu').children('li');
                    $lis.hover(
                        function () {
                            let index = $lis.index($(this));
                            that.$emit('detail-hover',index);
                        }
                    )
                },
                props:['lists']
            });

            let app = new Vue({
                el:'#nav',
                data:{
                    lists:[
                        {
                            title:718,
                            chilTypeList:[
                                {
                                    title:'718 Cayman 车型',
                                    inf:{
                                        'bcImg':'img/index/porsche-normal.jpg',
                                        'carIcon':'img/index/porsche-model.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/184 kW',
                                        'speed':'5.6 s'
                                    }
                                },
                                {
                                    title:'718 Boxster 车型',
                                    inf:{
                                        'bcImg':'img/index/718-boxster.jpg',
                                        'carIcon':'img/index/718-boxster.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                },
                            ]
                        },
                        {
                            title:'911',
                            chilTypeList:[
                                {
                                    title:'911 Carrera 车型',
                                    inf:{
                                        'bcImg':'img/index/911-carreral.jpg',
                                        'carIcon':'img/index/911-carrera.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                },
                                {
                                    title:'911 Targa4 车型',
                                    inf:{
                                        'bcImg':'img/index/911-targa4.jpg',
                                        'carIcon':'img/index/911-targa4l.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                },
                                {
                                    title:'911 Turbo 车型',
                                    inf:{
                                        'bcImg':'img/index/911-turbo.jpg',
                                        'carIcon':'img/index/911-turbo.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                },
                                {
                                    title:'911 Turbo S Exclusive 车型',
                                    inf:{
                                        'bcImg':'img/index/911-turbo-s.jpg',
                                        'carIcon':'img/index/911-turbo-s.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                },
                                {
                                    title:'911 GTS 车型',
                                    inf:{
                                        'bcImg':'img/index/911-gts.jpg',
                                        'carIcon':'img/index/911-gts.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                },
                                {
                                    title:'911 GT3 车型',
                                    inf:{
                                        'bcImg':'img/index/911-gt3.jpg',
                                        'carIcon':'img/index/911-gt3.png',
                                        'price':'598,000 元起 *',
                                        'power':'250 hp/204 kW',
                                        'speed':'4.6 s'
                                    }
                                }
                            ]
                        },
                        {
                            title:'Panamera',
                            chilTypeList:[
                                {title:'Panamera 车型'},
                                {title:'Panamera E-Hybrid 车型'},
                                {title:'Panamera Turbo 车型'},
                            ]
                        },
                        {
                            title:'Macan',
                            chilTypeList:[
                                {title:'Macan 车型'},
                                {title:'Macan GTS'},
                                {title:'Macan Turbo 车型'},
                            ]
                        },
                        {
                            title:'Cayenne',
                            chilTypeList:[
                                {title:'Cayenne 车型'},
                                {title:'Cayenne Turbo'},
                            ]
                        },
                    ],
                    detail:[],
                },
                methods:{
                    initDetail: function(index){
                        this.detail = [];
                        this.lists[index].chilTypeList.forEach((item)=>{
                            this.detail.push(item);
                        })
                    },
                    clearDetail:function () {
                        this.detail = [];
                    }
                }
            })
        })
    },
    err(err){
        console.log(err);
    }
})
