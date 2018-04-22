$(
    $.ajax({
        type:'get',
        url:'/acc/accTheme',
        success(data){
            // console.log(data);
            var title =data.data;
            var html = ``;
            for(var i = 0;i<title.length;i++){
                html += `
                            <div class="row font_img">
            <div class="hidden-xs col-sm-3">
                <div class="thumbnail">
                  <img src=${"./"+title[i].pic}>
                </div>
            </div>
            <div class="col-xs-12 col-sm-9 font_PEE">
                <i></i>
                <span>
                <strong class="font_PE">${title[i].title}</strong>
                <br>
                ${title[i].theme}</span>
            </div>
        </div>
                `
            }
            $('.title-new').html(html);
        },
        err(err){
            if(err)console.log(err);
        }
    })
)