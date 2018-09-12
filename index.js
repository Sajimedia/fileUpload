var siofu = require("socketio-file-upload");
var app = require('express')().use(siofu.router);
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res) {
   res.sendfile('index.html');
});
io.on('connection', function(socket) {
   console.log('A user connected');
   var uploader = new siofu();
    uploader.dir = "uploads";
    uploader.listen(socket);
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});