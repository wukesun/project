<?php
//1:设置响应数据格式json
header("Content-Type:application/json;charset=utf-8");
//2:获取数据库连接
$conn = mysqli_connect("127.0.0.1","root","","xz",3306);
//3:设置数据库编码
//设置php与mysql 连接时编码 utf8
//设置php发送sql 编码       utf8
//设置mysql返回数据编码     utf8
mysqli_query($conn,"SET NAMES UTF8");