const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean1901');

const singerSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
    link: { type: String, trim: true, required: true, unique: true }
});

const Singer = mongoose.model('Singer', singerSchema);

const singer = new Singer({ 
    name: 'Duc Phuc', 
    image: '1.png', 
    link: 'https://fb.com/duc-phuc' 
});

singer.save()
.then(s => console.log(s))
.catch(error => console.log(error));

// console.log(singer);
