console.log('Express Tutorial')

const http = require("http");

const server = http.createServer((req, res) => {
    console.log("server got request");
    
    res.writeHead(200,{"content-type": "text/html"})

    html = `
    <div style="display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh;">
        <h1>Hello, world!</h1>
    </div>
    `;

    html404 = `
    <div style="display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh;">
        <h1>Page not found!</h1>
    </div>
    `;

    res.write(html, (err) => {
        console.log(err + " error");
    })

    if (res.statusCode === 404 ) {
        res.write(html404);
    }
    res.end();

    console.log(res.statusCode)
    console.log(res.statusMessage)
});

server.listen(2000);