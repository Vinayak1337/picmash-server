import PostModel from "../Provider/PostModel.js"
import UserModel from "../Provider/UserModel.js"

const posts = PostModel
const users = UserModel

export const GetPosts = async (_req, res) => {
    const Posts = posts.find()
    res.status(200).json(Posts)
}

export const CreatePost = async (req, res) => {
    const { userid, message, imageUrl, alt, height, width, title } = req.body;

    if (!userid) return res.status(408).json({message: 'Incomplete post details - No UserId'})
    if (!message && !imageUrl) return res.status(408).json({message: 'Incomplete post details - No Message / Image URL'})
    if (imageUrl && !(alt || height|| width)) return res.status(408).json({message: 'Incomplete post details - Incomplete Image properties'})

    const postObject = {
        userid, message, imageUrl, alt, height, width, title
    }

    const post = await new posts(postObject).save()
    const user = await users.findOne({_id: userid})

    user.imagesPosted += 1
    await user.save()

    res.status(200).json(post)
}

import fs from 'fs';

export const DeletePost = async (req, res) => {
	const { postid, userid } = req.body;

    if (!(postid || userid)) return res.status(202).json({message: "Incomplete details"});

    const post = await db.posts.findOne({_id: postid});
    if (!post) return res.status(402).json({message: 'No such post found'});

    const user = await db.users.findOne({_id: userid});
    fs.unlinkSync('./src/postImages/'+post.alt);

    user.imagesPosted -= 1;
    await user.save();
    await post.remove();
    return res.status(200).json({message: 'success'});
};