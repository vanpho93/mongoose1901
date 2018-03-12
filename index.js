const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const { Singer } = require('./db');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    Singer.find({})
    .then(singers => res.render('index', { singers }))
    .catch(error => res.send(error));
});

app.get('/remove/:id', (req, res) => {
});

app.post('/add', parser, (req, res) => {
    const { name, link, image } = req.body;
    const singer = new Singer({ name, link, image });
    singer.save()
    .then(() => res.redirect('/'))
    .catch(error => res.send(error));
});
app.post('/update/:id', parser, (req, res) => {
});

app.get('/add', (req, res) => res.render('add'));

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    Singer.findById(id)
    .then(singer => res.render('update', { singer }))
    .catch(error => res.send(error));
});

app.listen(3000, () => console.log('Server started!'));
reload(app);