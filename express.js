var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('hey');
});
app.get('/contact', (req, res)=>{
    res.send('contact');
});

app.get('/profile/:id', (req, res) =>{
    res.send('requested a profile with id of ' + req.params.id);
});
app.get('/ages/:age', (req, res) =>{
    res.send('the age is: ' + req.params.age);
});
app.get('/hvuj/:id', (req, res)=>{
    res.send('hey this hvuj number is : ' + req.params.id);
});

app.listen(3000);

//app.get('route',fn)
//app.post('route',fn)
//app.delete('route',fn)

