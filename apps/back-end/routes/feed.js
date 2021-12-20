const { Router } = require('express');

const feedRouter = Router();
feedRouter.get('/api/feed', getFeed);


module.exports = feedRouter;
