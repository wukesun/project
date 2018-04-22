<?php
//1:设置php响应头格式为 json utf-8
header("Content-Type:application/json;charset=utf-8");
//2:获取参数 uname upwd yzm
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];
//echo 1;
//echo $uname."_".$upwd."<br />";
//*3:创建正则表达式来验证用户输入参数
$ureg = '/^[a-zA-Z0-9]{3,12}$/';
$rs = preg_match($ureg,$uname);
//die 函数:输出一段字符串并且停止当前php程序
if(!$rs){
  die('{"code":-1,"msg":"用户名格式不正确"}');
}
//echo 2;
$rs = preg_match($ureg,$upwd);
if(!$rs){
  die('{"code":-1,"msg":"密码格式不正确"}');
}
//echo 3;
//echo $uname."_".$upwd;
//4:验证出错提示错误消息 {"code":-1,"msg":"参数不正确"}
//5:获取数据库连接
//UTF8MB4 针对手机端用户 android ios
$conn = mysqli_connect("127.0.0.1","root","","xz",3306);
mysqli_query($conn,"SET NAMES UTF8");
//echo 4;
//*6:创建sql语句
$sql  = " SELECT uid ";
$sql .= " FROM t_admin";
$sql .= " WHERE uname='$uname' AND upwd=md5('$upwd')";
//7:执行sql语句并且获取结果
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
//echo 5;
//Unknown column 'uid1' in 'field list 列名拼写错误
//Table 'xz.t_admin1' doesn't exist 表名拼写错误
//8:返回登录消息
//  {"code":1,"msg":"登录成功"}
$row = mysqli_fetch_row($result);
if($row==null){
  die('{"code":-1,"msg":"用户名或者密码不正确"}');
}else{
  die('{"code":1,"msg":"登录成功"}');
}