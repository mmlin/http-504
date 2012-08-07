#!/usr/bin/env node

// Required modules.
var http = require('http');

// Get the port from the command line or default to 8080.
var DEFAULT_PORT = 8080,
    port = DEFAULT_PORT;
if (process.argv.length == 3) {
    port = parseInt(process.argv[2]);
    if (isNaN(port))
        port = DEFAULT_PORT;
}

// Create the HTTP server.
http.createServer(function(req, res) {

    res.writeHead(504, {
        'Content-Type': 'text/plain'
    });
    res.end('504 Gateway Time-out');
    
    // Log each request to the console.
    console.log(req.method + ' ' + req.url);
    
}).listen(port);

console.log('HTTP server started on port ' + port);
