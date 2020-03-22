const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("I have conquered the internet. Dab on them.");
});

app.listen(81, ()=> console.log('listening on port 81.'));
