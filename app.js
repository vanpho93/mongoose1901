const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(req.path);
    next();
});

// next.js

// const myMiddleware = (req, res, next) => {
//     res.send('123');
//     // req.name = 'abcd';
//     // next();
// };

app.get('/', (req, res, next) => {
    // console.log('Name =', req.name);
    // res.render('app');
    // res.send('a');
    next();
});

app.get('/', (req, res, next) => {
    // console.log('Name =', req.name);
    // res.render('app');
    res.send('b');
});

// app.get('*', (req, res) => res.send('404'));

app.listen(3000, () => console.log('Server started!'));
reload(app);

// middleware
