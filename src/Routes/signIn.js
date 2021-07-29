import { Router } from "express"
import { DeleteUser, Register, SignIn } from "../Controllers/singnIn.js"

const SignInRouter = Router()

SignInRouter.post('/get', Register)

SignInRouter.post('/create', SignIn)

SignInRouter.delete('/delete', DeleteUser)

export default SignInRouter
