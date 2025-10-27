console.log('Express Tutorial')

const {readFileSync} = require("fs");

//Get all files
const pagenotfoundHTML = readFileSync("./pagenotfound.html"); //we only get file (with syncronous code) once so it's not problem


const http = require("http");

const server = http.createServer((req, res) => {
    console.log("server got request");
    
    const url = req.url;

    if (url === "/") { //Home page
        res.end("Home page");
    }
    else if (url === "/about") { //About page
        res.end("about page");
    } else {
        res.write(pagenotfoundHTML);
        res.end();
    }


});

server.listen(2000);