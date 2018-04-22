const express = require('express');
const pool = require('../pool');
var router = express.Router();

router.get('/news',(req,res)=>{
    var sql = `select name,news from ab_news`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        // console.log(result);
        res.json({code:1,data:result});
    })
})

module.exports = router;
