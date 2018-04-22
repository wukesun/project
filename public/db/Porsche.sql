#删除创建数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS porsche;
CREATE DATABASE porsche CHARSET=UTF8;
USE porsche;

#创建用户表
CREATE TABLE p_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(64),
    upwd VARCHAR(8),
    city VARCHAR(16),
    phone VARCHAR(32),
    isSale INT,
    isBuy INT
);

#为数据库添加数据
INSERT INTO p_user VALUES
    (NULL,'guapilu','123456','上海市','13112345578',0,1),
    (NULL,'dingding','123456','杭州市','13112346678',1,0),
    (NULL,'dongdong','123456','苏州市','13156645678',1,1),
    (NULL,'yueyue','123456','广州市','13123145678',0,1),
    (NULL,'guapike','123456','北京市','13987645678',1,0),
    (NULL,'guapishuang','123456','黑龙江市','13112321378',0,0),
    (NULL,'sunge','123456','湖州市','13119798878',1,1),
    (NULL,'jiabin','123456','天津市','13131231578',0,0),
    (NULL,'xiaokeai','123456','武汉市','13179899978',1,1),
    (NULL,'yueyueniao','123456','成都市','13984654321',0,1),
    (NULL,'wudijimo','123456','深圳市','13985223132',1,0),
    (NULL,'wanmeiwuxia','123456','厦门市','18565618651',0,1),
    (NULL,'piaopiao','123456','泉州市','18861563212',0,1),
    (NULL,'jiaming','123456','杭州市','15632156785',1,0),
    (NULL,'meijie','123456','福州市','15628451235',1,0),
    (NULL,'zongjian','123456','西安市','13754651321',1,1),
    (NULL,'zhengwei','123456','长沙市','17854156132',0,1),
    (NULL,'eshili','123456','北京市','15684521322',0,1),
    (NULL,'xiaoshuang','123456','广州市','13333354654',0,1),
    (NULL,'xiaohong','123456','嘉兴市','18845654321',1,1),
    (NULL,'xiaoming','123456','金华市','18654321987',0,0),
    (NULL,'tupian','123456','温州市','18635187562',0,0),
    (NULL,'beautiful','123456','南京市','15521357984',1,1),
    (NULL,'chinese','123456','重庆市','15842321875',0,1),
    (NULL,'english','123456','九江市','15754913212',1,0),
    (NULL,'lulululu','123456','杭州市','18686543213',0,1)
;

#创建车型表
CREATE TABLE p_CarreraColor(
    name VARCHAR(32),
    pic0 VARCHAR(64),
    pic1 VARCHAR(64),
    pic2 VARCHAR(64),
    pic3 VARCHAR(64),
    pic4 VARCHAR(64),
    pic5 VARCHAR(64)
);
INSERT INTO p_CarreraColor VALUES
    ('C0W0I0','/img/911Carrera/iris0-0-0-0.jpg','/img/911Carrera/iris0-0-0-1.jpg','/img/911Carrera/iris0-0-0-2.jpg','/img/911Carrera/iris0-0-0-3.jpg','/img/911Carrera/iris0-0-0-4.jpg','/img/911Carrera/iris0-0-0-5.jpg'),
    ('C0W1I0','/img/911Carrera/iris0-1-0-0.jpg','/img/911Carrera/iris0-1-0-1.jpg','/img/911Carrera/iris0-1-0-2.jpg','/img/911Carrera/iris0-1-0-3.jpg','/img/911Carrera/iris0-1-0-4.jpg','/img/911Carrera/iris0-1-0-5.jpg'),
    ('C0W0I1','/img/911Carrera/iris0-0-1-0.jpg','/img/911Carrera/iris0-0-1-1.jpg','/img/911Carrera/iris0-0-1-2.jpg','/img/911Carrera/iris0-0-1-3.jpg','/img/911Carrera/iris0-0-1-4.jpg','/img/911Carrera/iris0-0-1-5.jpg'),
    ('C0W1I1','/img/911Carrera/iris0-1-1-0.jpg','/img/911Carrera/iris0-1-1-1.jpg','/img/911Carrera/iris0-1-1-2.jpg','/img/911Carrera/iris0-1-1-3.jpg','/img/911Carrera/iris0-1-1-4.jpg','/img/911Carrera/iris0-1-1-5.jpg'),
    ('C1W0I0','/img/911Carrera/iris1-0-0-0.jpg','/img/911Carrera/iris1-0-0-1.jpg','/img/911Carrera/iris1-0-0-2.jpg','/img/911Carrera/iris1-0-0-3.jpg','/img/911Carrera/iris1-0-0-4.jpg','/img/911Carrera/iris1-0-0-5.jpg'),
    ('C1W0I1','/img/911Carrera/iris1-0-1-0.jpg','/img/911Carrera/iris1-0-1-1.jpg','/img/911Carrera/iris1-0-1-2.jpg','/img/911Carrera/iris1-0-1-3.jpg','/img/911Carrera/iris1-0-1-4.jpg','/img/911Carrera/iris1-0-1-5.jpg'),
    ('C1W1I0','/img/911Carrera/iris1-1-0-0.jpg','/img/911Carrera/iris1-1-0-1.jpg','/img/911Carrera/iris1-1-0-2.jpg','/img/911Carrera/iris1-1-0-3.jpg','/img/911Carrera/iris1-1-0-4.jpg','/img/911Carrera/iris1-1-0-5.jpg'),
    ('C1W1I1','/img/911Carrera/iris1-1-1-0.jpg','/img/911Carrera/iris1-1-1-1.jpg','/img/911Carrera/iris1-1-1-2.jpg','/img/911Carrera/iris1-1-1-3.jpg','/img/911Carrera/iris1-1-1-4.jpg','/img/911Carrera/iris1-1-1-5.jpg');

#插入保时捷服务和附件部分
CREATE TABLE accesories(
    pic VARCHAR(64),
    title VARCHAR(16),
    theme VARCHAR(128)
);
INSERT INTO accesories VALUES
    ('img/accessoriesandservice/product1.jpg','Porsche Exclusive Manufaktur',
    '保时捷独家配件 (Exclusive) 令您的保时捷从外观到内饰、从造型到性能，如同您的指纹一样，绝对与众不同。并且，在原厂直接完成改装，拥有统一的保时捷品质。'),
    ('img/accessoriesandservice/product2.jpg','保时捷智慧互联',
    '在驾驶跑车时，驾驶员与车辆之间务必要保持紧密连接，这一点很重要。实现这一点的完美基础就在于全新的保时捷通讯管理系统 (PCM)，其中配备了 Connect 或 Connect Plus 模块以及有用的无线互联网连接模块，例如 实时交通信息、卫星地图。'),
    ('img/accessoriesandservice/product3.jpg','保时捷原厂精装配件','每一辆保时捷都是与众不同的，保时捷精装配件则更是丰富多彩。这一系列附件允许您在当地的保时捷中心里随心所欲地个性化您的爱车。'),
    ('img/accessoriesandservice/product4.jpg','官方授权的保时捷中心','您是否打算进行预约？您是否有关于保时捷认可保修的其它问题？您当地的保时捷经销商非常乐意为您效劳。'),
    ('img/accessoriesandservice/product6.jpg','保时捷金融服务','保时捷金融服务为您提供专属汽车金融服务。'),
    ('img/accessoriesandservice/product7.jpg','保时捷救援','如果您的保时捷处于保时捷认可保修期内，您也将从保时捷救援项目中获益。请点击链接了解更多信息。'),
    ('img/accessoriesandservice/product8.jpg','保时捷服务','无论您是否正在驾乘您的保时捷汽车，均可体验到保时捷全方位的高品质服务。'),
    ('img/accessoriesandservice/product9.jpg','保时捷新闻','在此定期接收保时捷的最新新闻和资讯。');


#插入关于保时捷的新闻部分
CREATE TABLE ab_news(
    name VARCHAR(16),
    news VARCHAR(128)
);

INSERT INTO ab_news VALUES
    ('新闻中心和新闻稿','来自保时捷公司的保时捷新闻中心和新闻稿可让您第一时间了解最新资讯。'),
    ('工作机会','员工的创新精神与创造性是我们赖以生存的基础。如果您想体验保时捷的魅力，就请加入到我们的团队之中。'),
    ('“Christophorus” 杂志',' "Christophorus" 杂志是保时捷公司自己的出版物，其内容包括公司的产品和信息以及集团的活动。'),
    ('服务分支机构','除了引人入胜的车型系列，保时捷还提供一系列车辆技术开发和相关领域内的服务。'),
    ('关于保时捷中国','了解关于保时捷中国、保时捷中心网络已经如何申请成为保时捷经销商的信息。'),
    ('保时捷博物馆','了解位于祖文豪森 Porscheplatz 的新保时捷博物馆的所有信息。');

#创建评论
CREATE TABLE LiveComment(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16),
    comment VARCHAR(64)
);

INSERT INTO LiveComment VALUES
    (null,'傻子卢','F6,66666'),
    (null,'喝奶飘','F6,66666'),
    (null,'骚人久','F6,66666'),
    (null,'温柔珂','F6,66666'),
    (null,'西瓜双','F6,66666'),
    (null,'小可爱','F6,66666');