const { Router } = require('express');
const { DeleteUser, Register, SignIn } = require('../Controllers/singnIn.js');

const SignInRouter = Router();

SignInRouter.post('/create', Register);

SignInRouter.post('/get', SignIn);

SignInRouter.delete('/delete', DeleteUser);

module.exports = SignInRouter;
