const express = require("express");
const path = require("path"); //path module
const app = express();
const morgan = require("morgan");


//I will use request params to navigate in products
app.listen(5000, ()=> {
    console.log("Listening server on port 5000. This is from callback func.")
});

app.use(); //Use of middleware, (package)

app.get("/", (req, res) => {
    
    res.end("home --> /")
})



//It's weird that I didn't type any code. But I finished it. Tutorial Name: Node.js and Express.js - Full Course, Channel Name: freeCodeCamp.org, Time: 8:16:47