const express = require('express');
const pool = require('../pool');
var router = express.Router();
router.get('/accTheme',(req,res)=>{
    var sql = `select pic,title,theme from accesories`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        // console.log(result);
        res.json({code:1,data:result})
    })
})

module.exports=router;