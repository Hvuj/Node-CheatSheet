var http = require('http');
var fs = require('fs');

var mystream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

mystream.pipe(mywriteStream);


