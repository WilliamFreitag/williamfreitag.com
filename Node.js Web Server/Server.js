const port = 81;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var i = 0;

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('globalMessage', (message) =>{
    console.log("emmiting " + message);
    io.emit('globalMessage',message);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.get('/Projects/InstantMessagingApp',(req,res) => {
  res.render("chat.ejs",{});
});

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname+'/../Front End Content/index.html')));

app.use((req,res)=>res.sendFile(path.resolve(__dirname+'/../Front End Content/'+req.url)));

http.listen(port,()=> console.log('listening on port '+ port +'.'));
