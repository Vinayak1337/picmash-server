const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const {
	GetImage,
	StoreImage,
	DeleteImage
} = require('../Controllers/images.js');
const SECRETS = require('../util.js');
const { Router } = express;
const ImagesRouter = Router();
dotenv.config();

const storage = new GridFsStorage({
	url: SECRETS.MONGODB_URI,
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	file: (_req, file) => {
		const filename = `${file.originalname}.${file.mimetype.replace(
			'image/',
			''
		)}`;
		return {
			bucketName: 'postImages',
			filename
		};
	}
});

const Storage = multer({ storage });

ImagesRouter.post('/', Storage.single('postImage'), StoreImage);

// Static / Stream images

const images = {
	storage: null
};

const conn = mongoose.connection;
conn.once('open', () => {
	images.storage = Grid(conn.db, mongoose.mongo);
	images.storage.collection('postImages');
	console.log('Connected to Images collection');
});

ImagesRouter.get('/:filename', GetImage.bind(null, images));

ImagesRouter.delete('/:filename', DeleteImage(images));

module.exports = ImagesRouter;
