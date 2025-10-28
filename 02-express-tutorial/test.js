const express = require("express");

const app = express();

app.listen(5555, ()=> {
    console.log("Listening port 5555");
})

// simple proxy (Express)
app.get('/proxy', async (req,res)=>{
  const r = await fetch('https://ceng.iyte.edu.tr/tr/');
  const text = await r.text();
  res.set('Content-Type','text/html').send(text);
});
