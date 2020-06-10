const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname+'/../Front End Content/index.html')));

app.get('/redirect/githubs/this',(req,res)=>{
	res.redirect(301,'https://google.com');
});

app.use((req,res)=>res.sendFile(path.resolve(__dirname+'/../Front End Content/'+req.url)));

app.listen(81,()=> console.log('listening on port 81.'));
