const { Router } = require('express');
const { CreatePost, DeletePost, GetPosts } = require('../Controllers/posts.js');

const PostRouter = Router();

PostRouter.get('/', GetPosts);

PostRouter.post('/', CreatePost);

PostRouter.delete('/', DeletePost);

module.exports = PostRouter;
