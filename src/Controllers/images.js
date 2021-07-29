import fs from 'fs';

export const StoreImage = (req, res) => {
	if (!req.file) return res.status(202).json({ message: 'Incomplete details' });
	res.status(200).json(`http://localhost:8080/images/${req.file.originalname}`);
};


export const DeleteImage = async (req, res) => {
	const { filename } = req.body;
	if (!filename) return res.status(202).json({ message: 'Incomplete details' });

	fs.unlinkSync('./src/postImages/' + filename);

	res.status(200).json({ message: 'Deleted successfully' });
};