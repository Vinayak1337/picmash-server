const SECRETS = require('../util');

exports.GetImage = async (images, req, res) => {
	try {
		const file = await images.storage.files.findOne({
			filename: req.params.filename
		});
		const readStream = images.storage.createReadStream(file.filename);
		readStream.pipe(res);
	} catch (error) {
		res.status(404).send('Image not found');
	}
};

exports.StoreImage = (req, res) => {
	if (!req.file) return res.status(402).json({ message: 'Incomplete details' });
	res.status(200).json(`${SECRETS.PORT}/images/${req.file.filename}`);
};

exports.DeleteImage = images => async (req, res) => {
	try {
		await images.storage.files.deleteOne({ filename: req.params.filename });

		res.status(200).json('Deleted sucessfully');
	} catch (error) {
		res.status(400).json('Image not found');
	}
};
