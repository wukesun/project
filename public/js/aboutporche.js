//news新闻动态加载
$(
    $.ajax({
        type:'get',
        url:'/abP/news',
        success:function (data) {
            // console.log(data);
            var news = data.data;
            var html = ``;
            for(var i = 0;i<news.length;i++){
                html+=`    <div class="row font">
                    <div class="col-xs-11">
                        <div class="row">
                            <div class="col-xs-12 font-xin">
                                <i></i>
                                <a href="#"><h5>${news[i].name}</h5></a>
                            </div>
                        </div>
                        <div class="row font-xin">
                            <div class="col-sm-8 col-xs-12">
                                <a href="#">
                                    <h5>
                                    ${news[i].news}
                                    </h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
            }
            $('.abnews').html(html);
        },
        err:function (err) {
            if(err)console.log(err);
        }
    })
)