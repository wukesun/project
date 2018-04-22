const express = require('express');
const qs = require('querystring');
const pool = require('../pool');
const router = express.Router();
const session = require('express-session');

//判断是否登录
router.get('/isLogin',(req,res)=>{
    if(req.session.sign){
        res.json({code:1,msg:req.session.name})
    }else{
        res.json({code:-1,msg:'用户未登录'})
    }
});
//登出
router.get('/loginOut',(req,res)=>{
    req.session.destroy();
    res.json({code:1,msg:'结束对话'})
    // res.redirect('/');
})
//登录
router.post('/login',(req,res)=>{
    req.on('data',function (buf) {
        var user = qs.parse(buf.toString());
        var reg = /[`~@#$%^&*()<>?=:"{}\/;'\[\]]/im;
        var uname = user.uname;
        var upwd = user.upwd;
        if(reg.test(uname)==1){
            res.json({code:-2,msg:'用户名格式错误，不能含有特殊字符'});
        }else if(reg.test(upwd)==1){
            res.json({code:-2,msg:'用户密码格式错误，不能含有特殊字符'});
        }else{
            var sql = `SELECT uname FROM p_user WHERE uname=? AND upwd=?`;
            pool.query(sql,[uname,upwd],function (err,result) {
                if(err)throw err;

                else if(result!=''){
                    console.log(req.session);
                    req.session.sign=true;
                    req.session.name=result[0].uname;
                    res.json({code:1,msg:'登录成功'});
                    console.log(result[0].uname);
                }else{
                    res.json({code:-1,msg:'登录失败，用户名或密码错误'})
                }
            });
        }
    })
});

//注册
router.post('/register',(req,res)=>{
    req.on('data',(buf)=>{
        var user = qs.parse(buf.toString())
        console.log(user);
        var reg = /[`~@#$%^&*()<>?=:"{}\/;'\[\]]/im;
        var uname = user.uname;
        var upwd = user.upwd;
        var phone = user.phone;
        if(reg.test(uname)){
            res.json({code:-2,msg:'用户名格式错误，不能含有特殊字符'});
        }
        if(reg.test(upwd)){
            res.json({code:-2,msg:'密码格式错误，不能含有特殊字符'});
        }
        if(reg.test(phone)){
            res.json({code:-2,msg:'电话格式错误，不能含有特殊字符'});
        }
        var sql = "INSERT INTO p_user(uid,uname,upwd,city,phone,isSale,isBuy) VALUES(NULL,?,?,NULL,?,0,1)";
        pool.query(sql,[uname,upwd,phone],(err,result)=>{
            if(err)throw err;
            if(result.affectedRows==1){
                res.json({code:1,msg:'注册成功'})
            }
        })
    })
});

//判断是否已有用户
router.get('/hadName',(req,res)=>{
    // console.log(req.query.uname);
    var uname = req.query.uname;

    var reg = /[`~@#$%^&*()<>?=:"{}\/;'\[\]]/im;
    if(reg.test(uname)){
        res.json({code:-2,msg:'用户名格式错误，不能含有特殊字符'});
    }

    var sql = 'SELECT uname From p_user where uname=?';

    pool.query(sql,[uname],(err,result)=>{
        if(err)throw err;
        console.log(result);
        if(result==''){
            res.json({code:1})
        }else{
            res.json({code:-1})
        }

    })

});

module.exports = router;