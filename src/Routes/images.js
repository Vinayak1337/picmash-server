const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { GetImage, StoreImage, DeleteImage } = require('../Controllers/images.js');
const { Router } = express;
const ImagesRouter = Router();
dotenv.config();

const storage = new GridFsStorage({
	url: process.env.URI,
	options: {
		useNewUrlParser: true, useUnifiedTopology: true,
	},
	file: (_req, file) => {
		const match = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

		if (match.indexOf(file.mimetype) === -1) {
			return file.originalname;
		}

		return {
			bucketName: 'images',
			filename: file.originalname,
		};
	},
});

const Storage = multer({ storage });

ImagesRouter.post('/', Storage.single('image'), StoreImage);

// Static / Stream images

const images = {
	storage: null,
};

const conn = mongoose.connection;
conn.once('open', () => {
	images.storage = Grid(conn.db, mongoose.mongo);
	images.storage.collection('images');
	console.log('Connected to Images collection');
});

ImagesRouter.get('/:filename', GetImage.bind(null, images));

ImagesRouter.delete('/:filename', DeleteImage(images));

module.exports = ImagesRouter;