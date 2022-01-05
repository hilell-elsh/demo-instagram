const { Router } = require('express');
const { createUser } = require('../controllers/admin')

const adminRouter = Router();
adminRouter.post('/api/admin/users', createUser);
// adminRouter.post('/api/admin/posts', );
// adminRouter.post('/api/admin/tags', );


module.exports = adminRouter;
