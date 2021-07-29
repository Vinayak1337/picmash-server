import { Router } from "express"
import { DeleteUser, Register, SignIn } from "../Controllers/singnIn.js"

const SignInRouter = Router()

SignInRouter.post('/', Register)

SignInRouter.get('/', SignIn)

SignInRouter.delete('/', DeleteUser)

export default SignInRouter
