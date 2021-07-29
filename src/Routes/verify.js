import { Router } from 'express';
import UserModel from '../Provider/UserModel.js';

const users = UserModel;
const VerifyRouter = Router();

VerifyRouter.get('/', async (req, res) => {
	const { username, email } = req.body;
	if (!(username && email)) return res.status(202).json({ message: 'No body' });
	if (username) {
		const user = await users.findOne({ username });
		if (user) return res.status(408).json({ message: 'Username is not available' });
	}
	else if (email) {
		const user = await users.findOne({ email });
		if (user) return res.status(408).json({ message: 'Email is not available' });
	}
	res.status(200).json('Username & Email are available');
});

export default VerifyRouter;