const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(`<h1>Hello world</h1>`);
    res.write(`<p>Hello server</p>`);
    res.end('<p>Hello ZeroCho</p>');
});