//importing http module
const http = require('http');

//connecting your own module file
const route = require('./routes');

//createserver() does not end on its own we need to use process.exit() to end 
const server = http.createServer(route);
console.log(route.someText);
//     (req,res) => { 
//     //takes callback function with 2 argument request and response
//     console.log(req);
//     //sending a response
//     res.setHeader( 'Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title> </head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
    
// });

//cretes a listener on specific path or port
//server.listen(port, hostname, backlog, callback);

server.listen(3000);