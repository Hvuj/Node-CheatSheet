var http = require('http');
var fs = require('fs');

//creating servers
var http = require('http');

var server = http.createServer((req, res) => {
    console.log('request was made:' + req.url);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var myObj = {
        name:'Hvuj',
        Job:'prog',
        age:29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('server is running on port 3000');