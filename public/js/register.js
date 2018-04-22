$('[name=uname]').blur(function () {
    if($('[name=uname]').val()==''||$('[name=uname]').val()==null){
        alert('用户名不能为空');
    }else {
        // console.log(1);
        $.ajax({
            type:'get',
            url:'/user/hadName',
            data:{uname:$('[name=uname]').val()},
            success(res){
                // console.log(res);
                // console.log(res.code);
                if(res.code==1){
                    alert('用户可以注册')
                }else if(res.code==-1){
                    alert('用户名重复')
                    $('[name=uname]').val('');
                }else{
                    alert('用户名含有非法字符');
                    $('[name=uname]').val('');
                }
            }
        })
    }

})
$('#btn').click(function (e) {
    console.log($('form').serializeArray());
    e.preventDefault();
    if($('[name=uname]').val()==''){
        alert('用户名不能为空');
        return
    }
    $.ajax({
        type:'post',
        url:'/user/register',
        data:$('form').serializeArray(),
        success:function (data) {
            console.log(data);
            if(data.code==1){
                alert('用户注册成功，跳转到登录页面');
                window.location.href = "login.html";
            }
        }
    })
})