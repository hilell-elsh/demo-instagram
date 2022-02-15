const { Router } = require('express')
const cloudinary = require('../services/cloudinary')
const multer = require('multer')
const upload = multer({ dest: './temps' })

const uploadRouter = Router()

const uploadImage = (req, res) => {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) {
            res.status(500).json(err).end()
        } else {
            res.status(200).json(result.secure_url).end()
        }
    })
}

uploadRouter.post('/api/upload', upload.single('photo'), uploadImage)

module.exports = uploadRouter
