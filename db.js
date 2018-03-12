const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean1901');

const singerSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
    link: { type: String, trim: true, required: true, unique: true }
});
const Singer = mongoose.model('Singer', singerSchema);

Singer.findById('5aa662005e9d688cd99d4108')
.then(singer => console.log(singer))
.catch(error => console.log(error));
