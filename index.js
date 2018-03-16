const fs = require('fs');
const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const { upload } = require('./uploadConfig');
const { Singer } = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    Singer.find({})
    .then(singers => res.render('index', { singers }))
    .catch(error => res.send(error));
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    Singer.findByIdAndRemove(id)
    .then(singer => {
        if (singer.image !== 'default.png') fs.unlinkSync(__dirname + '/public/' + singer.image);
        res.redirect('/');
    })
    .catch(error => res.send(error));
});

app.post('/add', upload.single('image'), (req, res) => {
    const { name, link } = req.body;
    const image = req.file ? req.file.filename: 'default.png';
    const singer = new Singer({ name, link, image });
    singer.save()
    .then(() => res.redirect('/'))
    .catch(error => res.send(error));
});

app.post('/update/:id', upload.single('image'), (req, res) => {
    const { name, link } = req.body;
    const { id } = req.params;
    const updateObj = { name, link };
    if (req.file) updateObj.image = req.file.filename;
    Singer.findByIdAndUpdate(id, updateObj)
    .then(singer => {
        if (singer.image !== 'default.png') fs.unlinkSync(__dirname + '/public/' + singer.image);
        res.redirect('/');
    })
    .catch(error => res.send(error));
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