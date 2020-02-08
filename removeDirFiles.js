var fs = require('fs');

//creating directories

// fs.mkdirSync('stuff');

//delete dir
// fs.rmdirSync('stuff');

//create dir and write new file
// fs.mkdir('stuff', ()=>{
//     fs.readFile('readMe.txt', 'utf8', (err, data)=>{
//         fs.writeFile('./stuff/writeMe.txt', data, (err)=>{})
//     })
//     console.log('created dir')
// });

//remove dir and file
// fs.unlink('./stuff/writeMe.txt', (err) => {
//     console.log(err,'file deleted 1st');
//     fs.rmdir('stuff', (err) => {
//         console.log(err, 'dir deleted 2nd');
//     })
// });