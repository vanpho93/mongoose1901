const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('upload'));

app.post('/upload', (req, res) => {
    res.send('OK');
});

app.listen(3000, () => console.log('Server started!'));
