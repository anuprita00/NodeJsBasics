//importing http module
const http = require('http');

const server = http.createServer((req,res) => { 
    //takes callback function with 2 argument request and response
    console.log(req);
});

//cretes a listener on specific path or port
//server.listen(port, hostname, backlog, callback);
server.listen(3000);