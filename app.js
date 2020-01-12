const express = require('express');
const socketIo = require('socket.io')(80);
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);
const SerialPort = require('serialport');


app.get('/',(req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('encender', function (msj) {
    console.log(msj.toString());
	setTimeout(function() {
	mySerial.write(msj.toString(), function(err, results) {
		});
	}, 2000);
  });
  socket.on('apagar', function (msj) {
    console.log(msj.toString());
	setTimeout(function() {
	mySerial.write(msj.toString(), function(err, results) {
		});
	}, 2000);
  });
});

const mySerial = new SerialPort('COM5',{
	baudRate:9600
});

mySerial.on('open', function (){
	console.log('Opened Serial Port');
	
});

mySerial.on('data', function(data) {
    console.log(data.toString());
	io.emit('arduino:dataSerial',{
		value: data.toString()
	});
});



server.listen(3000,() => {
	console.log('server on port *', 3000);
});