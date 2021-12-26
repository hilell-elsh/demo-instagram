const cloudinary = require('../services/cloudinary');
const multer = require('multer');
const upload = multer({ dest: '/temp' })

module.exports = (app) => {
    app.post('/api/upload', upload.single("photo") ,(req, res) => {
        cloudinary.uploader.upload(req.file.path, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    })
}