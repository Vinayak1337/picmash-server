import { Router } from "express"
import { CreatePost, DeletePost, GetPosts } from "../Controllers/posts.js"

const PostRouter = Router()

PostRouter.get('/', GetPosts)

PostRouter.post('/', CreatePost)

PostRouter.delete('/', DeletePost)

export default PostRouter
