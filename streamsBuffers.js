//read streams
var http = require('http');
var fs = require('fs');

var mystream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

mystream.on('data', (chunk)=>{
    console.log('new chunk recieved');
    console.log(chunk);
});

//write stream

var mywriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

mystream.on('data', (chunk)=>{
    console.log('new chunk recieved');
    console.log(chunk);
    mywriteStream.write(chunk);
    console.log(chunk);
});
