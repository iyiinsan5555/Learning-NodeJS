const express = require("express");
const path = require("path"); //path module
const app = express();

app.listen(5000, (err)=> {
    console.log("Server is listening on port 5000");
})


// app.get --> GET // Gets data
// app.post --> POST // Posts/interts data
// app.push --> PUSH // Update data
// app.delete --> DELETE // Delete data


app.use(express.static("./static-folder"));

//route is "/"
app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"));

})


// route is /about
app.get("/about", (req, res) => {
    res.status(200).send("About page");
});

app.all("*", (req, res)=>{
    res.status(404).send("<h1>Page not found</h1>");
})


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