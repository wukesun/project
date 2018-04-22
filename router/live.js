const express = require('express');
const pool = require('../pool');
var router = express.Router();
router.get('/comments',(req,res)=>{
    // console.log(req.query);
    var pno = req.query.pno;
    if(pno==''||pno==undefined)pno=1;
    var pageSize = req.query.pageSize;
    if(pageSize==''||pageSize==undefined)pageSize=20;
    // console.log(pno, pageSize);
    var sql = 'SELECT count(name) AS c FROM LiveComment ';
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        var count = result[0].c;

        var pageCount = Math.ceil( count/ pageSize);
        var pageStart = (Number(pno)-1)*pageSize;

        var sql = 'SELECT name,comment FROM LiveComment order by uid desc limit '+pageStart+' , '+pageSize;
        pool.query(sql,(err,result)=>{
            if(err)throw err;
            res.json({code:1,pno:pno,pageCount:pageCount,data:result})
        })
    })
    // pool(query)
});
router.get('/addComment',(req,res)=>{
    var name = req.query.uname;
    var comment = req.query.msg;
    // console.log(name, commend);
    var sql = 'INSERT INTO LiveComment VALUES(null,?,?)';
    pool.query(sql,[name,comment],(err,result)=>{
        if(err)throw err;
        // console.log(result);
        if(result.affectedRows==1){
            res.json({code:1,msg:'评论发送成功'});
        }

    })

})

module.exports = router;

