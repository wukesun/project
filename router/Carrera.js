const express = require('express');
const pool = require('../pool');
const router = express.Router();
router.get('/CarreraColor/:Cname',(req,res)=>{
    var reg = /[`~@#$%^&*()<>?=:"{}\/;'\[\]]/im;
    var Cname = req.params.Cname;
    if(reg.test(Cname)==1){res.json({code:-2,msg:'请求输入格式错误'})}
    // console.log(Cname);
    var sql = 'SELECT pic0,pic1,pic2,pic3,pic4,pic5 FROM p_CarreraColor WHERE name=?';
    pool.query(sql,[Cname],(err,result)=>{
        if(err)throw err;
        if(result=='')res.json({code:-1,msg:'查询结果不存在'})
        res.json({code:1,data:result[0]});
    })
});

module.exports=router;