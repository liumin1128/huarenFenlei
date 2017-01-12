/*
* @Author: 刘敏
* @Date:   2016-02-17 20:53:06
* @Last Modified by:   刘敏
* @Last Modified time: 2016-02-19 09:05:19
*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app)
app.use('/', express.static(__dirname + '/dist'));
server.listen(8000);
console.log("服务器8000")

