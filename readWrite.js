var fs = require('fs');

// fs.readFile('readme.txt', 'utf8', (err, data) => {
//     fs.writeFile('writeMe.txt', data, (err) => {
//         console.log('no error' ,err);
//     });
//     // console.log(data);
// });
// fs.writeFileSync('wrtieMe.txt', readMe);

//delete files

fs.unlink('writeMe.txt', (err) => {});