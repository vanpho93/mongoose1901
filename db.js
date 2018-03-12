const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean1901');

const singerSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
    link: { type: String, trim: true, required: true, unique: true }
});
const Singer = mongoose.model('Singer', singerSchema);

/* create new doc
const singer = new Singer({ 
    name: 'Duc Phuc', 
    image: '1.png', 
    link: 'https://fb.com/duc-phuc' 
});

singer.save()
.then(s => console.log(s))
.catch(error => console.log(error));

Singer.insertMany(
    [
        { 
            name: 'Erik', 
            image: '2.png', 
            link: 'https://fb.com/erik' 
        },
        { 
            name: 'Hoa Minzy', 
            image: '3.png', 
            link: 'https://fb.com/hoa-minzy' 
        }
    ]
)
.then(s => console.log(s))
.catch(error => console.log(error));
*/
