const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,"public");
const app = express();
const http = require('http');
const socketIo = require('socket.io');

var port = process.env.PORT || 4000;

app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIo(server);


io.on('connection', (socket) => {
	console.log('New Connection received');

	socket.on('chat', (msg) => {
		io.emit('chat',msg);
		console.log(msg);
	});

})


server.listen(port,() => {
	console.log(`Server is running on ${port}`);

});