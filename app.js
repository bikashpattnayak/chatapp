const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,"public");
const app = express();
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4000;

app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIo(server);


io.on('connection', (socket) => {
	console.log('New Connection received');

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	})

})


server.listen(port,() => {
	console.log(`Server is running on ${port}`);

});