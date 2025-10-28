const express = require("express");
const path = require("path"); //path module
const app = express();
const morgan = require("morgan");


//I will use request params to navigate in products
app.listen(5000, ()=> {
    console.log("Listening server on port 5000. This is from callback func.")
});

app.use(morgan("dev")); //Use of middleware, (package)

app.get("/", (req, res) => {
    
    res.end("home --> /")
})

app.get("/product/:productId", (req, res)=> {
    //console.log(req.params); //Testing out
    requestParams_json = {"request params":req.params}
    res.json(requestParams_json);
});


app.get("/testing/query", (req, res) => {
    const query = req.query;
    const entries = Object.entries(query);

    html = "";

    entries.forEach(([key, value]) => {
        html += `<h3>Key: ${key}</h3><h3>Value: ${value}</h3><span style="display: block;">-----------------</span>`
        html += ``
    });

    res.send(html);

});



const getData = async () => { //Test
    try {
        const respond = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true");
        const data = await respond.json();

        //console.log(data);

    } catch (error) {
        //console.log(error);
    }
}

getData();

// my lecturer says that I will use express for 2 main things
/**
    1- API --> Application Programming Interface / Request and Respond mechanism (shortly), usually json
    2- SSR --> Server Side Rendering / Render your page for your client using http (server-side) --> Dynamic page, handle url changes, get data etc

    ChatGPT Version 
    1 - API (with Express) → You create endpoints that handle HTTP requests and return responses, usually JSON.
    This is how your frontend or other services communicate with your backend.

    2 - SSR (Server-Side Rendering) → Express can render HTML pages on the server before sending them to the client.
    This allows dynamic pages that can fetch data, handle URLs, and send fully-formed HTML instead of just raw JSON.

 */


/*

    1- Route Params
    2- Query Params

    Route param → part of the URL path (used to identify a specific resource).
    Example: /users/:id → /users/5 → id = 5

    Query param → part of the URL after ? (used to filter/sort/search).
    Example: /users?age=20&sort=asc → age = 20, sort = asc

*/ 



//Stayed at 6:44:57 --> Methods