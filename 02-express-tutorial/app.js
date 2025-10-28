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


//I didn't do anything. I already knew the things taught.
//Stayed at 7:21:22 --> Install Postman