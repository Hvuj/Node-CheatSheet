var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
    res.render('partials/index');
});
app.get('/contact', (req, res) => {
    res.render('partials/contact', {
        qs: req.query
    });
});

app.get('/profile/:name', (req, res) => {
    var data = {
        age: 29,
        job: 'hvujer',
        hobbies: [
            'eating',
            'fighting',
            'finishing'
        ]
    }
    res.render('profile', {
        person: req.params.name,
        data: data
    });
});
// app.get('/ages/:age', (req, res) =>{
//     res.send('the age is: ' + req.params.age);
// });
// app.get('/ids/:id', (req, res)=>{
//     res.render('ids', {
//         name: req.params.id
//     });
// });
// app.get('/hvuj/:id', (req, res)=>{
//     res.send('hey this hvuj number is : ' + req.params.id);
// });

app.listen(3000);

//app.get('route',fn)
//app.post('route',fn)
//app.delete('route',fn)