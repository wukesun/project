$("#btn").click(function(e) {
    //阻止事件默认行为 事件绑定 a submit
    e.preventDefault();
    // console.log(1);
//2:获取用户输入用户名和密码
    var u = $("#uname").val();
    var p = $("#upwd").val();
    // console.log(2);
    // console.log(u+"_"+p);
//3:创建二个正则表达式验证
    var reg = /^[a-zA-Z0-9]{3,12}$/;
    if(!reg.test(u)){
        alert("用户名格式不正确，请检查"); //显示错误
        return;                             //停止执行
    }
    if(!reg.test(p)){
        alert("密码格式不正确，请检查");   //显示错误
        return;                             //停止执行
    }
//4:如果验证通过发送ajax请求 02_login.php
    $.ajax({
        type:"post",             //提交方式 GET【php select】 POST
        url:"/user/login", //提交路径
        data:{uname:u,upwd:p},   //提交参数
        success:function(data){
            // console.log(3);
            console.log(data);    //data php返回数据 js obj
            if(data.code>0){
                alert(data.msg);
                location.href = "live.html";//自动跳转主程序
            }else{
                alert(data.msg);
            }
        },//请求成功data返回数据
        error:function(){
            //错误:请求地址url错,参数,php header php语法
            alert("网络故障请检查");
        }
    });
});
//登录style左中右
$("#Style_2").click(function (e) {
    e.preventDefault();
    console.log($("div.login_middle_head>ul>li>a"));
    $("div.login_middle_body>div").css({"margin":"0","margin-top":"8%"});

});
$("#Style_3").click(function (e) {
    e.preventDefault();
    console.log($("div.login_middle_head>ul>li>a"));
    $("div.login_middle_body>div").css({"margin-right":"0","margin-top":"8%"});

});
     

