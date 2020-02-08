var http = require('http');
var fs = require('fs');

//creating servers
var http = require('http');

var server = http.createServer((req, res) => {
    console.log('request was made:' + req.url);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var mystream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    mystream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('server is running on port 3000');