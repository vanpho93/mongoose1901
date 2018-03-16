const express = require('express');
const { upload } = require('./uploadConfig');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('/public'));

app.get('/', (req, res) => res.render('upload'));

app.get('/make-error', (req, res) => {
    res.send(abcd);
});

app.post('/upload', (req, res) => {
    // console.log(req.file);
    upload.single('singerImage')(req, res, error => {
        if (error) return res.send('Loi ' + error.message);
        console.log(req.body);
        console.log(req.file);
        res.send('OK');
    });
});

app.post('/upload-array', upload.array('singerImage'), (req, res) => {
    console.log(req.files);
    res.send('OK');
});

// app.post('/upload-fields', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]), (req, res) => {
//     console.log(req.files);
//     res.send('OK');
// });

app.post('/upload-fields', upload.any(), (req, res) => {
    console.log(req.files);
    res.send('OK');
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(3000, () => console.log('Server started!'));
