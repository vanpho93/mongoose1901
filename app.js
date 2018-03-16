const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.send('Hello.'));
app.listen(3000, () => console.log('Server started!'));
