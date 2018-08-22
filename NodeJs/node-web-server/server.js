const express = require('express');
const hbs = require('hbs');

var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', hbs);

app.get('/',(req,res) => {
    res.send('<h1> Hello World! </h1>');
})

app.get('/bad', (req,res) => {
    res.send( {
        error: "Error Page"
    })
});

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        title : 'Home Page',
        currentYear: new Date().getFullYear()
    })
})


app.listen(3000, () => {
    console.log('Node Server is up and running');
});