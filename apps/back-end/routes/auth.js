const { Router } = require('express');

const authRouter = Router();
authRouter.post('/api/login', login);
authRouter.post('/api/signup', signup);
authRouter.post('/api/logout', logout);


module.exports = authRouter;
