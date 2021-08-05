const { Router } = require('express');
const { DeleteUser, Register, SignIn, UpdateUser } = require('../Controllers/user.js');

const UserRouter = Router();

UserRouter.post('/create', Register);

UserRouter.post('/get', SignIn);

UserRouter.put('/update', UpdateUser);

UserRouter.delete('/delete', DeleteUser);

module.exports = UserRouter;
