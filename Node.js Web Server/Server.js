const port = 81;
const express = require('express');
const app = express();
const path = require('path');

app.get('/Projects/ChatApp',(req,res) => {
  res.redirect("http://williamf.mynetgear.com:82");
});

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname+'/../Front End Content/index.html')));

app.use((req,res)=>res.sendFile(path.resolve(__dirname+'/../Front End Content/'+req.url)));

app.listen(port,()=> console.log('listening on port '+ port +'.'));
