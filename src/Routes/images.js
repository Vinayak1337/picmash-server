const express = require('express');
const { Router } = express;
const multer = require('multer');
const ImagesRouter = Router();
const { StoreImage, DeleteImage } = require('../Controllers/images.js');

const storage = multer.diskStorage({
	destination: function(_req, _file, cb) {
		cb(null, './src/postImages/');
	},
	filename: function(_req, file, cb) {
		cb(null, file.originalname);
	},
});

const Storage = multer({ storage });

ImagesRouter.get('/', express.static('../postImages'));

ImagesRouter.post('/', Storage.single('images'), StoreImage);

ImagesRouter.delete('/', DeleteImage);

module.exports = ImagesRouter;