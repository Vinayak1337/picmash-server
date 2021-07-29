import express, { Router } from 'express';
import multer from 'multer';
const ImagesRouter = Router();
import { StoreImage, DeleteImage } from '../Controllers/images.js';

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

export default ImagesRouter;