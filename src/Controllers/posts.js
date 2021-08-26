const PostModel = require('../Models/PostModel.js');
const UserModel = require('../Models/UserModel.js');

const posts = PostModel;
const users = UserModel;

exports.GetPosts = async (_req, res) => {
	const Posts = posts.find({});
	res.status(200).json(Posts);
};

exports.CreatePost = async (req, res) => {
	const { userid, message, imageUrl, alt, height, width, title } = req.body;

	if (!userid) return res.status(400).json({ message: 'Incomplete post details - No UserId' });
	if (!message && !imageUrl) return res.status(400).json({ message: 'Incomplete post details - No Message / Image URL' });
	if (imageUrl && !(alt || height || width)) return res.status(400).json({ message: 'Incomplete post details - Incomplete Image properties' });

	const postObject = {
		userid, message, imageUrl, alt, height, width, title,
	};

	const post = await new posts(postObject).save();
	const user = await users.findOne({ _id: userid });

	user.imagesPosted += 1;
	await user.save();

	res.status(200).json(post);
};


exports.DeletePost = async (req, res) => {
	const { postid, userid } = req.body;

	if (!(postid || userid)) return res.status(400).json({ message: 'Incomplete details' });

	const post = await posts.findOne({ _id: postid });
	if (!post) return res.status(400).json({ message: 'No such post found' });

	const user = await users.findOne({ _id: userid });

	user.imagesPosted -= 1;
	await user.save();
	await post.remove();
	return res.status(200).json({ message: 'success' });
};