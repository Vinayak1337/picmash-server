const { Router } = require('express');
const UserModel = require('../Models/UserModel.js');

const users = UserModel;
const VerifyRouter = Router();

VerifyRouter.post('/', async (req, res) => {
	const { username, email } = req.body;
	if (!username && !email) return res.status(400).json({ message: 'No body' });
	if (username) {
		const user = await users.findOne({ username });
		if (user) return res.status(406).json({ message: 'Username is not available' });
	}
	else if (email) {
		const user = await users.findOne({ email });
		if (user) return res.status(406).json({ message: 'Email is not available' });
	}
	res.status(200).json(`${email ? 'Email' : 'Username'} is available`);
});

module.exports = VerifyRouter;