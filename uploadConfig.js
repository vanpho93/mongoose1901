const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public'),
    filename: (req, file, cb) => {
        const lastDotIndex = file.originalname.lastIndexOf('.');
        const extension = file.originalname.substring(lastDotIndex);
        const randomNumber = Math.round(Math.random() * 10000);
        cb(null, Date.now() + '-' + randomNumber + extension);
    }
});

function fileFilter(req, file, cb) {
    const { mimetype } = file;
    if (mimetype === 'image/png' || mimetype === 'image/jpeg') {
        return cb(null, true);
    }
    // cb(null, false);
    cb(new Error('Invalid mime type.'));
}

const limits = { fileSize: 102400 };

const upload = multer({ storage, fileFilter, limits });

module.exports = { upload };
