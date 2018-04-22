const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const session = require('express-session');

var app = express();

var server = http.createServer(app);
server.listen('3000',function () {
    console.log('port 3000')
});

app.use(express.static('./public'))
app.use(session({
    secret:'an',
    resave:false,
    saveUninitialized:true
}));

const routerUser = require('./router/user');
const routerCarrera = require('./router/Carrera');
const routerABP = require('./router/aboutPorche');
const routerAcc = require('./router/accessories');
const routerLive = require('./router/live');
//user路由
app.use('/user',routerUser);
app.use('/Carrera',routerCarrera);
app.use('/abP',routerABP);
app.use('/acc',routerAcc);
app.use('/live',routerLive);

const io = require('socket.io')(server);
io.on('connection', (socket) => {
    socket.on('sendMsg', (data) => {
        data.id = socket.id;
        io.emit('receiveMsg', data);
    })
});

// 404路由
app.use('*',function (req,res) {
    res.redirect('./404/index.html');
})
