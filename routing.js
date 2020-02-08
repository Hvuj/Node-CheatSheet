var http = require('http');
var fs = require('fs');

//creating servers
var http = require('http');

var server = http.createServer((req, res) => {
    console.log('request was made:' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
    } else if (req.url === '/api/heroes') {
        var heroes = [{
                name: 'hvuj',
                age: 29
            },
            {
                name: 'hvuj 2',
                age: 29
            }
        ];
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(heroes));
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('server is running on port 3000');