
const requestHandler = (req,res) => {
   
    res.setHeader( 'Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title> </head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

}

//connecting module files by different ways
// module.exports = requestHandler;

module.exports ={
    handler: requestHandler,
    someText: "Some code"
}

// exports.module = requestHandler;