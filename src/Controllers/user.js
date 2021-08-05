const UserModel = require('../Provider/UserModel.js');
const argon2 = require('argon2');
const users = UserModel;

exports.Register = async (req, res) => {

	const { username, email, password, displayName } = req.body;
	if (!(email || password || username)) return res.status(400).json({ message: 'Incomplete details.' });

	const hash = await argon2.hash(password);
	const user = { username, displayName: displayName || username, email, password: hash };

	let item;
	try {
		item = await new users(user).save();
	}
	catch (error) {
		return res.status(400).json({ message: 'Error registering, please use different email or username' });
	}

	return res.status(200).json({
		id: item._id,
		avatar: item.avatar,
		username: item.username,
		email: item.email,
		displayName: item.displayName,
		imagesPosted: item.imagesPosted,
		totalLikes: item.totalLikes,
	});
};

exports.SignIn = async (req, res) => {
	const { email, password } = req.body;
	if (!(email || password)) return res.status(400).json({ message: 'Incomplete details.' });

	let user = await users.findOne({ email });
	if (!user?.id) user = await users.findOne({ username: email });
	if (!user?.id) return res.status(404).json({ message: 'Not found.' });

	const passVerified = await argon2.verify(user.password, password);
	if (!passVerified) return res.status(400).json({ message: `Either ${email.includes('.com') && email.includes('@') ? 'email' : 'username'} or password is incorrect` });

	return res.status(200).json({
		id: user._id,
		avatar: user.avatar,
		username: user.username,
		displayName: user.displayName,
		email: user.email,
		imagesPosted: user.imagesPosted,
		totalLikes: user.totalLikes,
	});
};

exports.update = async (_req, res) => {
	res.status(0).json('Under construction');
};

exports.DeleteUser = async (req, res) => {
	const { userid } = req.body;

	if (!userid) return res.status(400).json({ message: 'userid is required' });

	const user = await users.findOne({ _id: userid });

	if (!user) return res.status(400).json({ message: 'user not found' });

	await user.remove();

	return res.status(200).json({ message: 'Successfully deleted the user' });
};